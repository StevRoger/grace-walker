import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinkOpenerPageComponent} from "./link-opener-page/link-opener-page.component";
import {
  GroupLinkModificationPageComponent
} from "./group-link-modification-page/group-link-modification-page.component";
import {PlacementFormatterPageComponent} from "./placement-formatter-page/placement-formatter-page.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
