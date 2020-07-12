As described by the official documentation, an attribute directive is a means to "change the appearance or behavior of a DOM element", making this a great way to handle a more complex animations (in terms of what triggers the animations). The nice thing about using directives is that it gives you an easy way to access the element in the DOM that the directive is applied to - letting us manipulate it the same way we would in a component, and also attach `HostListener`s to listen to any events and react to the emitted event. However, unlike building out a custom component with the animations and reusing the components, a directive lets you attach just the behavior to any element in your application, which makes it more flexible if we want to reuse the same animation across different elements or components.

Directives don't have the `animations` array as part of the decorator, so we will have to use angular's `AnimationBuilder` to build the animation and `AnimationPlayer` to play the animation. Here is an example of an animation fading out the element on mouse down and fading it back in on mouse up.

```typescript
import { Directive, HostListener, ElementRef } from '@angular/core';
import {
  AnimationBuilder,
  AnimationMetadata,
  style,
  animate,
} from '@angular/animations';

@Directive({
  selector: '[appFadeMouseDown]',
})
export class FadeMouseDownDirective {
  @HostListener('mousedown') mouseDown() {
    this.playAnimation(this.getFadeOutAnimation());
  }

  @HostListener('mouseup') mouseUp() {
    this.playAnimation(this.getFadeInAnimation());
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  private playAnimation(animationMetaData: AnimationMetadata[]): void {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }

  private getFadeInAnimation(): AnimationMetadata[] {
    return [animate('400ms ease-in', style({ opacity: 1 }))];
  }

  private getFadeOutAnimation(): AnimationMetadata[] {
    return [animate('400ms ease-in', style({ opacity: 0.5 }))];
  }
}
```

You could also respond to keyboard events such as specific key presses by replacing what events your `HostListener` is listening to. For example, `@HostListener('document:keydown.escape', ['$event'])` would get triggered when you press on the escape key.

Now that we have the directive build out, we can use it by adding it's selector to the element in our template like this:

```html
<div appFadeMouseDown>
  ...
</div>
```

Directives also let you pass in custom inputs so we could add some parameters from the component that uses the directives to set some configuration or toggle the state. I won't go into much detail on that since the [official documentation](https://angular.io/guide/attribute-directives#binding-to-an-input-property) has a lot of great examples on how that works.
