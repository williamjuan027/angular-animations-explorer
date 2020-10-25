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
  ],
};
