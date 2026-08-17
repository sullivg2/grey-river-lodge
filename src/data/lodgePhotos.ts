export interface LodgePhoto {
  id: string;
  filename: string;
  title: string;
  category: 'Lodge & Grounds' | 'The Fishery' | 'Wilderness & Wildlife' | 'Accommodations';
  caption: string;
  locationTag: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  fallbackUrl?: string;
  featuredInHero?: boolean;
  featuredInAccommodations?: boolean;
  featuredInFishery?: boolean;
}

export const LODGE_PHOTOS: LodgePhoto[] = [
  // --- LODGE & GROUNDS ---
  {
    id: 'lodge-exterior-front',
    filename: '/lodge1.jpg',
    title: 'Main Lodge & Timber Compound',
    category: 'Lodge & Grounds',
    caption: 'Front exterior perspective of the handcrafted timber lodge and private compound nestled in the Newfoundland wilderness.',
    locationTag: 'Main Compound',
    aspect: 'wide',
    featuredInHero: true,
    featuredInAccommodations: true
  },
  {
    id: 'lodge-deck-view',
    filename: '/lodge2.jpg',
    title: 'Lodge Veranda & Grounds',
    category: 'Lodge & Grounds',
    caption: 'Handcrafted log columns overlooking the compound and surrounding river valley.',
    locationTag: 'Main Lodge Veranda',
    aspect: 'wide',
    featuredInAccommodations: true
  },
  {
    id: 'lodge-view-exterior',
    filename: '/lodge-view.JPG',
    title: 'Timber Lodge Wilderness Setting',
    category: 'Lodge & Grounds',
    caption: 'Elevated view of the main timber lodge structure set against the rugged boreal landscape.',
    locationTag: 'Main Compound',
    aspect: 'landscape',
    featuredInHero: true
  },
  {
    id: 'lodge-boardwalk-compound',
    filename: '/lodge-view2.jpeg',
    title: 'Riverfront Boardwalk & Grounds',
    category: 'Lodge & Grounds',
    caption: 'Handcrafted boardwalk trail connecting the accommodations and lodge directly to the river.',
    locationTag: 'Riverfront Boardwalk',
    aspect: 'wide',
    featuredInAccommodations: true
  },
  {
    id: 'lodge-helipad-transfer',
    filename: '/helipad.JPG',
    title: 'Private Wilderness Helipad',
    category: 'Lodge & Grounds',
    caption: 'Dedicated on-site helicopter landing pad for private air transfers directly to the lodge.',
    locationTag: 'Lodge Helipad',
    aspect: 'wide',
    featuredInHero: true
  },

  // --- ACCOMMODATIONS ---
  {
    id: 'cabin-bedroom-twin-beds',
    filename: '/bedroom1.jpg',
    title: 'Guest Suite — Twin Accommodations',
    category: 'Accommodations',
    caption: 'Comfortable guest bedroom with twin beds, crisp linens, and warm pine interiors.',
    locationTag: 'Guest Cabin',
    aspect: 'landscape',
    featuredInAccommodations: true
  },
  {
    id: 'cabin-bedroom-double',
    filename: '/bedroom2.jpg',
    title: 'Guest Suite — Private Double Room',
    category: 'Accommodations',
    caption: 'Private double guest room designed for rest and comfort after long days on the water.',
    locationTag: 'Guest Cabin',
    aspect: 'landscape',
    featuredInAccommodations: true
  },
  {
    id: 'cabin-living-area-lounge',
    filename: '/lodgeliving.jpg',
    title: 'Cabin Lounge & Common Sitting Area',
    category: 'Accommodations',
    caption: 'Spacious sitting lounge featuring comfortable furnishings for unwinding between morning and evening beats.',
    locationTag: 'Cabin Living Area',
    aspect: 'wide',
    featuredInAccommodations: true
  },

  // --- THE FISHERY ---
  {
    id: 'salmon-bamboo-presentation',
    filename: '/salmon-bamboo.JPG',
    title: 'Fresh Sea-Run Atlantic Salmon',
    category: 'The Fishery',
    caption: 'Pristine silver Atlantic salmon brought to hand along the rocky granite shelves of Grey River.',
    locationTag: 'Lower Home Pool',
    aspect: 'landscape',
    featuredInHero: true,
    featuredInFishery: true
  },
  {
    id: 'salmon-release-action',
    filename: '/salmon2.jpeg',
    title: 'Salmon Action & Release',
    category: 'The Fishery',
    caption: 'Clean fight and careful handling in crystal-clear waters before release.',
    locationTag: 'Grey River Canyon',
    aspect: 'landscape',
    featuredInFishery: true
  },
  {
    id: 'river-drone-aerial',
    filename: '/riverdrone2.jpeg',
    title: 'Grey River Canyon & Rapids Aerial',
    category: 'The Fishery',
    caption: 'Aerial panorama capturing the oxygenated rapids and secluded holding pools carving through granite bedrock.',
    locationTag: 'Upper Canyon Beats',
    aspect: 'wide',
    featuredInHero: true,
    featuredInFishery: true
  },
  {
    id: 'rover-drone-watershed',
    filename: '/rover-drone.JPG',
    title: 'Remote Watershed Corridor',
    category: 'The Fishery',
    caption: 'Sweeping aerial perspective of the untouched wilderness and remote river corridor.',
    locationTag: 'Grey River Watershed',
    aspect: 'wide',
    featuredInFishery: true
  },

  // --- WILDERNESS & WILDLIFE ---
  {
    id: 'woodland-caribou-wildlife',
    filename: '/caribou.JPG',
    title: 'Native Woodland Caribou',
    category: 'Wilderness & Wildlife',
    caption: 'Wild woodland caribou roaming the pristine Newfoundland tundra near the lodge.',
    locationTag: 'South Coast Highlands',
    aspect: 'landscape',
    featuredInHero: true
  }
];