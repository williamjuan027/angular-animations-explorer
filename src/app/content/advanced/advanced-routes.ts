import { IContentRoutes, EPageType } from '@content/content-routes.interface';

export const advancedRoutes: IContentRoutes = {
  name: 'Advanced',
  path: 'advanced',
  routes: [
    {
      title: 'Sequence',
      description:
        'Control the timing and sequences of your animations using group, sequence, and stagger.',
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
        'Add multiple steps to your animation using keyframes with Angular animations.',
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
        'Apply the same animation to multiple different targets elements using the built in function query.',
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
      description: 'Control individual children animations from their parent.',
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
        'Conditionally disable animation for a single component or your entire application.',
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
    {
      title: 'Route Animations',
      description:
        'Animate route changes by adding custom animations to your router outlet.',
      image: 'assets/post-content/advanced/route/hero.svg',
      tags: ['advanced', 'angular animations', 'route'],
      path: 'route',
      post: 'assets/post-content/advanced/route/route.content.md',
      pageType: EPageType.ContentOnly,
    },
  ],
};
