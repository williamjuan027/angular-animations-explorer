This example uses [Animate.style](https://animate.style/) to animate the elements.

Add animate.style's dependency either through the CDN or via npm. I used the CDN for this demo. Add the following code to your `index.html`

```html
<head>
  ...
  <!-- animate.style -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

If you want to trigger an animation once when a state change occurs, you can bind the animation class directly to in your template:

```html
<div [class.bounce]="bounce">
  <app-card-demo-sample></app-card-demo-sample>
</div>
```

> The above approach also works for infinite animations.

However, that approach doesn't work if you want to create an animation that can be triggered multiple times. For example, clicking one of the animation button in the demo executes the animation. After the animation completes, you can run the animation again by clicking the button again.

This is by design, as animate.style runs an animation by adding a class containing the animation, you wouldn't be able to retrigger the animation if the class is already added to the element. To workaround this, we can use the `animationend` event to listen to when the animation is done executing, and remove the class that was added to trigger the animation. This allows us to add the classes again whenever we want to retrigger the animation.

```typescript
import { ViewChild, ElementRef } from '@angular/core';

...
export class AnimateStyleComponent {

    @ViewChild('cardContainer') cardContainer: ElementRef;

    bounceCard(): void {
        this._animate('bounce').catch((e) => {
        console.error('Error animating element:', e);
        });
    }

    private _animate(animationName: string, persistClass = false): Promise<void> {
        if (!this.cardContainer || !this.cardContainer.nativeElement) {
        return Promise.reject('element not defined');
        }

        if (this.isAnimating) {
        return Promise.reject('element is animating');
        }
        return new Promise((resolve) => {
        this.isAnimating = true;

        // listen to animationend to allow additional logic to be run
        // after the animation from animate.style is done executing
        this.cardContainer.nativeElement.addEventListener(
            'animationend',
            (event) => {
            if (event.animationName === animationName) {
                this.isAnimating = false;
                if (!persistClass) {
                this.cardContainer.nativeElement.classList = '';
                }
                resolve();
            }
            },
            { once: true }
        );
        this.cardContainer.nativeElement.classList = `animate__animated animate__${animationName}`;
        });
    }
}
```
