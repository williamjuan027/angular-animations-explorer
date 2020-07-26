The previous sections have primarily focused on targeting single elements where the animation trigger is applied to. If we have an animation set that we want to apply to a group of elements all at once with the same trigger, we can do so using the `query` function. An example of this would be a list that applies the same animation to each list item as it is added to the DOM.

A difference of using `query` compared to targeting a specific element is where the `trigger` is applied to. When using `query`, the animation `trigger` will be applied to the parent, where the `query` function will look for elements that meet the query parameters within the parent (including nested children) which can then be used to execute some animation. Out of the box, query accepts the following tokens:

- `:enter` and `:exit` - returns all elements that are inserted or removed
- `:animating` - returns all elements that are currently animating
- `:self` - returns current element
- `@{animationName}` - returns all elements with a matching animation trigger

You can also query multiple of these properties together by passing in a comma separated string of the tokens to the `query` function. As I mentioned earlier, Angular lets you do with the queried elements essentially the same as when you target specific elements directly. The second parameter for the `query` function accepts either a single `AnimationMetadata` or an array of `AnimationMetadata`, which means that it's possible to orchestrate complex animation sequences or logic within a query function to target multiple elements.

Below is an example of how you would apply a `ShakeAnimation` to all the children elements using the `query` function.

```typescript
const ShakeAnimation = [
  style({ transform: 'rotate(0)' }),
  animate('0.1s', style({ transform: 'rotate(2deg)' })),
  animate('0.1s', style({ transform: 'rotate(-2deg)' })),
  animate('0.1s', style({ transform: 'rotate(2deg)' })),
  animate('0.1s', style({ transform: 'rotate(0)' })),
];

export const QueryShake = [
  trigger('queryShake', [
    transition('* => default', [query('.card', ShakeAnimation)]),
  ]),
];
```

## Limiting the Number of Elements Queried

Piggybacking off the previous section, Angular's animation module also gives you the option to limit the number of elements you want to animate from your query, with the ability to do a negative query: querying n number of items starting with the last element.

This is particularly useful if you want to add some animations only to the first few or the last few of a set of dynamic elements (such as elements that are created with `*ngFor`). Using the previous example's `ShakeAnimation`, we can add an additional `limit` property to the query function passing in the number of elements to be returned.

```typescript
export const QueryShake = [
  trigger('queryShake', [
    transition('* => withLimit', [
      query('.card', ShakeAnimation, {
        limit: 2,
      }),
    ]),
  ]),
];
```
