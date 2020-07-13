> _No specific demo for this, but if you haven't noticed, there are some route animations that are applied as you navigate from the home page to any of the posts and vice versa._

Route animations refers to the animations that are applied to view transitions during a route change. As per the [Angular docs](https://angular.io/guide/route-animations), this is done by defining a nested animation sequence in the top-level component that hosts the view and the components that host the embedded views. This could also be applied to nested `router-outlet`s in your application, the animation trigger just needs to be applied to the `div` that wraps the `router-outlet`

To demonstrate this, we will first need to wrap the `router-outlet` inside a `div` which will contain the trigger for the animation and add an attribute directive in the `router-outlet` that contains data about active routes and their states which is then used to assign an animation state value to the animation trigger based on the route configuration.

```html
<div @routeAnimations>
  <router-outlet></router-outlet>
</div>
```

```html
<div [@routeAnimation]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</div>
```

We will then need to pass the outlet’s current state to our `routeAnimations` using the `router-outlet`’s `activatedRoute` property. This property will get updated every time a navigation occurs which in turn will trigger our animation. We will use a helper function `prepareRoute` to do the necessary checks and return the value required by the `routeAnimation` trigger.

```ts
prepareRoute(outlet: RouterOutlet) {
  return outlet.isActivated ? outlet.activatedRoute : '';
}
```

When an animation is triggered, we will have access to the previous page through the `:leave` selector and the current page through the `:enter` selector. We can use these the same way as we would when we animate individual elements. With that said, you would also be able to apply the different sequences as described [here](link to animation sequence section) to your animation. Below is an example of what a fade in and fade out route animation definition would look like.

```ts
const resetRoute = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
        top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ],
    { optional: true }
  ),
];
```

```ts
trigger('routeFadeAnimation', [
  transition('* => *', [
    ...resetRoute,
    query(':enter', [style({ opacity: 0 })], {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);
```

The `query` here is executed in the order of the array (looking at the code above, it will be executed from top down). The first `resetRoute` gets executed first which will hide and set some properties to both the previous and current view to allow them to overlap as both the views will be present in the DOM at the same time (the view that is being navigated to appears immediately instead of appearing after the view being navigated from has disappeared) preventing them from stacking up and breaking the layout. This is then followed by the actual animations for the entering view and the exiting view. There is no difference in writing animation code for route animation and animation that targets regular html elements or angular components which means we could use all of the animation properties that we would normally use on an element and apply to our route animation as we see fit.

## Variable Route Animations

We can also pass in additional parameters through the router’s `data` property if we need variable animations. A common use case for this is if we want to trigger different enter and exit animations for different routes.

```ts
{
  path: 'home',
  component: HomeComponent,
  data: { animation: 'home' },
},
{
  path: 'post',
  component: PostComponent,
  data: { animation: 'post' },
  }
```

In order to get the additional parameter and use it in our animation, we will have to modify the `prepareRoute` function to return the additional parameter. So instead of returning the router’s state, we will use the `activatedRouteData` property to access the `data` object and select the `animation` property.

```ts
prepareRoute(outlet: RouterOutlet) {
  return (
    outlet &&
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation']
  );
}
```

We can then use the additional parameter in our animations array, treating them as different states that we can transition to and from like so:

```ts
trigger('routeAnimation', [
  transition('home => post', []),
  transition('post => home', []),
]);
```
