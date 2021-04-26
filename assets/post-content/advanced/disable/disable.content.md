Sometimes we want to disable an animation when a certain condition is met, for example, on low performing devices, certain browsers, when the user has the system setting set to minimize the amount of non-essential motion (`prefers-reduced-motion` media query), or maybe an internal setting within the application. Angular provides you with a `@.disabled` property that lets you do exactly this. This property lets you pass in an expression to conditionally disable and enable children animations, defaulting to `true` if no expression is passed in.

```markup
<div [@.disabled]="disableAnimationCondition">
  <div [@animate]="expression">Animate</div>
</div>
```

This property disables all the animation on the element itself and all the children of the element, including those that are rendered from within a router outlet. Under the hood `@.disabled` adds/removes `.ng-animate-disabled` class on the element where it's applied. This allows us to either disable animations on a specific component, certain sections of the application or even application wide.

Toggling the disabled state for the entire application can be done by adding the `disabled` property through a `HostBinding` on the top level `AppComponent` like the snippet below. This will disable all the animations throughout the application, with a few exceptions that will be covered in the following section.

```ts
export class AppComponent {
  @HostBinding('@.disabled') private disabled = true;
}
```

## Some gotchas of this property

The `disabled` property only targets Angular animations, hence animations that are implemented using CSS transitions or keyframe animations won’t be disabled.

Another caveat: it won’t work for elements that are appended to the DOM directly. Some examples of these types of elements are overlays such as bottom sheets and modals. Instead of using the previous methods of adding the `disabled` property, we can use Angular’s `Renderer2` to set the attribute directly to the overlay containers to disable both the element and its children’s animations.

```ts
constructor( private overlayContainer: OverlayContainer, private renderer:Renderer2 ) {
  const disableAnimations:boolean = true;

  // get overlay container to set property that disables animations
  // Note: how to get the container element might vary depending on what the element is
   const overlayContainerElement:HTMLElement = this.overlayContainer;

  // angular animations renderer hooks up the logic to disable animations into setProperty
  this.renderer.setProperty( overlayContainerElement, "@.disabled", disableAnimations );
}
```

Elements that are added to the DOM directly could alternatively be disabled by importing the `NoopAnimationsModule` instead of the regular `BrowserAnimationModule` in the module that contains these components, which mocks the animations. However, this disables all the animation within that module.

Think of it like turning off your TV by flipping the lever on your circuit breaker. This might work for certain use cases such as when you want to disable all 3rd party animations within a module, but this would probably not work well for something that is more dynamic.
