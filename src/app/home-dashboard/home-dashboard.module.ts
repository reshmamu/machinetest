import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,FormsModule
  ]
})
export class HomeDashboardModule { }
