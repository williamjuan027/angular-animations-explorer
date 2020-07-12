import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const performanceRoutes: IContentRoutes = {
  name: 'Tips',
  path: 'tips',
  routes: [
    {
      title: 'Performance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/tips/performance/hero.svg',
      tags: ['tips'],
      path: 'performance',
      post: 'assets/post-content/tips/performance/performance.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Debugging',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/tips/debugging/hero.svg',
      tags: ['tips'],
      path: 'debugging',
      post: 'assets/post-content/tips/debugging/debugging.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Disable Animations during Testing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/tips/disable-testing/hero.svg',
      tags: ['tips'],
      path: 'disable-testing',
      post:
        'assets/post-content/tips/disable-testing/disable-testing.content.md',
      pageType: EPageType.ContentOnly,
    },
  ],
};
