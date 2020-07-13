A lot of times some animations get reused in several places in the application which tend to lead to duplicated animation code in several components. We could abstract our animation code a few different ways depending on the use case which I will show below to keep our animation code as DRY as possible.

## Abstracting the entire animation trigger

This is probably the most straightforward way if there are no configurable pieces in your animation and you want to keep the naming and behavior of the animation consistent across all your components. You can abstract out your entire trigger into a separate file and use a combination of different triggers in the `animations` array in the component's decorator by passing in the imported animations.

```typescript
// fade.animation.ts
export const Fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
]);
```

```typescript
import { Fade } from './fade.animation';

@Component({
  animations: [Fade],
})
```

## Using the `AnimationReferenceMetadata`

This approach lets you pass in additional parameters to your animation making it configurable depending on the caller. A limitation to this is that it only works with pre compiled values. In other words, you won't be able to modify the parameters at run time, for instance with the element's current position. If you need to be able to pass in run time information, this is where I would recommend using `AnimationBuilder` and `AnimationPlayer` instead. There is a great [article](https://medium.com/@GrandSchtroumpf/a-journey-into-angular-animation-f3360739c705) by GrandSchtroumpf which covers a workaround that lets you use `AnimationBuilder` combined with `AnimationReferenceMetadata` to be able to use dynamic values (with some known limitations).

```typescript
export const Slide = animation([
  style({ transform: 'translate({{x}}px, {{y}}px)' }),
  animate('{{duration}}s', style({ transform: 'translate(0,0)' })),
]);
...
trigger('slide', [
    transition(
        ':enter',
        useAnimation(Slide, {
            params: {
                x: 0,
                y: 50,
                duration: 0.3,
            },
        })
    ),
]),
```

The major difference here compared to a regular animation is the use of the `useAnimation` method in place of the array of animations, which in turn accepts the animation we created and a `params` object with any additional parameters that the animation might expect.
