export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: 'Charmstrong',
  location: 'Boston, Massachusetts',
  description:
    'Classic beer styles brewed with European tradition and New England character in Boston, Massachusetts.',
};

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Beers', href: '/beers/' },
  { label: 'Our Story', href: '/our-story/' },
];

/** Shown as the highlighted button in the header. */
export const findBeerLink: NavLink = {
  label: 'Find Our Beer',
  href: '/find-our-beer/',
};

export const footerNav: NavLink[] = [
  ...primaryNav.slice(1),
  findBeerLink,
  { label: 'Contact', href: '/contact/' },
];
