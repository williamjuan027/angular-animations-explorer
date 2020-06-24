import { IContentRoutes } from '@content/content-routes.interface';

export const advancedRoutes: IContentRoutes = {
  name: 'Advanced',
  path: 'advanced',
  routes: [
    {
      title: 'Sequence',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
      tags: ['advanced', 'angular animations'],
      path: 'sequence',
      loadChildren: () =>
        import('./sequence/sequence.demo.module').then(
          (m) => m.SequenceDemoModule
        ),
      post: 'assets/post-content/advanced/sequence/sequence.content.md',
      pageType: 'content-with-demo',
    },
    {
      title: 'Multi-step Animation using Angular Keyframes',
      description: '',
      image:
        'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
      tags: ['advanced', 'angular animations'],
      path: 'sequence-keyframe',
      loadChildren: () =>
        import('./sequence-keyframe/sequence-keyframe.demo.module').then(
          (m) => m.SequenceKeyframeDemoModule
        ),
      post:
        'assets/post-content/advanced/sequence-keyframe/sequence-keyframe.content.md',
      pageType: 'content-with-demo',
    },
  ],
};
