import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from '@angular/material/tooltip';
import {SocialLoginModule} from "angularx-social-login";
import {MatDialogModule} from '@angular/material/dialog';
import {HomePageComponent} from './home-page/home-page.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    LandingPageComponent,
    HomePageComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SocialLoginModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: []
})
export class PageModule {
}