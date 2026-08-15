import { RiverPool, FlyPattern, SeasonWindowInfo } from '../types';

export const RIVER_POOLS: RiverPool[] = [
  {
    id: 'canyon-pool',
    name: 'Canyon Pool',
    distanceFromLodge: '1.8 miles upstream',
    accessMethod: 'Jet Boat',
    depth: '8 – 14 ft',
    currentType: 'Canyon Chute',
    wadingDifficulty: 'Moderate Cobble',
    optimalSeason: 'July Peak',
    primaryFlies: ['Green Bomber #4', 'Undertaker #6', 'White Wulff #6'],
    description: 'A legendary gorge run where the river narrows between 60-foot granite walls, slowing into a deep crystalline holding pool. Salmon rest here in large pods after tackling the lower rapids.',
    tacticalTip: 'Skate a #4 Green Bomber across the glassy tailout seam right before the lip breaks into white water.',
    averageFishSize: '10 – 18 lbs',
    coordinates: { x: 38, y: 22 }
  },
  {
    id: 'salmon-rock',
    name: 'Salmon Rock Run',
    distanceFromLodge: '0.6 miles upstream',
    accessMethod: 'Foot Path',
    depth: '4 – 7 ft',
    currentType: 'Classic V-Pool',
    wadingDifficulty: 'Easy Gravel',
    optimalSeason: 'All Season',
    primaryFlies: ['Blue Charm #8', 'Cosseboom #8', 'Brown Bomber #6'],
    description: 'A classic Atlantic salmon pool formed behind a massive submerged boulder. The seam produces aggressive surface takes from ocean-fresh fish resting along the gravel tongue.',
    tacticalTip: 'Dead-drift a dry Bomber through the mirror slick directly above the main boulder pillow.',
    averageFishSize: '8 – 15 lbs',
    coordinates: { x: 52, y: 35 }
  },
  {
    id: 'the-forks',
    name: 'The River Forks',
    distanceFromLodge: '3.2 miles upstream',
    accessMethod: 'Quad & Hike',
    depth: '6 – 10 ft',
    currentType: 'Deep Glide',
    wadingDifficulty: 'Moderate Cobble',
    optimalSeason: 'August',
    primaryFlies: ['Muddler Minnow #6', 'Green Butt Cascade #8', 'Rusty Rat #8'],
    description: 'Where the South Branch converges with the main canyon flow. Renowned for massive sea-run brook trout alongside resident Atlantic salmon stacking in the cool oxbow.',
    tacticalTip: 'Swing a heavily weighted streamer through the undercut foam line on an overcast morning.',
    averageFishSize: '9 – 16 lbs (Trout to 6 lbs)',
    coordinates: { x: 74, y: 18 }
  },
  {
    id: 'tidal-chute',
    name: 'Tidal Chute & Estuary Pool',
    distanceFromLodge: '1.2 miles downstream',
    accessMethod: 'Jet Boat',
    depth: '5 – 12 ft (tide-dependent)',
    currentType: 'Tidal Pool',
    wadingDifficulty: 'Easy Gravel',
    optimalSeason: 'Late June',
    primaryFlies: ['Silver Doctor #6', 'Blue Charm #6', 'Undertaker #4'],
    description: 'The front door of Grey River. On rising tides, pods of ocean-bright salmon and sea trout push through the brackish surge, covered in sea lice and full of explosive power.',
    tacticalTip: 'Fish the incoming push 2 hours before high tide with bright silver-bodied wet patterns.',
    averageFishSize: '12 – 22 lbs',
    coordinates: { x: 22, y: 68 }
  },
  {
    id: 'birch-rapids',
    name: 'Birch Rapids Pool',
    distanceFromLodge: '0.9 miles upstream',
    accessMethod: 'Foot Path',
    depth: '5 – 9 ft',
    currentType: 'Riffle Tailout',
    wadingDifficulty: 'Easy Gravel',
    optimalSeason: 'July Peak',
    primaryFlies: ['White Bomber #6', 'Carter Bug #8', 'Black Bear Green Butt #8'],
    description: 'A tranquil gravel flat lined with white birch trees. Crystalline sight-fishing water where every head-and-tail rise is clearly visible in the morning sunlight.',
    tacticalTip: 'Long, delicate 12-foot leaders with 8lb tippet are essential here when the sun is overhead.',
    averageFishSize: '8 – 14 lbs',
    coordinates: { x: 60, y: 52 }
  },
  {
    id: 'devils-gut',
    name: 'Devil\'s Gut Fjord Pool',
    distanceFromLodge: '4.5 miles upstream',
    accessMethod: 'Quad & Hike',
    depth: '12 – 20 ft',
    currentType: 'Canyon Chute',
    wadingDifficulty: 'Technical Boulders',
    optimalSeason: 'August',
    primaryFlies: ['Green Bomber #2', 'Black Spey #4', 'Undertaker #4'],
    description: 'The wildest reach on the upper water. A dramatic amphitheater of shear rock walls where the biggest multi-sea-winter salmon congregate late in the summer season.',
    tacticalTip: 'High-stick an oversized dry fly right along the deep wall crease; strikes are explosive and instantaneous.',
    averageFishSize: '14 – 24 lbs',
    coordinates: { x: 86, y: 12 }
  }
];

