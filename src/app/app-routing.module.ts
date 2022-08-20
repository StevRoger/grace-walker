import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PageComponent} from "./pages/page.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: 'welcome', component: LandingPageComponent
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: '',
    component: PageComponent,
    loadChildren: () => import('./pages/page.module').then(m => m.PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
