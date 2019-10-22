import { MatSnackBar, throwToolbarMixedModesError } from '@angular/material';
import { Invoice } from './../../models/invoice';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  constructor
    (
      private invoiceSer: InvoiceService,
      private router: Router,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar
    ) { }

  displayedColumns = ['item', 'date', 'due', 'qty', 'rate', 'tax', 'action']
  dataSource: Invoice[] = []

  ngOnInit() {
    this.getAllInvoices()
  }

  getAllInvoices() {
    this.invoiceSer.getInvoices().subscribe(data => {
      console.log(data)
      this.dataSource = data
    }, err => {
      console.log(err)
    })
  }

  deleteBtn(id) {
    this.invoiceSer.deleteInvoice(id).subscribe(data => {
      console.log(data)
      this.snackBar.open('Invoice Deleted', 'Success', {
        duration: 2000
      })
      this.getAllInvoices()

    }, err => {
      this.errorHandler(err, 'Failed TO Delete This Item')
    })
  }

  saveBtn() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  editBtn(id) {
    this.router.navigate([id], { relativeTo: this.route })
  }

  errorHandler(error, message) {
    this.snackBar.open(message, 'Error', {
      duration: 2000
    })
  }

}
