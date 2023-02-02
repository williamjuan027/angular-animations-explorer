import { ContentGroup, EPageType } from "../../../models";
import { ClassBasedDemoComponent } from "./class-based/class-based.demo.component";
import { InlineDemoComponent } from "./inline/inline.demo.component";
import { WebAnimationsApiDemoComponent } from "./web-animations-api/web-animations-api.demo.component";

export const BasicContent: ContentGroup = {
    title: 'Basic Animations',
    tagLine: 'Use CSS and Web Animations in your Angular Apps',
    description: 'Learn how to combine web and CSS animations with Angular\'s features to create powerful animations.',
    content: {
        classBased: {
            title: 'Class Based Animations',
            description:
              'Use CSS keyframes or transitions by dynamically adding and removing classes.',
            path: 'post/basic/class-based',
            post:
            'assets/post-content/alternative/class-based/class-based.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: ClassBasedDemoComponent
        },
        inlineAnimations: {
            title: 'Inline Animations',
            description:
                'Pass in dynamic values to your animation using inline styling to trigger animations.',
            path: 'post/basic/inline',
            post: 'assets/post-content/alternative/inline/inline.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: InlineDemoComponent
        },
        webAnimations: {
            title: 'Web Animations API',
            description:
                'Take full control of your animations by accessing web animations API directly.',
            path: 'post/basic/web-animations',
            post:
            'assets/post-content/alternative/web-animations-api/web-animations-api.content.md',
            pageType: EPageType.ContentWithDemo,
            demoComponent: WebAnimationsApiDemoComponent
        },
    }
}