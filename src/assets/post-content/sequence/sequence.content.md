Animations can be run both in sequence and in parallel using the functions `sequence()` and `group()` respectively. A combination of parallel and sequence can also be used where the animation runs with a cascading delay between the elements. This effect is achieved using `stagger()`.

In order to use these sequences, we will need the `query()` function to find the inner elements of the element being animated. The way `query` works is that it will apply the animations that we define to each individual element within the parent element which we target, instead of applying it to the parent.

To demonstrate the various animation sequences, let’s start with defining the template which contains the parent element that we will target in our animations along with a few children elements. This is commonly used in lists or grid-like components containing multiple same or similar children elements. For simplicity, we will animate the children elements entering the view, adding a fade in effect using the 3 sequences.

```html
<ul @fadeIn>
  <li>First Element</li>
  <li>Second Element</li>
  <li>Third Element</li>
</ul>
```

Run Animations in Parallel

The main difference between the previous animations discussed in this earlier in this post is that we have the additional `query` function which looks for `:enter` inside our `transition(‘:enter’)` function. Let’s break down how this new function works with the `trigger` and `transition`:
The trigger `fadeIn` targets the parent adding an `:enter` transition which will execute the animation in the transition array when the parent element enters the DOM
`query(‘:enter’)` inside the transition array targets all the children elements which will enter the DOM and applies the properties in the array that gets passed in which defines the elements’ styles and animations
`group(...)` in the array being passed in to the `query` function tells Angular to execute all the animations applied to the children elements in parallel

```typescript
animations: [
  trigger(‘fadeIn’, [
    transition(‘:enter’, [
      query(‘:enter’, [
        style({ opacity: 0 }),
        group([
          animate(‘500ms’, style({ opacity: 1 })
        ])
      ])
    ])
  ])
]
```

Run Animations in Sequence
Comparing the code below and the code in the previous section, everything looks identical, except the `group` function, which is replaced with the `sequence` function. It works the exact same way as running in parallel, the difference being `sequence` will tell Angular to execute the animation one after the other.

```typescript
animations: [
  trigger(‘fadeIn’, [
    transition(‘:enter’, [
      query(‘:enter’, [
        style({ opacity: 0 }),
        sequence([
          animate(‘500ms’, style({ opacity: 1 })
        ])
      ])
    ])
  ])
]
```

Stagger Animations
Similar to the previous section, all that needs to be modified in the previous code is the `sequence` function. `stagger` however, takes in an additional parameter that defines the delay that the animation needs to apply between each element. This is the first parameter that the function accepts followed by the actual animate function.

```typescript
animations: [
  trigger(‘fadeIn’, [
    transition(‘:enter’, [
      query(‘:enter’, [
        style({ opacity: 0 }),
        stagger(50, [
          animate(‘500ms’, style({ opacity: 1 })
        ])
      ])
    ])
  ])
]
```

Multi-step Animation using Angular Keyframes
Similar to how CSS keyframes animations work, keyframes allow us to build an animation in multiple steps. In other words, it lets us sequence our style changes for each element. Since this method can be passed in to the `animate` function, it can be combined with the previous section’s animation sequences - `group`, `sequence`, and `stagger`, giving us even more control over the sequencing of our animations.

[Angular’s keyframe function](https://angular.io/api/animations/keyframes) comes with an `offset` property which accepts decimals ranging from 0 to 1 to specify the steps of our animation. These are identical to the CSS keyframe counterparts of using percentages or `to` and `from` properties that we normally use to specify our animation steps. Below is an example of a simple CSS keyframe animation, and what it looks like when using Angular’s keyframe function.

```css
@keyframes moveUp {
  0% {
    transform: ‘translateY(100%) ’;
  }
  50% {
    transform: ‘translateY(75%) ’;
  }
  1-0% {
    transform: ‘translateY(0) ’;
  }
}
```

```ts
query(‘:enter’, [
  animate(‘200ms’, keyframes([
    style({ transform: ‘translateY(100%)’, offset: 0 }),
    style({ transform: ‘translateY(75%)’, offset: 0.5 }),
    style({ transform:  ‘translateY(0)’, offset: 1 }),
  ])
])
```
