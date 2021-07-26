This example uses [GreenSock](https://greensock.com/) to animate the elements within the device frame.

Install GreenSock's dependency (you don't need to install `@types/gsap` since it is now included as part of the gsap package)

```bash
npm i --save gsap
```

Add the following to your template, refer to [`AppMockupComponent`](https://github.com/williamjuan027/angular-animations-explorer/blob/master/src/app/content/third-party-libs/greensock/components/app-mockup) for the full code behind it

```html
<svg
  style="opacity: 0;"
  #appMockupSvg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  viewBox="0 0 565 728.85799"
>
  <!-- a lot of paths here, check out app-mockup.svg in the repo for the complete svg file -->
</svg>
```

Get the `path` and `circle` elements from the `svg` using Angular's `@ViewChild` decorator and `querySelectorAll`

```ts
...

export class AppMockupComponent {

    @ViewChild('appMockupSvg') appMockupSvg: ElementRef;

    ngAfterViewInit(): void {
        const objElm = this.appMockupSvg.nativeElement as HTMLObjectElement;
        objElm.onload = () => {
            this._elements = objElm.querySelectorAll('path');
            this._circles = objElm.querySelectorAll('circle');

            // hide everything prior to animating
            this._elements.forEach((element) => (element.opacity = 0));
            this._circles.forEach((element) => (element.opacity = 0));

            // display container after all the children are hidden
            this.appMockupSvg.nativeElement.style.opacity = 1;
            this.animate();
        };
    }
}
```

Import `gsap` from `gsap` and use it's `timeline` method to setup an animation timeline. You can then chain animations by using their `from`, `to`, `fromTo` and other similar methods depending on your animation requirements.

```ts
import { gsap } from 'gsap';

...

export class AppMockupComponent {

    ...

    animate() {
        this._timeline = gsap
            .timeline({
                onComplete: () => console.log('animation completed'),
                onStart: () => console.log('animation started'),
            })
            // device frame
            .fromTo(
                this._elements[0],
                { opacity: 0 },
                { duration: 0.5, opacity: 1 },
                '0'
            )
            .fromTo(
                this._elements[1],
                { opacity: 0 },
                { duration: 0.5, opacity: 1 },
                '0'
            )
            // contents
            .fromTo(
                this._elements[2],
                { scale: 0, opacity: 0 },
                { duration: 0.4, scale: 1, opacity: 1 },
                '1.1'
            )
            ...
    }
}
```
