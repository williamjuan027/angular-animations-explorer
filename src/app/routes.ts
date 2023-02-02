import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {path: '', pathMatch: 'full', loadComponent: () => import('./features/home/home.component').then(mod => mod.HomeComponent)},
  {path: 'home', loadComponent: () => import('./features/home/home.component').then(mod => mod.HomeComponent)},
  {path: 'post/:category/:postName', loadComponent: () => import('./features/post/post.component').then(mod => mod.PostComponent)},
  {path: '**', redirectTo: ''}
];