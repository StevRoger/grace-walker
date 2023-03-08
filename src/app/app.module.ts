import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig, SocialLoginModule,
} from "angularx-social-login";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    MatSnackBarModule,
    MatDialogModule,
    CommonModule,
    RouterModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  /** Secret app: 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 */
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '328001884889-1q1e6v6facjbln6smvojgrnaclu6cjeh.apps.googleusercontent.com'
            ),
            scope: 'email',
            plugin_name: 'Seagate Web'
          },
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
