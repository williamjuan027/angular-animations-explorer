import { NgModuleFactory, Type } from '@angular/core';

export const contentRoutes: {
  title: string;
  description: string;
  tags?: string[];
  path: string;
  loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>;
  post: string;
}[] = [
  {
    title: 'State Change',
    description: '',
    tags: ['basic', 'angular animations'],
    path: 'state-change',
    loadChildren: () =>
      import('@content/state-change/state-change.demo.module').then(
        (m) => m.StateChangeDemoModule
      ),
    post: 'assets/post-content/state-change/state-change.content.md',
  },
  {
    title: 'Enter Exit',
    description: '',
    tags: ['basic', 'angular animations'],
    path: 'enter-exit',
    loadChildren: () =>
      import('@content/enter-exit/enter-exit.demo.module').then(
        (m) => m.EnterExitDemoModule
      ),
    post: 'assets/post-content/enter-exit/enter-exit.content.md',
  },
  {
    title: 'Sequence',
    description: '',
    tags: ['advanced', 'angular animations'],
    path: 'sequence',
    loadChildren: () =>
      import('@content/sequence/sequence.demo.module').then(
        (m) => m.SequenceDemoModule
      ),
    post: 'assets/post-content/sequence/sequence.content.md',
  },
];
