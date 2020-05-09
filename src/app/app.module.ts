import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninAdminComponent } from './admin/signin/admin-signin.component';
import { SigninFunderComponent } from './funder/signin/funder-signin.component';
import { SigninSmeComponent } from './sme/signin/sme-signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninAdminComponent,
    SigninFunderComponent,
    SigninSmeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
