import { Injectable, ViewContainerRef } from '@angular/core';
import { BasicContent, TipsContent, AngularAnimationsContent, ThirdPartyLibsContent } from '../content';
import { Content } from '../models';

  @Injectable({
    providedIn: 'root',
  })
  export class ContentLoaderService {
  
    getPostInfo(category: string, post: string): Content | undefined {
      try {
        switch(category) {
            case 'basic': {
                return  Object.values(BasicContent.content).find((basicPost) => basicPost.path === `post/${category}/${post}`);
            }
            case 'angular-animations': {
              return  Object.values(AngularAnimationsContent.content).find((angularAnimationsPost) => angularAnimationsPost.path === `post/${category}/${post}`);
            }
            case 'third-party-libs': {
              return  Object.values(ThirdPartyLibsContent.content).find((thirdPartyLibsPost) => thirdPartyLibsPost.path === `post/${category}/${post}`);
            }
            case 'tips': {
              return  Object.values(TipsContent.content).find((tipsPost) => tipsPost.path === `post/${category}/${post}`);
            }
            default: {
                return undefined;
            }
        }
      } catch (e) {
        return undefined;
      }
    }

    loadDemoComponent(content: Content, container: ViewContainerRef) {
        try {
            container.clear();
            if (content.demoComponent != null) {
                setTimeout(() => {
                    container.createComponent(content.demoComponent);
                })
            }
        } catch(e) {
            console.log('Error loading demo component', e);
        }
    }
  }
  