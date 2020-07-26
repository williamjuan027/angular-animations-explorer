Angular animation comes with a handy function called `animateChild()` which as the name suggests, executes the child’s animation. You might be asking why would we need this if we can execute the child’s animation independent of the parent?

One of the common use case for this is when you have an `*ngIf` attached to the parent and each of the children has its own animation triggers attached to it with their own enter and leave animations. This is not a problem when the parent enters the DOM, all the children elements’ animation will be executed normally as they are added to the DOM. However, the `:leave` animation on the children elements doesn’t really work the same way. Because the `*ngIf` is on the parent, once that boolean becomes false, the children will immediately be removed from the DOM along with the parent without executing their animation and waiting for it to be done before removing it. A way to handle that scenario is to attach a trigger to the parent and querying the children as part of the parent’s animation. Below is an example of how we would use the parent’s animation to trigger its children’s animation.

Let’s say we have a simple container with 2 children, each with its own set of animations (different triggers) with the following structure.

```html
<div *ngIf="”isDisplayed”" @container>
  <div @enterExitLeft></div>
  <div @enterExitRight></div>
</div>
```

```ts
export const EnterExitLeft = [
  trigger('enterExitLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-200px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(-200px)' })
      ),
    ]),
  ]),
];

export const EnterExitRight = [
  trigger('enterExitRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(200px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(200px)' })
      ),
    ]),
  ]),
];
```

To be able to trigger all the children’s animation using the parent container’s `*ngIf`, we will need to do a query with a wildcard to get all the children’s triggers, followed by the `animateChild()` function to tell Angular to execute the animation that it finds on the queried elements.

```ts
export const Container = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
];
```

What the code above does is it tells the parent to find all the children of the element with an animation trigger (anything that starts with `@`) attached to it, and run the animation as part of the parent’s animation sequence. In the code above, I used a wildcard prefixed with `@`, which returns all the children with an animation trigger. This might not be applicable to all use cases. For cases where you need to target specific children or maybe target different child or child animations depending on a certain condition, we can pass in a different target here instead of `@*` as the query parameter depending on your needs.
