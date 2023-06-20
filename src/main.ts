import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';
import { MarkdownModule } from 'ngx-markdown';
import { provideLazyLoadedAnimations } from '@angular/platform-browser/lazy-animations';

bootstrapApplication(AppComponent, {
  providers:[
    provideLazyLoadedAnimations(),
    importProvidersFrom(
      RouterModule.forRoot(ROUTES),
      HttpClientModule,
      // BrowserAnimationsModule,
      MarkdownModule.forRoot(),
    ),
  ]
});