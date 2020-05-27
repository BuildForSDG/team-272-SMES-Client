import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunderRoutingModule } from './funder-routing.module';
import { FunderComponent } from './funder.component';
import { FunderDetailsComponent } from './funder-details/funder-details.component';


@NgModule({
  declarations: [
  FunderComponent,
  FunderDetailsComponent],
  imports: [
    CommonModule,
    FunderRoutingModule
  ]
})
export class FunderModule { }
