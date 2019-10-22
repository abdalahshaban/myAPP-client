import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
