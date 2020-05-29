import { NavbarComponent } from './../../shared/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SmesDashboardComponent } from './smes-dashboard.component';
import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';
import { SideNavTogglerComponent } from 'src/app/shared/components/side-nav-toggler/side-nav-toggler.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SmesDashboardComponent }
    ])
  ],
  declarations: [
    SmesDashboardComponent,
    NavbarComponent,
    SideNavComponent,
    SideNavTogglerComponent
  ]
})
export class SmesDashboardModule { }
