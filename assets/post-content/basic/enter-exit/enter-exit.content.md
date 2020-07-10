Angular also provides some useful aliases such as `:enter` and `:leave` to animate elements entering and leaving the DOM, this is useful for adding some animation to elements which are shown conditionally using `*ngIf` or `*ngFor`. The code below shows how you can create a fade in and fade out animation.

```typescript
trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('100ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('100ms', style({ opacity: 0 }))
  ])
]),
```

And to use it in your template, all you need to do is add the trigger name prefixed by `@`. Since it is exclusively using the `:enter` and `:leave` aliases, we don't have to bind it to anything.

```markup
<div *ngIf="show" @fadeInOut>...</div>
```
