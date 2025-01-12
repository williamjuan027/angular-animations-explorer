Both Chrome and Firefox's devtools come with some powerful animation debugging tools which are really handy to use as we build out animations. These tools let you slow down, replay and inspect the source code for your animation. Both browsers' devtools also lets you modify some of the animation properties on the fly and replay your animation with the modified properties.

## Chrome

Chrome has 2 main features that in my opinion are very helpful when it comes to debugging your animation code. I usually always find myself doing some fine tuning of the animations through the devtools and copying that code over to my code editor.

### Animation Inspector

Before we dive into how to use the Chrome's animation inspector, let me show you where you can find this amazing tool. Chrome has the animation inspector option under the more tools submenu option.

![Where to find Chrome's Animation Inspector](assets/post-content/tips/debugging/images/animation_menu_chrome.png)

##### Where to find Chrome's Animation Inspector

_At the time this post is written, Chrome only supports CSS animations, CSS transitions, and web animations. You wouldn't be able to use this if you are using `requestAnimationFrame` for your animation._

If you have the animations tab open on your devtools, you should be seeing blocks of animation groups added to the top as your animation gets triggered on your application. Clicking on the block will open up a more detailed view of what the actual animations that are being executed as shown in the image below.

Let's break down the animations tab view further and discuss some of the key features

- Controls - lets you play, pause and modify the speed of the animation
- Animation groups - shows the different group of animations that were executed. The animation inspector groups the animations based on start time (excluding delays) predicting which animations are related to each other. From a code perspective, animations that are triggered in the same script block are grouped together.
- Scrubber - you can drag the red vertical bar left and right to display the state of the animation at that time in the timeline
- Timeline - shows a breakdown of the elements in the DOM that are being animated in the animation group and the timeline for each element's animation
- 2 solid circles - these 2 circles mark the beginning and end of the animation. It's possible to see multiple instances of these for cases where the animation runs for multiple iterations, where these solid circles will mark the start and end of each iteration
- Highlighted section - the animation duration
- Hollow circle - timing of keyframe rules if the animation defines any (see 2nd to 5th element in the image below)

All the components in the timeline for each element can be modified by dragging them horizontally. We can modify the duration by moving the start and end solid circles, add delays by moving the highlighted section and modify keyframe timings by moving the hollow circle. We can then view the updated animation changes by clicking on the replay button to rerun the animation group.

![Animations inspector (Chrome devtools)](assets/post-content/tips/debugging/images/animation_inspector_chrome.png)

##### Animations inspector (Chrome devtools)

## Bezier Curve Editor

If you are using CSS keyframes in your animation (this is covered in the later sections of the post), Chrome devtools also has a tool to edit the curves of your animation dynamically using Lea Verou's [cubic bezier](cubic-bezier.com) visualization.

This is extremely helpful as you no longer have to go back and forth between your editor and your browser to tweak the bezier curves to get the right timing, you can do it all in your browser. Use the replay button on the animations tab to replay the animation with the updated bezier curve. Access this feature by clicking on the squiggly line icon on the animation property of your element. Below is an image of how to access the bezier curve from your animation.

![Bezier curve editor for keyframe animations (Chrome devtools)](assets/post-content/tips/debugging/images/bezier_chrome.png)

##### Bezier curve editor for keyframe animations (Chrome devtools)

The purple circles attached to the purple lines on the bezier curve editor are draggable vertically and horizontally to edit the curve of the line which in turn will update the `cubic-bezier` function. You can see a quick visualization of what the timing function looks like from the purple circle towards the top of the popup, showing how the animation will accelerate/decelerate over time.

## Firefox

Firefox's devtools has almost identical functionality as chrome's devtools in terms of its animation inspector and bezier curve editor. I won't go in detail on how each of these works since it is more or less covered in the previous section, however, I will add a couple of screenshots of how these look on Firefox's devtools so you get an idea of what to expect when using Firefox to debug your animations.

![Animation inspector (Firefox devtools)](assets/post-content/tips/debugging/images/animation_inspector_firefox.png)

##### Animation inspector (Firefox devtools)

![Bezier curve editor for keyframe animations (Firefox devtools)](assets/post-content/tips/debugging/images/bezier_firefox.png)

##### Bezier curve editor for keyframe animations (Firefox devtools)
