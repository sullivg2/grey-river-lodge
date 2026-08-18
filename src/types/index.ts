export type PageId = 'home' | 'the-fishery' | 'accommodations' | 'rates' | 'getting-here' | 'fly-shop' | 'contact';

export interface RiverPool {
  id: string;
  name: string;
  distanceFromLodge: string;
  accessMethod: 'Jet Boat' | 'Quad & Hike' | 'Foot Path' | 'River Crossing';
  depth: string;
  currentType: 'Deep Glide' | 'Riffle Tailout' | 'Canyon Chute' | 'Tidal Pool' | 'Classic V-Pool';
  wadingDifficulty: 'Easy Gravel' | 'Moderate Cobble' | 'Technical Boulders';
  optimalSeason: 'Late June' | 'July Peak' | 'August' | 'All Season';
  primaryFlies: string[];
  description: string;
  tacticalTip: string;
  averageFishSize: string;
  coordinates: { x: number; y: number };
}

export interface FlyPattern {
  id: string;
  name: string;
  category: 'Dry Fly' | 'Wet Fly' | 'Trout / Streamer';
  bestSizes: string;
  waterCondition: 'Low & Clear' | 'High & Tea-Colored' | 'Glassy Slicks' | 'Heavy Chutes';
  description: string;
  targetSpecies: 'Atlantic Salmon' | 'Sea-Run Brook Trout' | 'Both';
  action: string;
  accentColor: string;
}

export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  partySize: string;
  seasonWindow: string;
  experience: string;
  guidingRatio: '2:1' | '1:1';
  charterAssistance: boolean;
  notes: string;
  selectedDates?: string;
}

export interface SeasonWindowInfo {
  period: string;
  dates: string;
  title: string;
  waterTemp: string;
  runStatus: string;
  dryFlyActivity: number; // 1 to 5
  highlights: string[];
  tag: string;
  availability: 'Sold Out' | 'Limited (2 Rods)' | 'Available (4-6 Rods)' | 'Prime Opening';
}

export interface LodgeFeature {
  title: string;
  dimension: string;
  capacity: string;
  amenities: string[];
  description: string;
  image: string;
}
