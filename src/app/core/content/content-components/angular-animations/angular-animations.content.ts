import { ContentGroup, EPageType } from "../../../models";
import { StateChangeDemoComponent } from './state-change/state-change.demo.component';
import { EnterExitDemoComponent } from './enter-exit/enter-exit.demo.component';
import { SequenceDemoComponent } from './sequence/sequence.demo.component';
import { SequenceKeyframeDemoComponent } from './sequence-keyframe/sequence-keyframe.demo.component';
import { QueryDemoComponent } from './query/query.demo.component';
import { ChildrenDemoComponent } from './children/children.demo.component';
import { DisableDemoComponent } from './disable/disable.demo.component';
import { ProgrammaticDemoComponent } from "./programmatic/programmatic.demo.component";

export const AngularAnimationsContent: ContentGroup = {
    title: 'Angular Animations',
    tagLine: 'Get the most out of Angular\'s built-in Animations',
    description: 'Learn the core functionalities of Angular Animations, how it works, along with their practical use cases.',
    content: {
        overview: {
            title: 'Overview',
            description:
              'High level overview of Angular animations, how it works, and how to use them in your project.',
            path: 'post/angular-animations/overview',
            post: 'assets/post-content/basic/overview/overview.content.md',
            pageType: EPageType.ContentOnly,
        },
        stateChange: {
            title: 'State Change',
            description:
                'Add custom animations to transitions between different states of an element.',
            path: 'post/angular-animations/state-change',
            post: 'assets/post-content/basic/state-change/state-change.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: StateChangeDemoComponent
        },
        enterExit:  {
            title: 'Enter Exit',
            description:
              'Custom animations for elements entering and leaving the view.',
            path: 'post/angular-animations/enter-exit',
            post: 'assets/post-content/basic/enter-exit/enter-exit.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: EnterExitDemoComponent
        },
        sequence: {
            title: 'Sequence',
            description:
              'Control the timing and sequences of your animations using group, sequence, and stagger.',
            path: 'post/angular-animations/sequence',
            post: 'assets/post-content/advanced/sequence/sequence.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: SequenceDemoComponent
          },
          sequenceKeyframe: {
            title: 'Multi-step Animation using Angular Keyframes',
            description:
              'Add multiple steps to your animation using keyframes with Angular animations.',
            path: 'post/angular-animations/sequence-keyframe',
            post:
              'assets/post-content/advanced/sequence-keyframe/sequence-keyframe.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: SequenceKeyframeDemoComponent
          },
          query: {
            title: 'Target Multiple Elements (Query)',
            description:
              'Apply the same animation to multiple different targets elements using the built in function query.',
            path: 'post/angular-animations/query',
            post: 'assets/post-content/advanced/query/query.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: QueryDemoComponent
          },
          children: {
            title: 'Animate Children Elements',
            description: 'Control individual children animations from their parent.',
            path: 'post/angular-animations/children',
            post: 'assets/post-content/advanced/children/children.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: ChildrenDemoComponent
          },
          disable: {
            title: 'Disable Animation',
            description:
              'Conditionally disable animation for a single component or your entire application.',
            path: 'post/angular-animations/disable',
            post: 'assets/post-content/advanced/disable/disable.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: DisableDemoComponent
          },
          routeAnimations: {
            title: 'Route Animations',
            description:
              'Animate route changes by adding custom animations to your router outlet.',
            path: 'post/angular-animations/route',
            post: 'assets/post-content/advanced/route/route.content.md',
            pageType: EPageType.ContentOnly,
          },
          programmatic: {
            title: 'Programmatic Animations',
            description:
                'Programmatically control your Angular animations.',
            path: 'post/angular-animations/programmatic',
            post: 'assets/post-content/advanced/programmatic/programmatic.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: ProgrammaticDemoComponent
        },
    }
}