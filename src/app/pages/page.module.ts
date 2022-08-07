import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: []
})
export class PageModule {
}
