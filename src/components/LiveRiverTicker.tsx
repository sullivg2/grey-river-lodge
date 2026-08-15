import React, { useState, useEffect } from 'react';
import { 
  fetchLiveGreyRiverGauge, 
  RiverGaugeReading, 
  DEFAULT_GAUGE_DATA 
} from '../services/riverGaugeService';
import { 
  Waves, 
  Thermometer, 
  Droplets, 
  ExternalLink, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Activity,
  CheckCircle2,
  Info
} from 'lucide-react';

export const LiveRiverTicker: React.FC = () => {
  const [gauge, setGauge] = useState<RiverGaugeReading>(DEFAULT_GAUGE_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('');

  const loadGaugeData = async () => {
    setLoading(true);
    try {
      const data = await fetchLiveGreyRiverGauge();
      setGauge(data);
      setLastRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch {
      // Fallback already handled inside service
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGaugeData();
    // Refresh every 5 minutes
    const interval = setInterval(loadGaugeData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = () => {
    if (gauge.trend === 'rising') return <TrendingUp className="w-3.5 h-3.5 text-blue-400" title="Water Level Rising" />;
    if (gauge.trend === 'falling') return <TrendingDown className="w-3.5 h-3.5 text-amber-400" title="Water Level Falling" />;
    return <Minus className="w-3.5 h-3.5 text-emerald-400" title="Water Level Steady" />;
  };

  return (
    <div className="bg-[#11191F] border-y border-[#263B46] text-[#F5F2EB] py-2.5 px-4 overflow-hidden shadow-inner text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Real Station 02ZD002 Badge */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold uppercase tracking-wider text-emerald-400 text-[11px] flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              Live Hydrometric Telemetry
            </span>
            <span className="bg-[#1B2A32] text-[10px] font-mono px-2 py-0.5 rounded text-[#D97746] font-bold border border-[#263B46]">
              Station 02ZD002
            </span>
          </div>
          <span className="text-[#F5F2EB]/30 hidden lg:inline">|</span>
          <span className="text-[#F5F2EB]/80 text-[11px] hidden lg:inline">
            Environment & Climate Change Canada (ECCC)
          </span>
        </div>

        {/* Real Gauge Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
          
          {/* Water Discharge / Flow Rate */}
          <div className="flex items-center gap-1.5 bg-[#1B2A32]/80 px-2.5 py-1 rounded border border-[#263B46]/60" title="River Discharge Rate">
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[#F5F2EB]/70">Flow:</span>
            <span className="font-bold text-white font-mono">{gauge.dischargeCms} m³/s</span>
            <span className="text-[10px] text-cyan-300 font-mono hidden sm:inline">({gauge.dischargeCfs} cfs)</span>
          </div>

          {/* Water Stage / Level */}
          <div className="flex items-center gap-1.5 bg-[#1B2A32]/80 px-2.5 py-1 rounded border border-[#263B46]/60" title="River Stage Level">
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[#F5F2EB]/70">Gauge Stage:</span>
            <span className="font-bold text-white font-mono">{gauge.waterLevelMeters}m</span>
            <div className="flex items-center gap-0.5">
              {getTrendIcon()}
              <span className="text-[10px] text-emerald-400 capitalize">{gauge.trend}</span>
            </div>
          </div>

          {/* Water Temp */}
          <div className="flex items-center gap-1.5 bg-[#1B2A32]/80 px-2.5 py-1 rounded border border-[#263B46]/60" title="Estimated River Water Temperature">
            <Thermometer className="w-3.5 h-3.5 text-[#D97746]" />
            <span className="text-[#F5F2EB]/70">Water:</span>
            <span className="font-bold text-white font-mono">{gauge.temperatureEstimateF}°F ({gauge.temperatureEstimateC}°C)</span>
            <span className="text-[10px] text-emerald-400 font-bold hidden sm:inline">PRIME</span>
          </div>

          {/* Official ECCC Source Link & Refresh */}
          <div className="flex items-center gap-2">
            <a
              href="https://wateroffice.ec.gc.ca/report/real_time_e.html?stn=02ZD002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D97746] hover:text-[#f39563] text-[10px] uppercase font-bold flex items-center gap-1 transition underline decoration-dotted"
              title="Open Official ECCC Water Survey of Canada Station 02ZD002 Report"
            >
              <span>ECCC Report</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={loadGaugeData}
              disabled={loading}
              className="text-slate-400 hover:text-white p-1 transition cursor-pointer"
              title="Refresh Live Gauge Readings"
            >
              <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin text-[#D97746]' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
