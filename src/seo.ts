import type { PageId } from './types';

export const SITE_URL = 'https://greyriverlodge.com';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  'the-fishery': '/the-fishery',
  accommodations: '/accommodations',
  rates: '/rates',
  'getting-here': '/getting-here',
  contact: '/contact',
};

export const PAGE_METADATA: Record<
  PageId,
  {
    title: string;
    description: string;
    image: string;
    keywords: string[];
  }
> = {
  home: {
    title: 'Grey River Lodge | Remote Atlantic Salmon Fishing in Newfoundland',
    description:
      'Exclusive Atlantic salmon fly fishing lodge on Newfoundland’s remote south coast. Private helicopter access, wild river pools, timber lodge accommodations, and a strict 8-rod weekly cap.',
    image: `${SITE_URL}/rover-drone.JPG`,
    keywords: [
      'Grey River Lodge',
      'Atlantic salmon lodge Newfoundland',
      'remote fly fishing Newfoundland',
      'Newfoundland salmon fishing',
      'sea-run trout',
      'wilderness fishing lodge',
    ],
  },
  'the-fishery': {
    title: 'The Fishery | Grey River Lodge Newfoundland',
    description:
      'Explore Grey River’s pristine Atlantic salmon fishery in Newfoundland with helicopter access, deep holding pools, dry fly opportunities, and guided wilderness fishing.',
    image: `${SITE_URL}/rover-drone.JPG`,
    keywords: [
      'Grey River fishery',
      'Atlantic salmon fishing Newfoundland',
      'Newfoundland dry fly salmon',
      'remote salmon river',
      'Grey River pools',
    ],
  },
  accommodations: {
    title: 'Accommodations | Grey River Lodge Newfoundland',
    description:
      'Stay in a private Newfoundland timber lodge with panoramic river views, elevated comfort, off-grid amenities, and a secluded wilderness setting on the Grey River.',
    image: `${SITE_URL}/lodge1.jpg`,
    keywords: [
      'Grey River Lodge accommodations',
      'wilderness lodge Newfoundland',
      'timber lodge salmon trip',
      'private fishing lodge',
      'off-grid lodge',
    ],
  },
  rates: {
    title: 'Rates & Inclusions | Grey River Lodge',
    description:
      'View Grey River Lodge rates, inclusions, guiding options, and seasonal Atlantic salmon trip details for Newfoundland’s most remote fishing lodge.',
    image: `${SITE_URL}/lodge-view.JPG`,
    keywords: [
      'Grey River Lodge rates',
      'Newfoundland salmon lodge pricing',
      'Atlantic salmon trip packages',
      'guided fishing rates',
    ],
  },
  'getting-here': {
    title: 'Getting Here | Grey River Lodge Newfoundland',
    description:
      'Learn how to reach Grey River Lodge by air and sea with private helicopter access, remote transfer logistics, and travel guidance for Newfoundland anglers.',
    image: `${SITE_URL}/helipad.JPG`,
    keywords: [
      'How to get to Grey River Lodge',
      'Newfoundland helicopter fishing lodge',
      'remote lodge access',
      'Grey River travel logistics',
    ],
  },
  contact: {
    title: 'Book Your Grey River Trip | Contact Grey River Lodge',
    description:
      'Contact Grey River Lodge to reserve your Newfoundland Atlantic salmon trip, request seasonal dates, and plan a remote wilderness fly fishing experience.',
    image: `${SITE_URL}/salmon-bamboo.JPG`,
    keywords: [
      'book Grey River Lodge',
      'Atlantic salmon trip inquiry',
      'Newfoundland fishing lodge contact',
      'reserve salmon dates',
    ],
  },
};

const ROUTE_TO_PAGE: Record<string, PageId> = {
  '/': 'home',
  '/the-fishery': 'the-fishery',
  '/accommodations': 'accommodations',
  '/rates': 'rates',
  '/getting-here': 'getting-here',
  '/contact': 'contact',
};

