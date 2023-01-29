import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {HomePageComponent} from './home-page/home-page.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PageRoutingModule} from "./page-routing.module";
import { LinkOpenerPageComponent } from './link-opener-page/link-opener-page.component';
import { GroupLinkModificationPageComponent } from './group-link-modification-page/group-link-modification-page.component';
import { PlacementFormatterPageComponent } from './placement-formatter-page/placement-formatter-page.component';
import { PageComponent } from './page.component';
import {FormsModule} from "@angular/forms";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatRippleModule} from "@angular/material/core";
import { AudienceNetworkReportReaderComponent } from './audience-network-report-reader/audience-network-report-reader.component';
import { LinkDuplicateRemoverPageComponent } from './link-duplicate-remover-page/link-duplicate-remover-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LinkOpenerPageComponent,
    GroupLinkModificationPageComponent,
    PlacementFormatterPageComponent,
    PageComponent,
    AudienceNetworkReportReaderComponent,
    LinkDuplicateRemoverPageComponent,
  ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        CommonModule,
        RouterModule,
        PageRoutingModule,
        FormsModule,
        ClipboardModule,
        MatRippleModule,
    ],
  providers: [],
  bootstrap: []
})
export class PageModule {
}
