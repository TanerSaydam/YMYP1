import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideRouter(routes), importProvidersFrom([BrowserAnimationsModule])]
};
