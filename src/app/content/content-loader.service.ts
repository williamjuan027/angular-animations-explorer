import {
  Injectable,
  Injector,
  Compiler,
  Inject,
  NgModuleFactory,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { CONTENT_WIDGETS } from './content-tokens';
import { contentRoutes } from './content-routes';
import { IContentCategoryRoutes } from './content-routes.interface';
@Injectable({
  providedIn: 'root',
})
export class ContentLoaderService {
  constructor(
    private injector: Injector,
    private compiler: Compiler,
    @Inject(CONTENT_WIDGETS)
    private contentWidget: {
      [key: string]: () => Promise<NgModuleFactory<any> | Type<any>>;
    }
  ) {}

  getPostInfo(category: string, post: string): IContentCategoryRoutes {
    try {
      const route = contentRoutes
        .find((contentCategory) => contentCategory.path === category)
        .routes.find((categoryPost) => categoryPost.path === post);
      return route;
    } catch (e) {}
  }

  async load(category: string, post: string, container: ViewContainerRef) {
    try {
      container.clear();
      const tempModule = await this.contentWidget[`${category}/${post}`]();
      let moduleFactory;

      if (tempModule instanceof NgModuleFactory) {
        // For AOT
        moduleFactory = tempModule;
      } else {
        // For JIT
        moduleFactory = await this.compiler.compileModuleAsync(tempModule);
      }
      const entryComponent = (moduleFactory.moduleType as any).entry;
      const moduleRef = moduleFactory.create(this.injector);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
        entryComponent
      );
      container.createComponent(compFactory);
    } catch (e) {}
  }
}
