Animations using Angular's `BrowserAnimationModule` goes through 4 steps. I like to think of this as being comprised of a series of questions - why, what, where, and how, the answers of which being what governs the animation’s behavior:

- Evaluate data binding expression - tells Angular which animation state the host element is assigned to (why)
- Data binding target tells Angular which animation target defines CSS styles for the elements state (what)
- State tells Angular which CSS styles should be applied to the element (where)
- Transition tells Angular how it should apply the specified CSS styles when there is a state change (how)

## JS/CSS Convention

An interesting thing about Angular's animation style function is that it accepts 2 types of conventions, which would explain the varying syntax in animation code out there - some having camel case and some with dashed case.

### Camel Case

This is the Javascript property naming convention that could be passed in as regular key value pairs like so:

```ts
style({
  backgroundColor: 'green',
  fontSize: '20px',
});
```

### Dashed Case

This is the CSS property naming convention which has to be enclosed in quotes to stop Javascript from trying to interpret the hyphens as arithmetic operators. So the same code above using the dashed case would look something like this:

```ts
style({
  'background-color': 'green',
  'font-size': '20px',
});
```

## Order of Execution

Angular animations happen **after** what triggers them. For instance, `:enter` state change will get called after `ngOnInit` and the first change detection cycle whereas `:leave` would happen right after the element `ngOnDestroy` is called.

In addition, each time an animation is triggered, the parent animation will have priority over the children, blocking any child animations. In order to run both animations, the parent animation must query each element containing the child animations and run it using the `animateChild` method which is covered in more detail [here](link to animateChild section).

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

_Note: Angular also comes with `NoopAnimationsModule` which you can use to disable all animations globally. This is more commonly used for testing to mock the real animation when the animations are either too slow or doesn't play any role in what is being tested._
