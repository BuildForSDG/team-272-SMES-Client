import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule, Router} from '@angular/router';
//import { rootRouterConfig } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/dashboard/funders/funders.component';
import { SmesComponent } from './components/dashboard/smes/smes.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewsComponent } from './news/news.component';
import { AddfunderComponent } from './components/dashboard/addfunder/addfunder.component';
import { EditfunderComponent } from './components/dashboard/editfunder/editfunder.component';
import { AddSMEComponent } from './components/dashboard/add-sme/add-sme.component';
import { FunderdetailsComponent } from './components/dashboard/funderdetails/funderdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    OverviewComponent,
    FundersComponent,
    SmesComponent,
    NavbarComponent,
    SignInComponent,
    NewsComponent,
    AddfunderComponent,
    EditfunderComponent,
    AddSMEComponent,
    FunderdetailsComponent,
    
  ],

  entryComponents: [],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
