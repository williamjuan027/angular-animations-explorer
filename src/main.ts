import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';
import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers:[
    provideHttpClient(),
    provideAnimations(),
    provideRouter(ROUTES),
    provideMarkdown({
      loader: HttpClient
    })
  ]
});