export const FLY_PATTERNS: FlyPattern[] = [
  {
    id: 'green-bomber',
    name: 'Green Bomber (White Wing)',
    category: 'Dry Fly',
    bestSizes: '#2, #4, #6, #8',
    waterCondition: 'Glassy Slicks',
    description: 'The undisputed king of Newfoundland dry flies. Spun green deer hair body with white calf tail wings and ginger hackle. Floats high and creates tempting surface wake.',
    targetSpecies: 'Atlantic Salmon',
    action: 'Skated or dead-drifted over holding lies',
    accentColor: '#3E6656'
  },
  {
    id: 'undertaker',
    name: 'The Undertaker',
    category: 'Wet Fly',
    bestSizes: '#4, #6, #8',
    waterCondition: 'Low & Clear',
    description: 'Classic Maritime staple. Peacock herl body with fluorescent green and red butt sections. Lethal on both fresh arrivals and holding pool fish in tea-clear water.',
    targetSpecies: 'Atlantic Salmon',
    action: 'Swung across current at 45-degree angle',
    accentColor: '#1B2A32'
  },
  {
    id: 'blue-charm',
    name: 'Blue Charm',
    category: 'Wet Fly',
    bestSizes: '#6, #8, #10',
    waterCondition: 'Low & Clear',
    description: 'A timeless low-water classic. Subtle black floss body with rich blue throat hackle and silver oval ribbing. Proven under bright mid-day sun.',
    targetSpecies: 'Atlantic Salmon',
    action: 'Slow grease-line swing near surface',
    accentColor: '#2D4A3E'
  },
  {
    id: 'green-butt-cascade',
    name: 'Green Butt Cascade',
    category: 'Wet Fly',
    bestSizes: '#6, #8',
    waterCondition: 'High & Tea-Colored',
    description: 'High visibility hairwing with lively fox wing hair, holographic flash, and a glowing chartreuse butt that triggers aggressive predatory instincts in fast current.',
    targetSpecies: 'Both',
    action: 'Active strip-and-pulse through riffles',
    accentColor: '#D97746'
  },
  {
    id: 'silver-doctor',
    name: 'Silver Doctor',
    category: 'Wet Fly',
    bestSizes: '#4, #6',
    waterCondition: 'High & Tea-Colored',
    description: 'Brilliant silver tinsel body reflecting ambient light in the tidal runs. Unmatched for fresh-run salmon pushing in with high tides in late June.',
    targetSpecies: 'Atlantic Salmon',
    action: 'Fast swing across incoming tidal foam',
    accentColor: '#5F7786'
  },
  {
    id: 'muddler-minnow',
    name: 'Muddler Minnow (Salmon Special)',
    category: 'Trout / Streamer',
    bestSizes: '#4, #6',
    waterCondition: 'Heavy Chutes',
    description: 'Spun deer hair head with turkey quill wings. Irresistible to aggressive trophy sea-run brook trout and territorial salmon in deep canyon eddies.',
    targetSpecies: 'Sea-Run Brook Trout',
    action: 'Erratic darting retrieve through drop-offs',
    accentColor: '#C26334'
  }
];

