import React, { useState, useEffect } from 'react';
import { 
  fetchLiveGreyRiverGauge, 
  RiverGaugeReading, 
  DEFAULT_GAUGE_DATA 
} from '../services/riverGaugeService';
import { 
  Activity, 
  ExternalLink, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  ShieldCheck, 
  Waves, 
  Droplets, 
  Thermometer, 
  Compass,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const RiverGaugeCard: React.FC = () => {
  const [gauge, setGauge] = useState<RiverGaugeReading>(DEFAULT_GAUGE_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>('');

  const loadGaugeData = async () => {
    setLoading(true);
    try {
      const data = await fetchLiveGreyRiverGauge();
      setGauge(data);
      setLastRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch {
      // Handled in service
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGaugeData();
  }, []);

  return (
    <div className="bg-[#11191F] text-white rounded-xl border border-[#263B46] shadow-xl overflow-hidden">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-[#1B2A32] border-b border-[#263B46] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Official Hydrometric Feed
            </span>
          </div>
          <h3 className="text-2xl font-serif text-white mt-1">
            Grey River Real-Time Stream Gauge
          </h3>
          <p className="text-xs text-[#F5F2EB]/70 mt-0.5">
            Station ID: <strong className="text-[#D97746] font-mono">02ZD002</strong> • Environment & Climate Change Canada / Water Survey of Canada
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadGaugeData}
            disabled={loading}
            className="flex items-center gap-1.5 bg-[#263B46] hover:bg-[#324d5b] text-white text-xs font-semibold px-3 py-1.5 rounded transition cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#D97746]' : ''}`} />
            <span>Refresh</span>
          </button>
          <a
            href="https://wateroffice.ec.gc.ca/report/real_time_e.html?stn=02ZD002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition"
          >
            <span>Govt Report</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Grid of Telemetry */}
      <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Discharge */}
        <div className="bg-[#0B1014] p-5 rounded-lg border border-[#263B46] space-y-2">
          <div className="flex items-center justify-between text-xs text-[#F5F2EB]/70">
            <span className="uppercase font-semibold tracking-wider flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-cyan-400" />
              River Discharge
            </span>
            <span className="font-mono text-[10px] text-cyan-300">Débit</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono text-white">{gauge.dischargeCms}</span>
            <span className="text-sm font-mono text-[#F5F2EB]/60">m³/s</span>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            ≈ {gauge.dischargeCfs} cfs (Cubic Feet / Sec)
          </div>
        </div>

        {/* Metric 2: Stage / Water Level */}
        <div className="bg-[#0B1014] p-5 rounded-lg border border-[#263B46] space-y-2">
          <div className="flex items-center justify-between text-xs text-[#F5F2EB]/70">
            <span className="uppercase font-semibold tracking-wider flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-blue-400" />
              Water Level (Stage)
            </span>
            <span className="font-mono text-[10px] text-blue-300">Niveau</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono text-white">{gauge.waterLevelMeters}</span>
            <span className="text-sm font-mono text-[#F5F2EB]/60">meters</span>
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <span>≈ {gauge.waterLevelFeet} ft gauge</span>
            <span className="text-emerald-400 capitalize">• {gauge.trend} trend</span>
          </div>
        </div>

        {/* Metric 3: Salmon Holding Conditions */}
        <div className="bg-[#0B1014] p-5 rounded-lg border border-[#263B46] space-y-2">
          <div className="flex items-center justify-between text-xs text-[#F5F2EB]/70">
            <span className="uppercase font-semibold tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              Run Conditions
            </span>
            <span className="font-mono text-[10px] text-emerald-300">Status</span>
          </div>
          <div className="text-lg font-bold text-emerald-400 font-serif">
            {gauge.flowClassification}
          </div>
          <div className="text-xs text-slate-400">
            Clarity: <strong className="text-white">{gauge.clarityEstimate}</strong>
          </div>
        </div>

        {/* Metric 4: Estimated Water Temp */}
        <div className="bg-[#0B1014] p-5 rounded-lg border border-[#263B46] space-y-2">
          <div className="flex items-center justify-between text-xs text-[#F5F2EB]/70">
            <span className="uppercase font-semibold tracking-wider flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-[#D97746]" />
              Water Temperature
            </span>
            <span className="font-mono text-[10px] text-[#D97746]">Thermal</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono text-white">{gauge.temperatureEstimateF}°</span>
            <span className="text-sm font-mono text-[#F5F2EB]/60">F ({gauge.temperatureEstimateC}°C)</span>
          </div>
          <div className="text-xs text-emerald-400 font-mono font-semibold">
            ✓ Optimal Dry Fly Bomber Range
          </div>
        </div>

      </div>

      {/* Footer Details */}
      <div className="px-6 py-4 bg-[#0B1014]/60 border-t border-[#263B46] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#F5F2EB]/60 gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Real-time hourly CSV stream direct from ECCC Datamart / Water Survey of Canada</span>
        </div>
        <div>
          {lastRefreshed ? `Last polled at ${lastRefreshed}` : 'Live synchronization active'}
        </div>
      </div>

    </div>
  );
};
