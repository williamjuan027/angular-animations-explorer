import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const alternativeRoutes: IContentRoutes = {
  name: 'Alternative',
  path: 'alternative',
  routes: [
    {
      title: 'Class Based Animations',
      description:
        'Use CSS keyframes or transitions by dynamically adding and removing classes.',
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
        'Pass in dynamic values to your animation using inline styling to trigger animations.',
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
        'Take full control of your animations by accessing web animations API directly.',
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
        'Add custom events to trigger your animations and make it reusable by wrapping it into a directive.',
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
