# Angular Animations Explorer

> A resource to showcase the different animations that you could do with Angular

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=for-the-badge)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![social](https://img.shields.io/twitter/follow/williamjuan27?color=%23249FEC&label=follow%20me&logo=twitter&style=for-the-badge)](https://twitter.com/williamjuan27)

Animations can be both fun and frustrating to build, and I came to realize that there are a lot of different ways to choose from when it comes to implementing an animation. This makes building out animations really flexible, but at the same time could also be overwhelming given the number of options.

This project is a demo for "In-Depth guide into animations in Angular" on indepth.dev, with the goal of providing a live version of all the methods covered in the article that you could explore and play around with.

Check out the site here: http://williamjuan027.github.io/angular-animations-explorer/

_This is not meant to be as comprehensive or a replacement for documentation, but rather a quick way to showcase the different animation methods that are available, look at their behavior and some use cases, and the code behind the implementation._

**Enjoy :)**

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:4200
npm run start

# build for production
npm run build
```

## Folder Structure

There are 2 main folders that contains the bulk of the content in the application.

- **Content**: All the content you see on the application are written in markdown located in [`src/assets/post-content/`](src/assets/post-content) in their respective folders.
- **Demo**: For posts that contains a demo component, these components are located in [`src/app/content/`](src/app/content/) as separate modules in their respective folders.

## Attributions

Special thanks to the following projects:

- Illustrations from [undraw.co](https://undraw.co)
- Layouts using [Flex Layout](https://github.com/angular/flex-layout)
- Basic components from [Angular Material](https://material.angular.io/)
- Markdown parser from [ngx-markdown](https://github.com/jfcere/ngx-markdown)
