import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const basicRoutes: IContentRoutes = {
  name: 'Basic',
  path: 'basic',
  routes: [
    {
      title: 'State Change',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
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