export const SEASON_WINDOWS: SeasonWindowInfo[] = [
  {
    period: 'Late June',
    dates: 'June 20 – July 04',
    title: 'The Spring Run Kickoff',
    waterTemp: '48°F – 54°F',
    runStatus: 'Fresh Ocean Arrivals with High Tides',
    dryFlyActivity: 3,
    tag: 'Trophy Size & Chrome Fresh',
    highlights: [
      'Sea-liced, ocean-bright salmon straight from the Atlantic',
      'High cold flows perfect for traditional swinging wet flies',
      'Lower estuary and canyon pools brimming with aggressive fresh fish'
    ],
    availability: 'Limited (2 Rods)'
  },
  {
    period: 'July Peak',
    dates: 'July 05 – July 26',
    title: 'Prime Dry Fly & Bomber Action',
    waterTemp: '55°F – 62°F',
    runStatus: 'System-Wide Peak Numbers',
    dryFlyActivity: 5,
    tag: 'World-Renowned Surface Takes',
    highlights: [
      'Crystal-clear sight fishing with waking Bombers and dry Wulffs',
      'Fish resting in all 18+ named holding pools throughout the river',
      '18+ hours of daylight under sub-Arctic Newfoundland summer skies'
    ],
    availability: 'Prime Opening'
  },
  {
    period: 'August',
    dates: 'July 27 – August 20',
    title: 'Salmon & Trophy Sea-Run Trout',
    waterTemp: '58°F – 64°F',
    runStatus: 'Upper Canyon Stacking & Sea Trout Run',
    dryFlyActivity: 4,
    tag: 'Dual Species Grand Slam',
    highlights: [
      'Heavy sea-run brook trout (3–6 lbs) entering the system',
      'Technical sight-casting to resident salmon in deep canyon gorges',
      'Lush late-summer wilderness scenery and prime upper pools'
    ],
    availability: 'Available (4-6 Rods)'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Landing a 16-pound Atlantic salmon on a dry fly in the Grey River canyon is an experience that stays with you forever. The solitude, the guides, and the hospitality are second to none.",
    author: "Richard V.",
    location: "Boston, MA",
    year: "July 2025 Guest",
    rating: 5
  },
  {
    quote: "True wilderness outfitting done right. 200-amp power, gourmet hot dinners, and having miles of pristine river with zero road noise or outside anglers. Simply unmatched.",
    author: "Mark & David T.",
    location: "Calgary, AB",
    year: "August 2025 Guest",
    rating: 5
  },
  {
    quote: "The helicopter arrival into the fjord sets the tone immediately. The guides know every rock and lie like the back of their hand. Hooked fish every single day.",
    author: "Edward S.",
    location: "London, UK",
    year: "July 2024 Guest",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "How do we get to Grey River Lodge?",
    a: "Commercial flight to Deer Lake (YDF) or St. John's (YYT), followed by our coordinated ground transfer to the south coast helicopter staging base. A breathtaking 35-minute scenic flight delivers you directly onto the lodge landing pad."
  },
  {
    q: "What is the guide-to-angler ratio?",
    a: "Our standard outfitting is structured as 2:1 (two anglers per professional licensed guide), with optional 1:1 private guiding upgrades available for guests seeking dedicated instruction."
  },
  {
    q: "Is Grey River strictly Catch & Release?",
    a: "Yes. Grey River Lodge is a passionate steward of wild Atlantic salmon conservation. All Atlantic salmon are released using single barbless hooks and wet-hands fish handling protocols to safeguard the run."
  },
  {
    q: "What power and communication is available off-grid?",
    a: "We operate a continuous 200-amp power system powered by dual Yanmar diesel & Honda EU3000 generators paired with a 2-panel solar battery system, 24/7 hot water, and high-speed Starlink satellite Wi-Fi."
  },
  {
    q: "What is the luggage limit for the helicopter transfer?",
    a: "Due to aircraft weight and payload requirements, luggage is strictly limited to 40–50 lbs per person packed in soft-sided duffel bags (no hard rolling suitcases allowed in aircraft pods)."
  }
];
