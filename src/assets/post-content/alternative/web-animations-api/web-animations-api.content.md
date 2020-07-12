Another way to add animation to your application is to use regular web animation APIs (WAAPI). WAAPI at the time this was written is supported by Firefox 48+ and Chrome 36+, but it has a comprehensive and robust polyfill, making it usable in production today, even while browser support is limited. Similar to class based and inline animations, utilizing WAAPI in Angular is very similar to how regular javascript handles it, the main difference being how we access DOM elements.

In plain html and javascript we would typically give the element an `id` and use `document.getElement.byId` with the element's id to get reference to the DOM element. In Angular, we can use the template reference variable \(`#`\) instead and get it's reference by using the `ViewChild` decorator.

Lets first define the animation and the timing of the animation which we could use in both of our examples

```javascript
getShakeAnimation() {
    return [
      { transform: 'rotate(0)' },
      { transform: 'rotate(2deg)' },
      { transform: 'rotate(-2deg)' },
      { transform: 'rotate(0)' },
    ];
  }

getShakeAnimationTiming() {
    return {
      duration: 300,
      iterations: 3,
    };
  }
```

The next two sets of snippets are how you would use the animation above in a html and javascript application followed by how a slight variation of the same code can be used in an angular project.

**html and js**

```html
<div id="targetElement"></div>
```

```typescript
document
  .getElementById('targetElement')
  .animate(this.getShakeAnimation(), this.getShakeAnimationTiming());
```

**In an angular application**

```html
<div #targeElement></div>
```

```ts
@ViewChild('targetElement') targetElement: ElementRef;

this.targetElement.nativeElement.animate(this.getShakeAnimation(), this.getShakeAnimationTiming());
```

Note that the animation part in both the snippets are exactly the same!

The web animations API also comes with some handy utility properties and functions that we can use in our Angular application the same way you would do in a regular vanilla application such as `cancel` to cancel the current animation and some key event listeners such as `oncancel` and `onfinish`. [Here](https://developer.mozilla.org/en-US/docs/Web/API/Animation) is a link to the available APIs.
