import { InjectionToken } from '@angular/core';

export const CONTENT_WIDGETS = new InjectionToken<{ [key: string]: string }>(
  'CONTENT_WIDGETS'
);
