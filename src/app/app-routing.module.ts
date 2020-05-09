import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninAdminComponent } from './admin/signin/admin-signin.component';
import { SigninFunderComponent } from './funder/signin/funder-signin.component';
import { SigninSmeComponent } from './sme/signin/sme-signin.component';

const routes: Routes = [ 
  { path: 'admin/sign-in', component: SigninAdminComponent },
  { path: 'funder/sign-in', component: SigninFunderComponent },
  { path: 'sme/sign-in', component: SigninSmeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
