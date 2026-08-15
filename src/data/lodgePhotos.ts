export interface LodgePhoto {
  id: string;
  filename: string;
  title: string;
  category: 'Lodge & Grounds' | 'The Fishery' | 'Wilderness & Wildlife' | 'Trophy Catches';
  caption: string;
  locationTag: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  featuredInHero?: boolean;
  featuredInAccommodations?: boolean;
  featuredInFishery?: boolean;
}

export const LODGE_PHOTOS: LodgePhoto[] = [
  {
    id: 'lodge-compound-helipad',
    filename: '9c19e13a-dc5e-4fb2-b418-46dd08758383.JPG',
    title: 'Main Lodge & Heli Landing Pad',
    category: 'Lodge & Grounds',
    caption: 'Handcrafted timber compound with green metal roof, wrap-around cedar deck, and private helicopter staging deck overlooking the south coast mountains.',
    locationTag: 'Grey River Lodge Compound',
    aspect: 'wide',
    featuredInHero: true,
    featuredInAccommodations: true
  },
  {
    id: 'lodge-porch-waders',
    filename: '5e93c486-9c74-495a-9a28-c445f6057ecb.JPG',
    title: 'Covered Porch & River Walkway',
    category: 'Lodge & Grounds',
    caption: 'Morning perspective from the main lodge veranda with waders and wading jackets drying on cedar log railings above the river boardwalk.',
    locationTag: 'Main Lodge Veranda',
    aspect: 'wide',
    featuredInAccommodations: true
  },
  {
    id: 'aerial-canyon-bend',
    filename: '978e6597-fdc6-4843-af1a-970dfda810b1.JPG',
    title: 'Grey River Horseshoe Bend & Rapids',
    category: 'The Fishery',
    caption: 'Aerial panorama of the wild river bend, showing deep peat-tinted holding pools, granite boulder lines, and virgin boreal pine forest.',
    locationTag: 'Canyon Pool / Lower Rapids',
    aspect: 'wide',
    featuredInHero: true,
    featuredInFishery: true
  },
  {
    id: 'aerial-upstream-rapids',
    filename: 'IMG_8659.jpeg',
    title: 'Upper Canyon Terraces & Holding Pools',
    category: 'The Fishery',
    caption: 'Elevated view along the granite ledges of Grey River where ascending salmon rest in crystal pools between fast-water chutes.',
    locationTag: 'Upper River Canyon',
    aspect: 'portrait',
    featuredInFishery: true
  },
  {
    id: 'salmon-bamboo-rod',
    filename: 'ed1f8b33-97b4-43ca-bf16-20a038935398.JPG',
    title: 'Fresh Run Atlantic Salmon & Bamboo Fly Rod',
    category: 'Trophy Catches',
    caption: 'A gleaming sea-fresh silver Atlantic salmon resting in shallow gin-clear river current beside a handcrafted bamboo fly rod.',
    locationTag: 'Gravel Run Holding Pool',
    aspect: 'portrait',
    featuredInHero: true,
    featuredInFishery: true
  },
  {
    id: 'angler-trophy-catch',
    filename: 'IMG_8661.jpeg',
    title: 'Fresh Salmon Landed on the Granite Riverbed',
    category: 'Trophy Catches',
    caption: 'A triumphant angler holding a bright Atlantic salmon hooked on a dry fly in the rushing waters of Grey River.',
    locationTag: 'Rapid Chute Pool',
    aspect: 'landscape',
    featuredInHero: true,
    featuredInFishery: true
  },
  {
    id: 'wildlife-caribou-river',
    filename: 'e8f43565-4363-4259-9293-1b212d6dc1f2.JPG',
    title: 'Woodland Caribou in the River Shallows',
    category: 'Wilderness & Wildlife',
    caption: 'A magnificent wild Woodland Caribou stag cooling off in the crystal-clear waters of the Grey River watershed.',
    locationTag: 'Upper Shallows Corridor',
    aspect: 'portrait',
    featuredInFishery: true
  },
  {
    id: 'lodge-porch-pillars',
    filename: 'IMG_8660.jpeg',
    title: 'Cedar Log Veranda & Mountain Vista',
    category: 'Lodge & Grounds',
    caption: 'Sunlit afternoon on the covered porch with handcrafted log columns overlooking the boardwalk to the river.',
    locationTag: 'Riverfront Deck',
    aspect: 'portrait',
    featuredInAccommodations: true
  }
];
