import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const integrationsRoutes: IContentRoutes = {
  name: 'Integrations',
  path: 'integrations',
  routes: [
    {
      title: 'Nativescript',
      description: 'Using Angular Animations in a Nativescript Application.',
      image: 'assets/post-content/integrations/nativescript/hero.svg',
      tags: ['tips'],
      path: 'nativescript',
      post:
        'assets/post-content/integrations/nativescript/nativescript.content.md',
      pageType: EPageType.ContentOnly,
    },
    {
      title: 'Ionic',
      description: 'Using Angular Animations in an Ionic Application.',
      image: 'assets/post-content/integrations/ionic/hero.svg',
      tags: ['tips'],
      path: 'ioinic',
      post: 'assets/post-content/integrations/ionic/ionic.content.md',
      pageType: EPageType.ContentOnly,
    },
  ],
};
