import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const alternativeRoutes: IContentRoutes = {
  name: 'Alternative',
  path: 'alternative',
  routes: [
    {
      title: 'Class Based Animations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'assets/post-content/alternative/class-based/hero.svg',
      tags: ['alternative', 'css animations'],
      path: 'class-based',
      loadChildren: () =>
        import('./class-based/class-based.demo.module').then(
          (m) => m.ClassBasedDemoModule
        ),
      post:
        'assets/post-content/alternative/class-based/class-based.content.md',
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
