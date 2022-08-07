import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PageModule} from "./pages/page.module";
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PageModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          // {
          //   id: GoogleLoginProvider.PROVIDER_ID,
          //   provider: new GoogleLoginProvider(
          //     'clientId'
          //   )
          // },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1432103473956063')
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
