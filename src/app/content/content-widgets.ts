import { contentRoutes } from './content-routes';

export function widgetArrayToObj() {
  const result = {};
  for (const category of contentRoutes) {
    for (const post of category.routes) {
      result[`${category.path}/${post.path}`] = post.loadChildren;
    }
  }
  return result;
}
