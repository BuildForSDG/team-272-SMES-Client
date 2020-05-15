import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/funders/funders.component';
import { SmesComponent } from './components/smes/smes.component';
import { JQ_TOKEN } from './shared/jQuery.service';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    OverviewComponent,
    FundersComponent,
    SmesComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  providers: [{ provide: JQ_TOKEN, useValue: jQuery }],
  bootstrap: [AppComponent]
})

export class AppModule { }
