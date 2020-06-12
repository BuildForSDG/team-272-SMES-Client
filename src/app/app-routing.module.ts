import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/dashboard/funders/funders.component';
import { SmesComponent } from './components/dashboard/smes/smes.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NewsComponent } from './news/news.component';
import { AddfunderComponent } from './components/dashboard/addfunder/addfunder.component';
import { EditfunderComponent } from './components/dashboard/editfunder/editfunder.component';
import { AddSMEComponent} from './components/dashboard/add-sme/add-sme.component';
import { FunderdetailsComponent } from './components/dashboard/funderdetails/funderdetails.component';
import { UserModule } from './components/user/user.module';
import { SmesDashboardComponent } from './components/smes-dashboard/smes-dashboard.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import {SmesDashboardModule} from './components/smes-dashboard/smes-dashboard.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'smes-dashboard',
    loadChildren: () => SmesDashboardModule,
    canActivate: [AuthGuard]
  },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'funder', loadChildren: () => import('./components/funder/funder.module').then(mod => mod.FunderModule)},
  { path: 'dashboard', component: DashboardComponent,
    children: [

      { path: 'Overview', component: OverviewComponent},
      { path: 'Funders', component: FundersComponent},
      { path: 'Smes', component: SmesComponent},
      { path: 'Addfunder', component: AddfunderComponent},
      { path: 'Editfunder/:id', component: EditfunderComponent},
      { path: 'AddSME', component: AddSMEComponent},
      { path: 'Funderdetails', component: FunderdetailsComponent }]
    },
  { path: 'sign-in', component: SignInComponent},
  { path: '**', redirectTo: '/' },
  { path: 'news', component: NewsComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'})],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
