import { NgModuleFactory, Type } from '@angular/core';

export interface IContentRoutes {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  path: string;
  loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>;
  post: string;
  categories: 'basic' | 'advanced';
}

export const contentRoutes: IContentRoutes[] = [
  {
    title: 'State Change',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
    tags: ['basic', 'angular animations'],
    path: 'state-change',
    loadChildren: () =>
      import('@content/state-change/state-change.demo.module').then(
        (m) => m.StateChangeDemoModule
      ),
    post: 'assets/post-content/state-change/state-change.content.md',
    categories: 'basic',
  },
  {
    title: 'Enter Exit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
    tags: ['basic', 'angular animations'],
    path: 'enter-exit',
    loadChildren: () =>
      import('@content/enter-exit/enter-exit.demo.module').then(
        (m) => m.EnterExitDemoModule
      ),
    post: 'assets/post-content/enter-exit/enter-exit.content.md',
    categories: 'basic',
  },
  {
    title: 'Sequence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9',
    tags: ['advanced', 'angular animations'],
    path: 'sequence',
    loadChildren: () =>
      import('@content/sequence/sequence.demo.module').then(
        (m) => m.SequenceDemoModule
      ),
    post: 'assets/post-content/sequence/sequence.content.md',
    categories: 'advanced',
  },
];
