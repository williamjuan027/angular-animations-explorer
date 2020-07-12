import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const alternativeRoutes: IContentRoutes = {
  name: 'Alternative',
  path: 'alternative',
  routes: [
    {
      title: 'Class Based Animations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/alternative/class-based/hero.svg',
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
    {
      title: 'Inline Animations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/alternative/inline/hero.svg',
      tags: ['alternative', 'css animations'],
      path: 'inline',
      loadChildren: () =>
        import('./inline/inline.demo.module').then((m) => m.InlineDemoModule),
      post: 'assets/post-content/alternative/inline/inline.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Web Animations API',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/alternative/web-animations-api/hero.svg',
      tags: ['alternative', 'css animations'],
      path: 'web-animations-api',
      loadChildren: () =>
        import('./web-animations-api/web-animations-api.demo.module').then(
          (m) => m.WebAnimationsApiDemoModule
        ),
      post:
        'assets/post-content/alternative/web-animations-api/web-animations-api.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Attribute Directive and Animation Builder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/alternative/attribute-directive/hero.svg',
      tags: ['alternative'],
      path: 'attribute-directive',
      loadChildren: () =>
        import('./attribute-directive/attribute-directive.demo.module').then(
          (m) => m.AttributeDirectiveDemoModule
        ),
      post:
        'assets/post-content/alternative/attribute-directive/attribute-directive.content.md',
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
