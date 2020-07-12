This is basically the same as the class based animation with the exception that the animation code itself is written in the template instead of as part of a class in the css file. This is particularly useful if you have some parts of the animation code that needs to be dynamic in a way where certain transformation value needs to be calculated based on some pre determined external factor. An example of this would be if we want to add a `scale` with a different value depending on the element's index. We can do this by binding the transform with a function which returns a string which contains the calculated value.

```html
<div
  [style.transition]="'0.5s'"
  [style.transform]="isScaledDown ? getScaleDown(index) : getResetScale()"
></div>
```

```typescript
isScaledDown = false;
getScaleDown(index: number): string {
    return `scale(${1 - (index + 1) / 10})`;
}

getResetScale(): string {
    return 'scale(1)';
}
```
