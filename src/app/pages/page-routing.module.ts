import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinkOpenerPageComponent} from "./link-opener-page/link-opener-page.component";
import {
  GroupLinkModificationPageComponent
} from "./group-link-modification-page/group-link-modification-page.component";
import {PlacementFormatterPageComponent} from "./placement-formatter-page/placement-formatter-page.component";
import {
  AudienceNetworkReportReaderComponent
} from "./audience-network-report-reader/audience-network-report-reader.component";

const routes: Routes = [
  {
    path: 'link-opener', component: LinkOpenerPageComponent
  },
  {
    path: 'group-link-modification', component: GroupLinkModificationPageComponent
  },
  {
    path: 'placement-formatter', component: PlacementFormatterPageComponent
  },
  {
    path: 'audience-network-report-reader', component: AudienceNetworkReportReaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
