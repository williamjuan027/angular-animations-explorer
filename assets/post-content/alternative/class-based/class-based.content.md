Since angular runs on browsers and utilizes html and css, we can leverage css animations in our angular application which works the exact same way as how it works in a vanilla html css application. You would add a class to an element based on a certain condition which will then trigger an animation using css either through css transitions or keyframes.

The css code for both cases will be identical and could be something as simple as the following for css transform:

```css
#targetElement {
  transition: all 0.5s;
}

#targetElement.shrink {
  transform: scale(0.8);
}
```

and the following for css keyframes:

```css
#targetElement.shrink {
  animation: shrink 1s;
}

@keyframes shrink {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
```

The main difference here is how you can easily add and remove classes using angular. For example, let's say we want to add a class called 'shrink' when the `isSelected` boolean is `true`, in javascript, it would look something like this

```javascript
var element = document.getElementById('targetElement');
if (isSelected) {
  element.classList.add('shrink'); // to add a class
} else {
  element.classList.remove('shrink'); // to remove a class
}
```

This can be handled directly in the template using angular by attaching a condition to the class, below is a sample of how it would look in an angular template:

```markup
<div [class.shrink]="isSelected"></div>
```

The nice thing about this approach is that you would be able to utilize any css animation library that works based on adding and removing classes such as [animate.css](https://daneden.github.io/animate.css/) or [magic.css](https://www.minimamente.com/project/magic/). Chris Coyier has an amazing [article](https://css-tricks.com/css-animation-libraries/) that lists some of the popular ones if you are interested.
