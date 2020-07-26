Angular animations (`@angular/animations`) is a powerful module that comes with Angular which provides a DSL (domain specific language) for defining web animation sequences for HTML elements as multiple transformations over time which could occur sequentially or in parallel. Angular animations use the native Web Animations API, and as of Angular 6, falls back to CSS keyframes if the Web Animations API is not supported in the user's browser.

The animations are based on CSS web transition functionality which means that anything that can be styled or transformed through CSS, can be animated the same way using Angular animations with the added advantage of giving the developer more control in orchestrating it. This provides us with animations that have CSS-like performance along with the flexibility of Javascript out of the box without additional dependencies.

Animations using Angular's BrowserAnimationModule goes through 4 steps. I like to think of this as being comprised of a series of questions - why, what, where, and how, the answers of which being what governs the animation’s behavior:

- Evaluate data binding expression - tells Angular which animation state the host element is assigned to (why)
- Data binding target tells Angular which animation target defines CSS styles for the elements state (what)
- State tells Angular which CSS styles should be applied to the element (where)
- Transition tells Angular how it should apply the specified CSS styles when there is a state change (how)

## JS/CSS Convention

The style function is an integral part of Angular animation, a place to specify what styles to apply to the target element at a certain state. An interesting thing about this function is that it accepts 2 types of conventions, which would explain the varying syntax in animation code you would find on the internet - some having camel case and some with dashed case.

### Camel Case

The Javascript naming convention is to use camelcase keys. Angular animation accepts this as is, letting you pass in regular key value pairs like this:

```ts
style({
  backgroundColor: 'green',
  fontSize: '20px',
});
```

### Dashed Case

The CSS property naming convention (dashed case), however, has to be enclosed in quotes to stop Javascript from trying to interpret the hyphens as arithmetic operators. So the same code above using the dashed case would look something like this:

```ts
style({
  'background-color': 'green',
  'font-size': '20px',
});
```

## Order of Execution

Angular animations happen **after** what triggers them. For instance, the `:enter` state change will get called after `ngOnInit` and the first change detection cycle whereas `:leave` would happen right after the element `ngOnDestroy` is called.

In addition, each time an animation is triggered, the parent animation will have priority over the children, blocking all child animations from executing unless explicitly stated to execute both. In order to run both animations, the parent animation must query each element containing the child animations and run it using the `animateChild` method which is covered in more detail [here](https://williamjuan027.github.io/angular-animations-explorer/post/advanced/children).

## Setup

In order to use `@angular/animations` in your application, you will have to do the following:

- Verify that `@angular/animations` package is installed and listed as a dependency in your `package.json`
  - If not, add it by running `npm install --save @angular/animations`
- Import `BrowserAnimationsModule` and add it to the module's `imports` array (see snippet below)

```typescript
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
})
```

_Note: Angular also comes with `NoopAnimationsModule` which you can use to disable all animations globally. It is more commonly used for testing to mock the real animation when the animations are either too slow or doesn't play any role in what is being tested._
