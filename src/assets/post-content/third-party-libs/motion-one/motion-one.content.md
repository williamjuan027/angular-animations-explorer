This example uses [Motion One](https://motion.dev/) to animate the elements. Motion One is a new animation library, built on the Web Animations API. If you have used Popmotion or Greensock before, this library's syntax would look very familiar.

## Get Started

Add motion one's dependency via npm using the following command.

```html
npm install --save motion
```

> If you run into any typings issue from the library, try adding `skipLibCheck: true` to your tsconfig.json.

## Add Motion One Animation

To animate an element from your template, you will need to give it an id so you can access them from your typescript file.

```html lineNumbers
<div #myElement>
  ...
</div>
```

You can then use Angular's `ViewChild` decorator to access the element defined above.

```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  ...
})
export class MotionOneDemoComponent {
  @ViewChild('myElement') myElement: ElementRef;

}
```

Now that we have access to your element, you can use Motion One's animation APIs to animate your element.

```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate } from 'motion';

@Component({
  ...
})
export class MotionOneDemoComponent {
  @ViewChild('myElement') myElement: ElementRef;

  animateMyElement(): void {
    animate(
      this.myElement.nativeElement,
      { rotate: 180 },
      { duration: 0.5, easing: 'ease-in' }
    ).then(() => {
        // animation completed
      })
      .catch(() => {
        // if an error happens
      });
  }
}
```

## Spring and Glide

Motion One also comes with prebuilt easing such as `spring` and `glide` which you can use by passing in their respective functions with any additional configurations. The snippet below is what a basic spring animation using Motion One looks like (Click on the "spring" button in the demo).

```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate } from 'motion';

@Component({
  ...
})
export class MotionOneDemoComponent {
  @ViewChild('myElement') myElement: ElementRef;

  animateMyElement(): void {
    animate(
      this.myElement.nativeElement,
      { rotate: 180 },
      { type: 'spring', duration: 0.5 } // 👈 modify the easing
    ).then(() => {
        // animation completed
      })
      .catch(() => {
        // if an error happens
      });
  }
}
```

## Timeline

Another cool feature from Motion One is its out-of-the-box support of timeline. You can chain your animations and animate different elements all at once by creating an animations array and passing it to the `animate` function.

The `animate` function when used with an array of animations works similarly to Greensock's timeline feature. The code snippet below shows how you chain and sequence a translation of a box (Click on the `sequence` button on the demo to see it in action).

```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate } from 'motion';

@Component({
  ...
})
export class MotionOneDemoComponent {
  @ViewChild('myElement') myElement: ElementRef;

  animateMyElement(): void {
    const sequence = [
      [this.myElement.nativeElement, { x: 100 }, { duration: 0.5 }],
      [this.myElement.nativeElement, { y: 100 }, { duration: 0.5 }],
      [this.myElement.nativeElement, { x: 0, y: 0 }, { duration: 1 }],
    ];
    animate(sequence)
      .then(() => {
        // animation completed
      })
      .catch(() => {
        // if an error happens
      });
  }
}
```
