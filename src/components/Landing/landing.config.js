const landingBottomNavButtons = [
  {
    name: 'Browse',
    href: '/store',
    iconSrc: './assets/icons/browse.svg',
    internal: true,
  },
  {
    name: 'Play Dice',
    href: 'store/games/:gameName',
    iconSrc: './assets/icons/dice.svg',
    internal: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/TrustInMagic',
    iconSrc: './assets/icons/github2.svg',
    internal: false,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tim-ionescu-650a78110/',
    iconSrc: './assets/icons/linkedin.svg',
    internal: false,
  },
];

const landingRightNavButtons = [
  {
    name: 'Game Page',
    href: './store',
    iconSrc: './assets/icons/game.svg',
    internal: true,
  },
  {
    name: '404 Page',
    href: '/404',
    iconSrc: './assets/icons/404.svg',
    internal: true,
  },
  {
    name: 'Commit Log',
    href: 'https://github.com/TrustInMagic/react-ecommerce-store/commits',
    iconSrc: './assets/icons/git-commit.svg',
    internal: false,
  },
  {
    name: 'Performance',
    href: '',
    iconSrc: './assets/icons/performance.svg',
    internal: false,
  },
  {
    name: 'Technologies',
    href: '',
    iconSrc: './assets/icons/tech.svg',
    internal: false,
  },
  {
    name: 'Sources',
    href: '',
    iconSrc: './assets/icons/sources.svg',
    internal: false,
  },
];

export { landingBottomNavButtons, landingRightNavButtons };
