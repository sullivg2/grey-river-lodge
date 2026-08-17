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
  isRealTime: boolean;
  stationId: string;
  stationName: string;
}

export interface GreyRiverWeather {
  temperatureC: number;
  temperatureF: number;
  windSpeedKmh: number;
  windSpeedMph: number;
  weatherCode: number;
  conditionText: string;
  isRealTime: boolean;
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
  isRealTime: false,
  stationId: '02ZD002',
  stationName: 'Grey River Station 02ZD002 (ECCC)'
};

export const DEFAULT_WEATHER_DATA: GreyRiverWeather = {
  temperatureC: 16,
  temperatureF: 61,
  windSpeedKmh: 14,
  windSpeedMph: 9,
  weatherCode: 2,
  conditionText: 'Partly Cloudy',
  isRealTime: false
};

// Maps WMO standard weather codes to readable conditions
function getWeatherCondition(code: number): string {
  if (code === 0) return 'Clear Skies';
  if (code === 1 || code === 2) return 'Partly Cloudy';
  if (code === 3) return 'Overcast';
  if (code >= 45 && code <= 48) return 'Coastal Fog';
  if (code >= 51 && code <= 55) return 'Light Drizzle';
  if (code >= 61 && code <= 65) return 'Rain Showers';
  if (code >= 80 && code <= 82) return 'Heavy Showers';
  return 'Passing Clouds';
}

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
  
  const fetchUrls = [
    '/api/river-gauge',
    directUrl
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

  return DEFAULT_GAUGE_DATA;
}

/**
 * Fetches live weather conditions directly using Environment Canada's High-Resolution GEM Model
 * Location: Grey River, NL (Lat 47.58°N, Lon -57.11°W)
 */
export async function fetchLiveGreyRiverWeather(): Promise<GreyRiverWeather> {
  // Uses Environment Canada GEM endpoint to match official Canadian meteorological observations
  const url = 'https://api.open-meteo.com/v1/gem?latitude=47.58&longitude=-57.11&current=temperature_2m,weather_code,wind_speed_10m&timezone=America%2FSt_Johns';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error('Weather API error');
    const data = await res.json();

    const tempC = Math.round(data.current.temperature_2m);
    const tempF = Math.round((tempC * 9/5) + 32);
    const windKmh = Math.round(data.current.wind_speed_10m);
    const windMph = Math.round(windKmh * 0.621371);
    const code = data.current.weather_code;

    return {
      temperatureC: tempC,
      temperatureF: tempF,
      windSpeedKmh: windKmh,
      windSpeedMph: windMph,
      weatherCode: code,
      conditionText: getWeatherCondition(code),
      isRealTime: true
    };
  } catch {
    return DEFAULT_WEATHER_DATA;
  }
}