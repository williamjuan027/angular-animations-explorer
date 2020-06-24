import { IContentRoutes } from './content-routes.interface';
import { basicRoutes } from './basic/basic-routes';
import { advancedRoutes } from './advanced/advanced-routes';

// TODO: break down by categories, and depending on the type of page, use different layout

export const contentRoutes: IContentRoutes[] = [basicRoutes, advancedRoutes];
