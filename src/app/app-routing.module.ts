import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { FundersComponent } from './funders/funders.component';
import { SmesComponent } from './smes/smes.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'Overview', component: OverviewComponent},
      { path: 'Funders', component: FundersComponent},
      { path: 'Smes', component: SmesComponent,}]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
