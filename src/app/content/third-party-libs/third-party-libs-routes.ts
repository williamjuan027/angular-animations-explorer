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
      title: 'GreenSock',
      description: 'Create animation timelines using GreenSock',
      image: 'assets/post-content/third-party-libs/greensock/hero.svg',
      tags: ['third party libs', 'greensock'],
      path: 'greensock',
      loadChildren: () =>
        import('./greensock/greensock.demo.module').then(
          (m) => m.GreensockDemoModule
        ),
      post:
        'assets/post-content/third-party-libs/greensock/greensock.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Animate.css',
      description:
        'Use predefined animations from Animate.style to animate your application',
      image: 'assets/post-content/third-party-libs/animate-style/hero.png',
      tags: ['third party libs', 'animate.css'],
      path: 'animate-css',
      loadChildren: () =>
        import('./animate-style/animate-style.demo.module').then(
          (m) => m.AnimateStyleDemoModule
        ),
      post:
        'assets/post-content/third-party-libs/animate-style/animate-style.content.md',
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
