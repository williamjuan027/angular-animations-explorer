This example uses [Animate.css](https://animate.style/) to animate the elements.

Add Animate.css's dependency either through the CDN or via npm. I used the CDN for this demo. Add the following code to your `index.html`

```html
<head>
  ...
  <!-- animate.css -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

## Add an Animation

If you want to trigger an animation once when a state change occurs, you can bind the animation class directly to in your template:

```html
<div class="animate__animated" [class.animate__bounce]="bounce">
  <app-card-demo-sample></app-card-demo-sample>
</div>
```

> The above approach also works for infinite animations.

However, that approach doesn't work if you want to create an animation that can be triggered multiple times. For example, clicking one of the animation buttons in the demo executes the animation. After the animation completes, you can run the animation again by clicking the button again.

This is by design, as Animate.css runs an animation by adding a class containing the animation, you wouldn't be able to retrigger the animation if the class is already added to the element. To work around this, we can use the `animationend` event to listen to when the animation is done executing, and remove the class that was added to trigger the animation. This allows us to add the classes again whenever we want to retrigger the animation.

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
        // after the animation from animate.css is done executing
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

## Add Enter and Exit Animations

You can also animate entrances and exits by simply attaching the class conditionally.

```html
<div
  class="animate__animated"
  [class.animate__zoomInDown]="isShowing"
  [class.fadeOut]="!isShowing"
>
  <app-card-demo-sample></app-card-demo-sample>
</div>
```

However, the above approach just animates the element in and out of the view, not necessarily removing the element from the DOM like what an `*ngIf` does.

To add and remove the element to and from the DOM, there is some additional setup we need to do. First, we will need to use an `ng-template` to wrap the component that we want to animate so we can add and remove it from the DOM. We'll also set the `opacity` to `0` to prevent the view from flashing before executing the enter animation. More on this later.

```html
<div #container></div>
  <ng-template #template>
    <!-- set opacity to 0 to prevent flashing before enter animation starts -->
    <div #cardContainer [style.opacity]="0">
      <app-card-demo-sample></app-card-demo-sample>
    </div>
  </ng-template>
</div>
```

We will then need to access the template reference and its container to conditionally add and remove the template from its parent container.

```typescript
export class AnimateStyleDemoComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  @ViewChild('cardContainer') cardContainer: ElementRef;
  @ViewChild('template', { read: TemplateRef }) template: TemplateRef<null>;

  private _addCardToView(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.viewRef) {
        this.container.clear();

        // add element to container
        this.viewRef = this.container.createEmbeddedView(this.template);

        // wrap in settimeout because it tries to animate before view is loaded
        setTimeout(() => {
          if (this.cardContainer && this.cardContainer.nativeElement) {
            // set opacity to 1 to make element visible before starting enter animation
            this.renderer.setStyle(
              this.cardContainer.nativeElement,
              'opacity',
              1
            );
          }
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  private _removeCardFromView(): void {
    this.container.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }
}
```

To animate the adding and removing of the element from the DOM, we will chain the adding/removing of the element and the animate function via promises.

For elements entering, add the card to view first, followed by the animate function. On the other hand, elements leaving will execute the animation first, followed by removing the card from view. You can verify this by adding `console.log` messages in the component being added/removed's `ngOnInit` and `ngOnDestroy` to check if these are called as the component is added and destroyed.

```typescript
export class AnimateStyleDemoComponent {
  private _showCard(): void {
    this._addCardToView().then(() => {
      this._animate('zoomInDown').catch((e) => {
        console.error('Error animating element:', e);
      });
    });
  }

  private _hideCard(): void {
    this._animate('fadeOut', true)
      .then(() => {
        this._removeCardFromView();
      })
      .catch((e) => {
        console.error('Error animating element:', e);
      });
  }
}
```