function setStructuredData(page: PageId): void {
  if (typeof document === 'undefined') return;

  const currentPath = PAGE_PATHS[page];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Grey River Lodge',
    image: PAGE_METADATA[page].image,
    description: PAGE_METADATA[page].description,
    url: `${SITE_URL}${currentPath === '/' ? '' : currentPath}`,
    email: 'info@greyriverlodge.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grey River',
      addressRegion: 'Newfoundland and Labrador',
      addressCountry: 'CA',
    },
    areaServed: 'Newfoundland',
    amenityFeature: ['Atlantic salmon fishing', 'remote wilderness lodge', 'private helicopter access'],
  };

  let scriptTag = document.head.querySelector('script[data-seo-schema]') as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.setAttribute('data-seo-schema', 'true');
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(schema);
}

export function applyPageMetadata(page: PageId): void {
  if (typeof document === 'undefined') return;

  const { title, description, image } = PAGE_METADATA[page];
  const canonicalUrl = `${SITE_URL}${PAGE_PATHS[page] === '/' ? '' : PAGE_PATHS[page]}`;

  document.title = title;

  const descriptionTag = document.head.querySelector('meta[name="description"]') || document.createElement('meta');
  descriptionTag.setAttribute('name', 'description');
  descriptionTag.setAttribute('content', description);
  if (!document.head.querySelector('meta[name="description"]')) {
    document.head.appendChild(descriptionTag);
  }

  const ogTitle = document.head.querySelector('meta[property="og:title"]') || document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', title);
  if (!document.head.querySelector('meta[property="og:title"]')) {
    document.head.appendChild(ogTitle);
  }

  const ogDescription = document.head.querySelector('meta[property="og:description"]') || document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.setAttribute('content', description);
  if (!document.head.querySelector('meta[property="og:description"]')) {
    document.head.appendChild(ogDescription);
  }

  const ogImage = document.head.querySelector('meta[property="og:image"]') || document.createElement('meta');
  ogImage.setAttribute('property', 'og:image');
  ogImage.setAttribute('content', image);
  if (!document.head.querySelector('meta[property="og:image"]')) {
    document.head.appendChild(ogImage);
  }

  const ogUrl = document.head.querySelector('meta[property="og:url"]') || document.createElement('meta');
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.setAttribute('content', canonicalUrl);
  if (!document.head.querySelector('meta[property="og:url"]')) {
    document.head.appendChild(ogUrl);
  }

  const canonical = document.head.querySelector('link[rel="canonical"]') || document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', canonicalUrl);
  if (!document.head.querySelector('link[rel="canonical"]')) {
    document.head.appendChild(canonical);
  }

  const twitterTitle = document.head.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
  twitterTitle.setAttribute('name', 'twitter:title');
  twitterTitle.setAttribute('content', title);
  if (!document.head.querySelector('meta[name="twitter:title"]')) {
    document.head.appendChild(twitterTitle);
  }

  const twitterDescription = document.head.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
  twitterDescription.setAttribute('name', 'twitter:description');
  twitterDescription.setAttribute('content', description);
  if (!document.head.querySelector('meta[name="twitter:description"]')) {
    document.head.appendChild(twitterDescription);
  }

  const twitterImage = document.head.querySelector('meta[name="twitter:image"]') || document.createElement('meta');
  twitterImage.setAttribute('name', 'twitter:image');
  twitterImage.setAttribute('content', image);
  if (!document.head.querySelector('meta[name="twitter:image"]')) {
    document.head.appendChild(twitterImage);
  }

  setStructuredData(page);
}

export function resolvePageFromLocation(): PageId {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const hashPage = window.location.hash.replace(/^#\/?/, '').replace(/^#/, '');
  const directMatch = ROUTE_TO_PAGE[pathname];

  if (directMatch) {
    return directMatch;
  }

  const hashMatch = ROUTE_TO_PAGE[`/${hashPage}`];
  if (hashMatch) {
    return hashMatch;
  }

  return 'home';
}
