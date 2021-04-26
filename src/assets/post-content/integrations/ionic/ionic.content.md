If you are using Ionic Angular, you have the ability to use Angular's animation system in your app. This should be identical to the one you would use in a regular angular web project. Angular's animation system is built on CSS functionality, which means that you can only animate properties that you could animate using CSS. This method doesn't introduce new animatable properties, it is just a different way of implementing your animations.

## Setup

We will need the `@angular/animation` dependency in order to create these animations. Verify that it is already listed as a dependency in your package.json, if its not, we can add it by running the following command

```bash
npm install @angular/animation --save
```

We will then need to import `BrowserAnimationsModule` in our `app.module.ts` to make it available throughout the app.

```ts
// app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

...
imports: [
  ...
  BrowserAnimationsModule
]
```

## Write your animation

We will need a couple more imports on our component's file to be able to use the various features

```ts
// .component.ts
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
```

Inside our `@Component` decorator, we can pass in an additional property called animations which accepts an array of animations that we can then call from our template with a special syntax. This is identical to what you would do for a regular Angular project.

For the purpose of this section, lets add a simple enter and exit fade and slide up animation to our element. We will need to create a trigger which will contain 2 transitions - one for entering and one for leaving.

The first parameter of transition is the state (`:enter` and `:leave` are aliases for elements that are displayed conditionally either with `*ngIf` or `*ngFor` - `:enter` for elements that is being added, and `:leave` for elements that is being removed), we can define custom states to use here and set different animations for transitioning between different states. The second one is the array where we can pass in the some styles and animations properties that will be applied to our ui elements.

```ts
// .component.ts
@Component({
  ...
  animations: [
   trigger('fadeAndSlide', [
    transition(':enter', [
      style({ opacity: 0, transform: "translateY(20)" }),
      animate('1s ease-out', style({ opacity: 1, transform: "translateY(0)" }))
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: "translateY(0)" }),
      animate('1s ease-in', style({ opacity: 0, transform: "translateY(20)" }))
    ])
  ])
 ]
})
```

In the code above, the first element in the transition array is the initial style that gets applied to the component (which in the case of `:enter` will set the initial `opacity` to 0 and add a `translateY` to push the component down. The second element is the animation that we want to run when the component is being added (which in this case will animate it for 1 second with an ease-out curve setting the `opacity` to 1 and add a `translateY` of 0, making it move up to its original position). We can chain animations here by adding more animations to the transition array. See the following example for how the code looks like if we add a couple more animations to the :enter transition. The animation chained this way will run in sequence - it will wait for the current animation to finish before starting the next animation.

```ts
transition(':enter', [
  style({ opacity: 0, transform: "translateY(20)" }),
  animate('1s ease-out', style({ opacity: 1, transform: "translateY(0)" })),
  animate('1s ease-out', style({ opacity: 1, transform: "translateX(5)" })),
  animate('1s ease-out', style({ opacity: 1, transform: "translateX(0)" }))
]),
```

## Using the animations in your template

We can now use the animation we wrote in the previous section by adding `@` to the element that we want.

```markup
<!-- .component.html -->
<label @fadeAndSlide *ngIf="showLabel"></label>
```

This kind of animations also lets you hook into the animation's start and end event easily by adding `(@animationTriggerName.start)` and `(@animationTriggerName.done)` to the element you are animating.

This is a basic implementation of adding a quick transition animation to your application. This technique can also be used for more complex animations such as transitioning between multiple states, animating different properties, running animations in parallel, and staggering your animation - bringing the same animation functionalities that Angular provides on the web to mobile.
