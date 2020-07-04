import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const performanceRoutes: IContentRoutes = {
  name: 'Tips',
  path: 'tips',
  routes: [
    {
      title: 'Performance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
      tags: ['tips'],
      path: 'performance',
      post: 'assets/post-content/tips/performance/performance.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Debugging',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
      tags: ['tips'],
      path: 'debugging',
      post: 'assets/post-content/tips/debugging/debugging.md',
      pageType: EPageType.ContentOnly,
    },
  ],
};
