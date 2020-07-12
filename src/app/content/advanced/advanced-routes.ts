import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const advancedRoutes: IContentRoutes = {
  name: 'Advanced',
  path: 'advanced',
  routes: [
    {
      title: 'Sequence',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/advanced/sequence/hero.svg',
      tags: ['advanced', 'angular animations'],
      path: 'sequence',
      loadChildren: () =>
        import('./sequence/sequence.demo.module').then(
          (m) => m.SequenceDemoModule
        ),
      post: 'assets/post-content/advanced/sequence/sequence.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Multi-step Animation using Angular Keyframes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/advanced/sequence-keyframe/hero.svg',
      tags: ['advanced', 'angular animations'],
      path: 'sequence-keyframe',
      loadChildren: () =>
        import('./sequence-keyframe/sequence-keyframe.demo.module').then(
          (m) => m.SequenceKeyframeDemoModule
        ),
      post:
        'assets/post-content/advanced/sequence-keyframe/sequence-keyframe.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Target Multiple Elements (Query)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/advanced/query/hero.svg',
      tags: ['advanced', 'angular animations'],
      path: 'query',
      loadChildren: () =>
        import('./query/query.demo.module').then((m) => m.QueryDemoModule),
      post: 'assets/post-content/advanced/query/query.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Animate Children Elements',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/advanced/children/hero.svg',
      tags: ['advanced', 'angular animations'],
      path: 'children',
      loadChildren: () =>
        import('./children/children.demo.module').then(
          (m) => m.ChildrenDemoModule
        ),
      post: 'assets/post-content/advanced/children/children.content.md',
      pageType: EPageType.ContentWithDemo,
    },
    {
      title: 'Disable Animation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/post-content/advanced/disable/hero.svg',
      tags: ['advanced', 'angular animations'],
      path: 'disable',
      loadChildren: () =>
        import('./disable/disable.demo.module').then(
          (m) => m.DisableDemoModule
        ),
      post: 'assets/post-content/advanced/disable/disable.content.md',
      pageType: EPageType.ContentWithDemo,
    },
  ],
};
