import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/funders/funders.component';
import { SmesComponent } from './components/smes/smes.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SideNavTogglerComponent } from './shared/components/side-nav-toggler/side-nav-toggler.component';
import { SmesDashboardComponent } from './components/smes-dashboard/smes-dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SideNavService } from './shared/services/side-nav.service';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    OverviewComponent,
    SmesComponent,
    FooterComponent,
    SignInComponent,
    SideNavTogglerComponent,
    SmesDashboardComponent,
    NavbarComponent,
    SideNavComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],

  providers: [SideNavService],
  bootstrap: [AppComponent]
})

export class AppModule { }
