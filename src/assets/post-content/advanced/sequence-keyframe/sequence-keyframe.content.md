Similar to how CSS keyframes animations work, keyframes allow us to build an animation in multiple steps. In other words, it lets us sequence our style changes for each element. Since this method can be passed in to the `animate` function, it can be combined with the previous section's animation sequences - `group`, `sequence`, and `stagger`, giving us even more control over the sequencing of our animations.

[Angular's keyframe function](https://angular.io/api/animations/keyframes) comes with an `offset` property which accepts decimals ranging from 0 to 1 to specify the steps of our animation. These are identical to the CSS keyframe counterparts of using percentages or `to` and `from` properties that we normally use to specify our animation steps. Below is an example of a simple CSS keyframe animation, and what it looks like when using Angular's keyframe function.

```css
/* css */
@keyframes 'fadeSlideGrowKeyframe' {
  30% {
    transform: opacity(1) ';
  }
  60% {
    transform: 'translateY(0) ';
  }
  100% {
    transform: 'scale(1) ';
  }
}
```

```ts
/* angular animation */
trigger('fadeSlideGrowKeyframe', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.5) translateY(50px)' }),
    animate(
      '500ms',
      keyframes([
        style({ opacity: 1, offset: 0.3 }),
        style({ transform: 'translateY(0)', offset: 0.6 }),
        style({ transform: 'scale(1)', offset: 1 }),
      ])
    ),
  ]),
]);
```
