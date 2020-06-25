import { NgModuleFactory, Type } from '@angular/core';

export interface IContentRoutes {
  name: string;
  path: string;
  routes: IContentCategoryRoutes[];
}

export interface IContentCategoryRoutes {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  path: string;
  loadChildren?: () => Promise<NgModuleFactory<any> | Type<any>>;
  post: string;
  // categories: 'basic' | 'advanced' | 'concepts' | 'tips';
  pageType: EPageType;
}

export enum EPageType {
  ContentOnly,
  ContentWithDemo,
}
