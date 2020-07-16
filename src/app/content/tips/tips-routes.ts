import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const performanceRoutes: IContentRoutes = {
  name: 'Tips',
  path: 'tips',
  routes: [
    {
      title: 'Performance',
      description:
        'Understand the different implications of animating different properties and the different animation methods.',
      image: 'assets/post-content/tips/performance/hero.svg',
      tags: ['tips'],
      path: 'performance',
      post: 'assets/post-content/tips/performance/performance.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Debugging',
      description: `Use animation specific features in browsers' devtools to help debug your animation code.`,
      image: 'assets/post-content/tips/debugging/hero.svg',
      tags: ['tips'],
      path: 'debugging',
      post: 'assets/post-content/tips/debugging/debugging.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Disable Animations during Testing',
      description:
        'Speed up your unit tests by disabling animation when its not part of your test cases.',
      image: 'assets/post-content/tips/disable-testing/hero.svg',
      tags: ['tips'],
      path: 'disable-testing',
      post:
        'assets/post-content/tips/disable-testing/disable-testing.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Reusing Animations',
      description:
        'Ways to abstract out common animation code so it can be reused more easily in your application.',
      image: 'assets/post-content/tips/reuse/hero.svg',
      tags: ['tips'],
      path: 'reuse',
      post: 'assets/post-content/tips/reuse/reuse.content.md',
      loadChildren: () =>
        import('./reuse/reuse.demo.module').then((m) => m.ReuseDemoModule),
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
