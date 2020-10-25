import { IContentRoutes } from './content-routes.interface';
import { basicRoutes } from './basic/basic-routes';
import { advancedRoutes } from './advanced/advanced-routes';
import { alternativeRoutes } from './alternative/alternative-routes';
import { tipsRoutes } from './tips/tips-routes';
import { integrationsRoutes } from './integrations/integrations-routes';

// TODO: break down by categories, and depending on the type of page, use different layout

export const contentRoutes: IContentRoutes[] = [
  basicRoutes,
  advancedRoutes,
  alternativeRoutes,
  tipsRoutes,
  integrationsRoutes,
];
