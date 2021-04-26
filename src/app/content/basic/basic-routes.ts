import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const basicRoutes: IContentRoutes = {
  name: 'Basic',
  path: 'basic',
  routes: [
    {
      title: 'Overview',
      description:
        'High level overview of Angular animations, how it works, and how to use them in your project.',
      image: 'assets/post-content/basic/overview/hero.svg',
      tags: ['basic', 'overview', 'angular animations'],
      path: 'overview',
      post: 'assets/post-content/basic/overview/overview.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'State Change',
      description:
        'Add custom animations to transitions between different states of an element.',
      image: 'assets/post-content/basic/state-change/hero.svg',
      tags: ['basic', 'angular animations'],
      path: 'state-change',
      loadChildren: () =>
        import('./state-change/state-change.demo.module').then(
          (m) => m.StateChangeDemoModule
        ),
      post: 'assets/post-content/basic/state-change/state-change.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Enter Exit',
      description:
        'Custom animations for elements entering and leaving the view.',
      image: 'assets/post-content/basic/enter-exit/hero.svg',
      tags: ['basic', 'angular animations'],
      path: 'enter-exit',
      loadChildren: () =>
        import('./enter-exit/enter-exit.demo.module').then(
          (m) => m.EnterExitDemoModule
        ),
      post: 'assets/post-content/basic/enter-exit/enter-exit.content.md',
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
