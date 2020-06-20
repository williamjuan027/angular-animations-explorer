import { contentRoutes } from './content-routes';

export function widgetArrayToObj() {
  const result = {};
  for (const w of contentRoutes) {
    result[w.path] = w.loadChildren;
  }
  return result;
}
