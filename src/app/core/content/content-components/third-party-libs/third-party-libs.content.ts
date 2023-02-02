import { ContentGroup, EPageType } from "../../../models";
import { AnimateStyleDemoComponent } from "./animate-style/animate-style.demo.component";
import { GreensockDemoComponent } from "./greensock/greensock.demo.component";
import { MotionOneDemoComponent } from "./motion-one/motion-one.demo.component";
import { PopmotionDemoComponent } from "./popmotion/popmotion.demo.component";

export const ThirdPartyLibsContent: ContentGroup = {
  title: 'Third-party Libraries',
  description: 'Learn how to integrate third-party animation libraries and use them in the context of an Angular application.',
  tagLine: 'Skip the hassle of building your own animations',
  content: {
    popmotion: {
      title: 'Pop Motion',
      description:
        'Add custom animations to transitions between different states of an element using Popmotion.',
      path: 'post/third-party-libs/popmotion',
      post:
        'assets/post-content/third-party-libs/popmotion/popmotion.content.md',
      pageType: EPageType.ContentWithDemo,
      demoComponent: PopmotionDemoComponent,
    },
    greensock: {
      title: 'GreenSock',
      description: 'Create animation timelines using GreenSock',
      path: 'post/third-party-libs/greensock',
      post:
        'assets/post-content/third-party-libs/greensock/greensock.content.md',
      pageType: EPageType.ContentWithDemo,
      demoComponent: GreensockDemoComponent
    },
    animateStyle: {
      title: 'Animate.style',
      description:
        'Use predefined animations from Animate.style to animate your application',
      path: 'post/third-party-libs/animate-style',
      post:
        'assets/post-content/third-party-libs/animate-style/animate-style.content.md',
      pageType: EPageType.ContentWithDemo,
      demoComponent: AnimateStyleDemoComponent
    },
    motionOne: {
      title: 'Motion One',
      description:
        'A new animation library, built on the Web Animations API for the smallest filesize and the fastest performance.',
      path: 'post/third-party-libs/motion-one',
      post:
        'assets/post-content/third-party-libs/motion-one/motion-one.content.md',
      pageType: EPageType.ContentWithDemo,
      demoComponent: MotionOneDemoComponent
    }
  }
};
