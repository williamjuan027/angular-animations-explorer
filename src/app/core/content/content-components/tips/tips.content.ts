import { ContentGroup, EPageType } from "../../../models";

export const TipsContent: ContentGroup = {
  title: 'Tips and Tricks',
  tagLine: 'Level up your animations using these techniques',
  description: 'Learn how to use web and css animations to power fasdfadfad',
  content: {
    performance: {
        title: 'Performance',
        description:
          'Understand the different implications of animating different properties and the different animation methods.',
        path: 'post/tips/performance',
        post: 'assets/post-content/tips/performance/performance.content.md',
        pageType: EPageType.ContentOnly,
      },
      debugging: {
        title: 'Debugging',
        description: `Use animation specific features in browsers' devtools to help debug your animation code.`,
        path: 'post/tips/debugging',
        post: 'assets/post-content/tips/debugging/debugging.content.md',
        pageType: EPageType.ContentOnly,
      },
      disbableTesting: {
        title: 'Disable Animations during Testing',
        description:
          'Speed up your unit tests by disabling animation when its not part of your test cases.',
        path: 'post/tips/disable-testing',
        post:
          'assets/post-content/tips/disable-testing/disable-testing.content.md',
        pageType: EPageType.ContentOnly,
      },
      reuse: {
        title: 'Reusing Animations',
        description:
          'Ways to abstract out common animation code so it can be reused more easily in your application.',
        path: 'post/tips/reuse',
        post: 'assets/post-content/tips/reuse/reuse.content.md',
        pageType: EPageType.ContentWithDemo,
      },
}
}