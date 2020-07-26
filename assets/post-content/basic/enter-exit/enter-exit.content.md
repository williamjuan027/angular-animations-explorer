Angular also provides some useful aliases such as `:enter` and `:leave` to animate elements entering and leaving the DOM. These aliases are essentially transitions to and from the `void` state, i.e. `void => *` and `* => void` respectively. This is particularly useful for adding some animation to elements which are shown conditionally using `*ngIf` or `*ngFor`. The code below shows how you can create a fade in and fade out animation.

```typescript
trigger('fadeSlideInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
  ]),
]),
```

And to use it in your template, all you need to do is add the trigger name prefixed by `@`. Since it is exclusively using the `:enter` and `:leave` aliases, we don't have to bind it to anything.

```html
<div *ngIf="show" @fadeSlideInOut>...</div>
```
