Animations can be run both in sequence and in parallel using the functions `sequence()` and `group()` respectively. A combination of parallel and sequence can also be used where the animation runs with a cascading delay between the elements. This effect is achieved using `stagger()`.

`group` and `sequence` are a little different compared to `stagger`. The former are applied to animation steps (values inside the animation array), whereas the latter are applied to the animated elements.

To demonstrate the various animation sequences, let’s start with defining the template which contains the parent element that we will target in our animations along with a few children elements. This is commonly used in lists or grid-like components containing multiple same or similar children elements. For simplicity, we will animate the children elements entering the view, adding a fade in and grow effect using the 3 sequences.

```html
<ul @fadeInGrow>
  <li>First Element</li>
  <li>Second Element</li>
  <li>Third Element</li>
</ul>
```

Run Animations in Parallel
`group` lets you run multiple animation steps in parallel. An example of a use case for this is if you want to animate multiple properties with varying animation properties such as different duration, delay or eases.

```typescript
animations: [
  trigger(‘fadeInGrow, [
    transition(‘:enter’, [
      query(‘:enter’, [
        style({ opacity: 0, transform: ‘scale(0.8)’  }),
        group([
          animate(‘500ms’, style({ opacity: 1 }),
          animate(‘200ms ease-in’, style({ transform: ‘scale(1)’ })
        ])
      ])
    ])
  ])
]
```

Run Animations in Sequence
`sequence` works similar to `group` where it alters the animation steps execution. `sequence` runs the animation sequentially, executing animations in the animation array one after the other. This function simplifies the process of chaining animations for a single target element.

Comparing the code below and the code in the previous section, everything looks identical, except the `group` function, which is replaced with the `sequence` function. It works the exact same way as running in parallel, the difference being `sequence` will tell Angular to execute the animation one after the other. So instead of fading in and growing the element at the same time, the `transform` animation will be executed once the `opacity` animation is done.

```typescript
animations: [
  trigger(‘fadeInGrow’, [
    transition(‘:enter’, [
      query(‘:enter’, [
        style({ opacity: 0, transform: ‘scale(0.8)’  }),
        sequence([
          animate(‘500ms’, style({ opacity: 1 }),
          animate(‘200ms ease-in’, style({ transform: ‘scale(1)’ })
        ])
      ])
    ])
  ])
]
```

Stagger Animations
Unlike the previous 2 functions, `stagger` is applied to the animated elements. This is usually used in conjunction with the `query` function to find inner elements within a parent/container element and applying animation to each of the child individually. What makes `stagger` unique is that it takes in an additional parameter to specify the delay for the animation’s execution for each element creating a cascading effect.

With `stagger`, the animation will be applied in the order of the element queried. This usually results in a staggering effect from the top down. We can easily reverse this order by passing in a negative value to the `timing` parameter resulting in the animation staggered starting from the last element and making its way up.

The second parameter in the stagger function accepts an array of `style` and `animate` functions, which means that we could also use the previous sequences - `sequence` and `group` to time the individual step of the animation together with `stagger` controlling the timing of the individual elements.

```typescript
animations: [
  trigger(fadeInGrow, [
    transition(‘:enter’, [
      query(‘:enter’, [
        style({ opacity: 0 }),
        stagger(‘50ms’, [
          animate(‘500ms’, style({ opacity: 1 })
        ])
      ])
    ])
  ])
]
```

Let’s break down the new functions in the code above
The trigger `fadeInGrow` targets the parent adding an `:enter` transition which will execute the animation in the transition array when the parent element enters the DOM
`query(‘:enter’)` inside the transition array targets all the children elements which will enter the DOM and applies the properties in the array that gets passed in which defines the elements’ styles and animations
`stagger(‘50ms’)` in the array being passed in to the `query` function tells Angular to execute all the animations applied to the children elements with a 50 ms delay between each element.
