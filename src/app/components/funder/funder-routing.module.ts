import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunderComponent } from './funder.component';
import { FunderDetailsComponent } from './funder-details/funder-details.component';



const funderRoutes: Routes = [
{ path: '', component: FunderComponent,
children: [{ path: 'profile', component: FunderDetailsComponent}]
}
]


@NgModule({
  imports: [RouterModule.forChild(funderRoutes)],
  exports: [RouterModule]
})
export class FunderRoutingModule { }
