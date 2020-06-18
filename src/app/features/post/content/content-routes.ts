import { NgModuleFactory, Type } from '@angular/core';

export const contentRoutes: {
  path: string;
  loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>;
  post: string;
}[] = [
  {
    path: 'state-change',
    loadChildren: () =>
      import('./state-change/state-change.demo.module').then(
        (m) => m.StateChangeDemoModule
      ),
    post: 'assets/post-content/state-change/state-change.content.md',
  },
];
