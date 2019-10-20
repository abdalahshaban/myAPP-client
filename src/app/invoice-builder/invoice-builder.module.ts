import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { InvoiceBuliderComponent } from './invoice-bulider.component';


@NgModule({
  declarations: [InvoiceBuliderComponent],
  imports: [
    CommonModule,
    InvoiceBuilderRoutingModule
  ]
})
export class InvoiceBuilderModule { }
