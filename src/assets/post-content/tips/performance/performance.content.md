Maintaining a 60 fps frame rate when you are animating is very important as anything less will result in a noticeable stutter or what is commonly referred to as jank. The key here is to be able to identify which properties are expensive to animate and which aren't and utilizing the _compositor thread_ wherever possible. We will go over some additional metrics that we should be aware of when writing our animation code in the next section.

UI have a specific drawing sequence which are as follows (top being the first and bottom being the last in the sequence):

- Styles (margin, padding, etc.)
- Layout (height, width, etc.)
- Paint (background, color, visibility, etc.)
- Composite (opacity, transforms - rotate, scale, translate, etc.)

The earlier you are in the sequence, the more expensive it is to animate since everything following it will have to be executed. Layout changes are particularly expensive if you have a lot of elements on the page as it could potentially trigger a lot of recalculation to happen. For example, if you have 10 elements on your page, animating the width/height of the first element will cause the 9 other elements to move or change size to accommodate the new width of the first element. `transforms` and `opacity` on the other hand are relatively cheap as those are on the composite step of the drawing sequence.

[Here](https://csstriggers.com/) is a comprehensive list of what each CSS property will trigger that you can refer to as you are writing your animation.

CSS Animations and Web Animations both use the compositor thread which is independent of the main UI thread. That means, even if the main thread is doing some heavy task, your animation wouldn't be affected since it's on a different thread. Angular Animations uses Web Animations APIs and CSS Animations, which means this is less of a concern. However, animation that requires paint or layout will still utilize the main thread. This, depending on how much work the main thread is going, could result in some stutter.

With that said, to have a silky smooth animation and avoid skipped/dropped frames, it is important to optimize your animations. Make sure you know the hidden implications and potential performance hit of the properties you are animating. Wherever possible, avoid animating properties that would trigger layout or paint and try to stick to composite properties (opacity, rotate, translate, and scale).

## Performance Tooling

I really like how Liam DeBeasi breaks down some of the key performance metrics that we should pay attention to when building our animations and how we can use tools in modern browsers to help us visualize these metrics for our application during his [talk](https://youtu.be/xh-B-AtsLJc?t=26396) at ionic conf 2020. These metrics includes:

- Average frames per second (FPS)
- Main thread processing
- Average CPU usage and energy impact

We can utilize a couple of different tools to ensure that our animations are optimized and are being run efficiently. Let's dive in a little deeper on each of the points above, what we should be the goal metric we want to aim for, and how we can utilize the various tools to ensure that we are meeting these goals.

### Average frames per Second

We want this to be as close as 60 FPS as possible. Anything below 60 FPS will be noticeable to the users and will result in stutter commonly known as jank.

We can see the actual frames per second during the animation's execution using Chrome devtools's performance tab. You will need to hit the record button and run your animation. Try to leave some time before and after your animation when you record to make sure that your timeline doesn't get cut prematurely before your animation has started/ended. If you click on the `Interactions` dropdown, you will see an option for `Animations`. This will show you where in the timeline that animation happens.

You can use this information to identify which section in the timeline the animation is happening and either select that section on the timeline to view the average fps over that duration or hover over the `Frames` section of that period in the timeline to get the actual frames per second data.

![Average fps over the duration of the animation (Chrome devtools)](assets/post-content/tips/performance/images/fps_chrome.png)

##### Average fps over the duration of the animation (Chrome devtools)

![Fps at a point in time during the animation (Chrome devtools)](assets/post-content/tips/performance/images/fps_segment_chrome.png)

##### Fps at a point in time during the animation (Chrome devtools)

One way to make sure our animation code is hitting the 60 FPS target is to make sure that all the animation is being optimized by the browser and a good tool to use here is Firefox's animation inspector. It shows a synchronized timeline giving us a top down view of the animations. Below is what you would see on the animations tab of the inspector when a page has a running animation.

![Animations tab showing a timeline view (Firefox devtools)](assets/post-content/tips/performance/images/timeline_firefox.png)

##### Animations tab showing a timeline view (Firefox devtools)

Some things to note here are the colors of the charts on the main timeline view. The colors indicate different type of animations/transitions:

- Green - web animations
- Orange - CSS animations
- Blue - CSS transitions

Each chart can also be clicked on to get a more detailed view on what individual properties are being animated in that animation.

You will also notice a gray thunderbolt icon on the right of the chart on the main timeline view and a green thunderbolt on the script animation view below the main timeline view. This is to indicate if the animation being run is optimized by the browser or not. The animations or the individual properties that have a thunderbolt icon as shown in the image above means that the animation or property is optimized by the browser.

What we want to do based on this data is to make sure that all (if not, most) of our animations/properties are optimized and should show up with the thunderbolt icon.

### Main thread processing

The main thread is responsible for a lot of things such as layout and paint (in terms of UI) and also evaluating javascript. We want to keep this to a minimum to free up the main thread for our application to perform other tasks that do require the main thread.

We can use Chrome and Safari's Dev tools to test this metric, each tool giving us a different but equally useful insight to this metric.

Let's start with Chrome Devtools. We can use the performance tab similar to the previous section, but instead of focusing on the frames, we will highlight the section of the timeline that has the animation and select the `main` option from the sidebar. This will show the main thread usage over this period. As you can see in the image below, Chrome devtools gives us the percentages and milliseconds of each of the processes that the main thread is running. The goal here is to keep painting and rendering to be at a minimum and the main thread to be mostly idle during the animation duration. This will make sure that our animation code doesn't interfere with other processes that are running on the main thread which could cause the animation to drop frames or stutter.

![Main thread activity information during the duration of the animation (Chrome devtools)](assets/post-content/tips/performance/images/thread_activity_chrome.png)

##### Main thread activity information during the duration of the animation (Chrome devtools)

Safari's Devtools on the other hand provides a slightly different way of looking at this where it displays the activities on the different threads that are currently running over the duration of the animation. We will need to click on `Start Timeline Recording` from the `Develop` menu or the red record button on the top left if you have the developer tools open. We can then start our animation as it is recording and stop the recording after we're done with the animation to analyze the data. This should display a timeline of what is happening during the recorded period. Click on the CPU section of where the animation is happening in the timeline to focus on the thread activities. This will show both the main thread usage over time and also a chart of the amount of activities each thread is doing over time. Similar to our data analysis from Chrome devtools, we want to keep the amount of activity that the main thread is doing related to our animation to a minimum.

![Main thread activity information during the duration of the animation (Safari devtools)](assets/post-content/tips/performance/images/thread_activity_safari.png)

##### Main thread activity information during the duration of the animation (Safari devtools)

### Average CPU usage and energy impact

Like main thread processing, we want to keep average cpu usage at a minimum as CPU usage has a direct impact on energy impact. In other words, the higher the average CPU usage, the higher the energy consumption which will result in faster draining of batteries.

We can use Safari's timeline feature to view the CPU usage and energy impact over a period of time. We will need to click on the record button on Safari's devtools and trigger the animation in order to analyze it.

If you look at the image below, you can select individual sections from the timeline to view what is happening within that time period. Clicking on the 'CPU` option on the left will display some additional details about the main thread usage and its energy impact. These are properties that we want to keep at a minimum. For energy impact, we want the needle in the energy impact dial to fall closer to the left end towards the green (low) and keep the 'Average CPU' usage at a low percentage.

Something to note here is that in a real application there could be a lot of other processes running that would affect these metrics which are unrelated to the animation code itself, so it's important to try to isolate the process which are animation specific or test the animation code independently to get an accurate measurement.

![Average CPU usage and energy impact (Safari devtools)](assets/post-content/tips/performance/images/energy_impact_safari.png)

##### Average CPU usage and energy impact (Safari devtools)

_Safari's develop menu might be hidden by default, so if you don't see a `Develop` option on your menu bar, you will have to go to `Preferences > Advanced` and check the option to `Show Develop menu in menu bar`._
