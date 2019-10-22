import { Invoice } from './../../models/invoice';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice
  invoicForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private invoicSer: InvoiceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
    this.setInvoiceToForm()
  }

  initForm() {
    this.invoicForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      rate: [''],
      tax: ['']

    })
  }

  onSubmit() {
    //user want to edit 
    if (this.invoice) {
      this.invoicSer.updateInvoice(this.invoice._id, this.invoicForm.value).subscribe(data => {
        this.snackBar.open('Invoice Updated', 'Success', {
          duration: 2000
        })
        this.invoicForm.reset()
        this.router.navigate(['../'], { relativeTo: this.route })

      }, err => {
        this.errorHandler(err, 'Failed To Updated Invoice')
      })
    }
    else {
      this.invoicSer.createInvoice(this.invoicForm.value).subscribe(data => {
        this.snackBar.open('Invoice Created', 'Success', {
          duration: 2000
        })
        this.invoicForm.reset()
        this.router.navigate(['../'], { relativeTo: this.route })

        console.log(data);
      }, err => {
        console.log(err);
        this.errorHandler(err, 'Failed To Save Invoice')
      })
    }

  }

  errorHandler(error, message) {
    this.snackBar.open(message, 'Error', {
      duration: 2000
    })
  }

  setInvoiceToForm() {
    //get id of invoice
    this.route.params.subscribe(params => {
      let id = params['id']
      if (!id) {
        return
      }
      this.invoicSer.getInvoice(id).subscribe(data => {
        this.invoice = data
        this.invoicForm.patchValue(this.invoice)
      }, err => {
        this.errorHandler(err, 'Failed To Get Invoice')
      })


    })
  }

}
