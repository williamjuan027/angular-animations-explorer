import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const thirdPartyLibsRoutes: IContentRoutes = {
  name: 'Third Party Libraries',
  path: 'third-party-libraries',
  routes: [
    {
      title: 'Pop Motion',
      description:
        'Add custom animations to transitions between different states of an element using Popmotion.',
      image: 'assets/post-content/third-party-libs/popmotion/hero.png',
      tags: ['third party libs', 'pop motion'],
      path: 'popmotion',
      loadChildren: () =>
        import('./popmotion/popmotion.demo.module').then(
          (m) => m.PopmotionDemoModule
        ),
      post:
        'assets/post-content/third-party-libs/popmotion/popmotion.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Three',
      description:
        'Add custom animations to transitions between different states of an element using Popmotion.',
      image: 'assets/post-content/third-party-libs/popmotion/hero.png',
      tags: ['third party libs', 'three'],
      path: 'three',
      loadChildren: () =>
        import('./three/three.demo.module').then((m) => m.ThreeDemoModule),
      post:
        'assets/post-content/third-party-libs/popmotion/popmotion.content.md',
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
