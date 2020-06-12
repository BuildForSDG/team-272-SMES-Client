import { HomePageComponent } from './components/home-page/home-page.component';
import { TokenInterceptor, ErrorInterceptor } from './services/token.interceptor';
import { SideNavService } from './shared/services/side-nav.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule, Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { rootRouterConfig } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { FundersComponent } from './components/dashboard/funders/funders.component';
import { SmesComponent } from './components/dashboard/smes/smes.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NewsComponent } from './news/news.component';
import { AddfunderComponent } from './components/dashboard/addfunder/addfunder.component';
import { EditfunderComponent } from './components/dashboard/editfunder/editfunder.component';
import { AddSMEComponent } from './components/dashboard/add-sme/add-sme.component';
import { FunderdetailsComponent } from './components/dashboard/funderdetails/funderdetails.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavTogglerComponent } from './shared/components/side-nav-toggler/side-nav-toggler.component';
import { SmesDashboardComponent } from './components/smes-dashboard/smes-dashboard.component';

import { StoreModule } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { authReducers } from './store/state/user.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    OverviewComponent,
    SmesComponent,
    NavbarComponent,
    SignInComponent,
    NewsComponent,
    AddfunderComponent,
    EditfunderComponent,
    AddSMEComponent,
    FunderdetailsComponent,
    FooterComponent,
    SignInComponent,
  ],

  entryComponents: [],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot(authReducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],

  providers: [
    AuthService, SideNavService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
     provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
