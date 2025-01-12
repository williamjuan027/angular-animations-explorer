If you aren't testing the animations itself, instead of using the `BrowserAnimationModule` which will run your animations like the real application (which might not be useful for the unit tests and might even slow down the execution of your test cases), you could import and use Angular's `NoopAnimationsModule` instead. As the name suggests, noop (no-operation) is a utility module which mocks the real animation but doesn't actually animate it.

```typescript
@NgModule({
    imports: [
        // BrowserAnimationsModule // when running the main application
        NoopAnimationsModule // when running tests
    ]
})
```
