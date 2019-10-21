import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListingComponent } from './components/client-listing/client-listing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientListingComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ClientListingComponent]
})
export class ClientsModule { }
