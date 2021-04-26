Angular lets you define a style and transition to be applied when an element’s state changes. Angular provides 3 different states which we could use in our animation code:

- Wildcard (_) - this is the default or all states of the element, for example active => _ represents a state change from active to anything else.
- Void (void) - this is the state when the element is created but not yet part of the DOM, or when the element is removed from the DOM.
- Custom - this can be any custom name to indicate a certain state of the element (example: 'active', 'inactive').

Before we start, we will need to define the different states for the element to transition between. This will be the first parameter that is passed in to the `state` function (which in the example below are ‘default’ and ‘disabled’), along with the style that needs to be applied when the element is in that state.

To animate the transition between the different state, we will need to pass in the `transition` function specifying the 2 states (`* => *` in the example below means anything to anything, we can use a more specific target too such as `default => disabled` depending on your requirements) the transition needs to be applied to, and the animation function that needs to be executed during the transition.

```typescript
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  ...
  animations: [
    trigger('enabledStateChange', [
      state(
        'default',
        style({
          opacity: 1,
        })
      ),
      state(
        'disabled',
        style({
          opacity: 0.5,
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ])
  ]
})
```

Here is a brief explanation of the methods used in the above snippet:

- `trigger` - accepts a name for the animation trigger and an array of state and transition methods to configure the animation
- `state` - accepts a name for the state and the styles that should be conditionally applied when in specified state
- `style` - CSS styles to be applied
- `transition` - specifies the configuration for transitioning between the different states and its direction
- `animate` - specifies the duration and any additional css animation properties such as easing

_`style`, `transition`, and `animate` accept both grouped (as an array) and singular arguments giving us some flexibility in terms of configuring our animations._

In your template, all you need to do is add the animation name defined previously, prefixed with `@` and bind it to a variable that will toggle between the states and Angular handles the rest.

```markup
<div [@enabledStateChange]="stateOfElement">...</div>
```
