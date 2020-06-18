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

  loadPostMD(name: string): string {
    const route = contentRoutes.find((routes) => routes.path === name);
    return route && route.post;
  }

  async load(name: string, container: ViewContainerRef) {
    container.clear();
    const tempModule = await this.contentWidget[name]();
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
  }
}
