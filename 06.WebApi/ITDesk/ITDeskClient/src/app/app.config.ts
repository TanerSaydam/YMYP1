import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideHttpClient(),
    provideRouter(routes), 
    importProvidersFrom(
      [
        BrowserAnimationsModule, 
        SocialLoginModule
      ]),
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '572541068615-o1mq58varv0pgbt67vmp8f4asa2euv1m.apps.googleusercontent.com'
              )
            }
          ],
          onError: (err:HttpErrorResponse) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      }    
    ]
};
