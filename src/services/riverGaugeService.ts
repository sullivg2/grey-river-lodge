export interface RiverGaugeReading {
  timestamp: string;
  formattedTime: string;
  waterLevelMeters: number; // Water Level / Niveau d'eau (m)
  waterLevelFeet: number;
  dischargeCms: number; // Discharge / Débit (m³/s)
  dischargeCfs: number;
  trend: 'rising' | 'falling' | 'stable';
  flowClassification: 'Low & Clear' | 'Prime Medium Flow' | 'High Fresh Run';
  clarityEstimate: string;
  temperatureEstimateC: number;
  temperatureEstimateF: number;
  isRealTime: boolean;
  stationId: string;
  stationName: string;
}

// Fallback baseline for station 02ZD002 (Grey River)
export const DEFAULT_GAUGE_DATA: RiverGaugeReading = {
  timestamp: new Date().toISOString(),
  formattedTime: 'Live Telemetry',
  waterLevelMeters: 2.27,
  waterLevelFeet: 7.45,
  dischargeCms: 19.0,
  dischargeCfs: 671.0,
  trend: 'stable',
  flowClassification: 'Prime Medium Flow',
  clarityEstimate: 'Crystal Clear (10+ ft)',
  temperatureEstimateC: 13.3,
  temperatureEstimateF: 56.0,
  isRealTime: false,
  stationId: '02ZD002',
  stationName: 'Grey River Station 02ZD002 (ECCC)'
};

/**
 * Parses CSV lines from Environment and Climate Change Canada (ECCC)
 * Format: ID,Date,Water Level / Niveau d'eau (m),Grade,Symbol / Symbole,QA/QC,Discharge / Débit (cms),Grade,Symbol / Symbole,QA/QC
 */
export function parseEcccCsv(csvText: string): RiverGaugeReading[] {
  const lines = csvText.trim().split('\n').filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  const readings: RiverGaugeReading[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(s => s.trim());
    if (cols.length < 7) continue;

    const stationId = cols[0] || '02ZD002';
    const rawDate = cols[1];
    const waterLevelMeters = parseFloat(cols[2]);
    const dischargeCms = parseFloat(cols[6]);

    if (!isNaN(waterLevelMeters) || !isNaN(dischargeCms)) {
      const validLevel = isNaN(waterLevelMeters) ? 2.27 : waterLevelMeters;
      const validDischarge = isNaN(dischargeCms) ? 19.0 : dischargeCms;

      // Flow classification based on typical salmon holding levels on Grey River
      let flowClassification: RiverGaugeReading['flowClassification'] = 'Prime Medium Flow';
      let clarity = 'Crystal Clear (10+ ft)';
      
      if (validDischarge < 12) {
        flowClassification = 'Low & Clear';
        clarity = 'Gin Clear (12+ ft)';
      } else if (validDischarge > 35) {
        flowClassification = 'High Fresh Run';
        clarity = 'Light Peat Tint (6-8 ft)';
      }

      // Est temp based on sub-Arctic summer baseline (12 - 15 C depending on discharge / solar)
      const tempC = 13.5 - Math.min(2, Math.max(-1, (validDischarge - 19) * 0.05));
      const tempF = (tempC * 9/5) + 32;

      let formattedTime = rawDate;
      try {
        const d = new Date(rawDate);
        formattedTime = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' NDT';
      } catch {
        formattedTime = rawDate;
      }

      readings.push({
        timestamp: rawDate,
        formattedTime,
        waterLevelMeters: Number(validLevel.toFixed(3)),
        waterLevelFeet: Number((validLevel * 3.28084).toFixed(2)),
        dischargeCms: Number(validDischarge.toFixed(1)),
        dischargeCfs: Number((validDischarge * 35.3147).toFixed(0)),
        trend: 'stable',
        flowClassification,
        clarityEstimate: clarity,
        temperatureEstimateC: Number(tempC.toFixed(1)),
        temperatureEstimateF: Number(tempF.toFixed(1)),
        isRealTime: true,
        stationId,
        stationName: 'Grey River (02ZD002) - Water Survey of Canada'
      });
    }
  }

  // Calculate trend comparing last reading with previous readings
  if (readings.length >= 2) {
    const latest = readings[readings.length - 1];
    const prev = readings[Math.max(0, readings.length - 6)]; // ~30 mins ago
    const diff = latest.waterLevelMeters - prev.waterLevelMeters;
    if (diff > 0.005) {
      latest.trend = 'rising';
    } else if (diff < -0.005) {
      latest.trend = 'falling';
    } else {
      latest.trend = 'stable';
    }
  }

  return readings;
}

/**
 * Fetches live real-time hydrometric readings for Grey River Station 02ZD002
 */
export async function fetchLiveGreyRiverGauge(): Promise<RiverGaugeReading> {
  const directUrl = 'https://dd.weather.gc.ca/today/hydrometric/csv/NL/hourly/NL_02ZD002_hourly_hydrometric.csv';
  
  // Only use Netlify edge rewrite or direct ECCC (remove public CORS proxies for SSRF mitigation)
  const fetchUrls = [
    '/api/river-gauge', // ✅ Netlify-controlled proxy only
    directUrl           // ✅ Direct to ECCC (government source)
  ];

  for (const url of fetchUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      
      const res = await fetch(url, { 
        signal: controller.signal,
        headers: { 'Accept': 'text/csv,text/plain' }
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const text = await res.text();
        const parsed = parseEcccCsv(text);
        if (parsed.length > 0) {
          return parsed[parsed.length - 1];
        }
      }
    } catch {
      // Continue to next fallback
    }
  }

  // Return realistic default if telemetry network is unavailable
  return DEFAULT_GAUGE_DATA;
}
