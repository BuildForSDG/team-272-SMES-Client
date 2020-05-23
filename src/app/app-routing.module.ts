import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/dashboard/funders/funders.component';
import { SmesComponent } from './components/dashboard/smes/smes.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewsComponent } from './news/news.component';
import { AddfunderComponent } from './components/dashboard/addfunder/addfunder.component';
import { EditfunderComponent } from './components/dashboard/editfunder/editfunder.component';
import { AddSMEComponent} from './components/dashboard/add-sme/add-sme.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },

  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'Overview', component: OverviewComponent},
      { path: 'Funders', component: FundersComponent},
      { path: 'Smes', component: SmesComponent},
      { path: 'Addfunder', component: AddfunderComponent},
      { path: 'Editfunder', component: EditfunderComponent},
      { path: 'AddSME', component: AddSMEComponent}]
    },
  { path: 'sign-in', component: SignInComponent},
  { path: 'news', component: NewsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
