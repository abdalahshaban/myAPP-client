import { Invoice } from './../models/invoice';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = `http://localhost:5001/api`
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${BASE_URL}/invoices`)
  }

  createInvoice(body: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(`${BASE_URL}/invoices`, body)
  }

  deleteInvoice(id: string): Observable<Invoice> {
    return this.http.delete<Invoice>(`${BASE_URL}/invoice/${id}`)
  }

  getInvoice(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(`${BASE_URL}/invoice/${id}`)
  }

  updateInvoice(id: string, body: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${BASE_URL}/invoice/${id}`, body)
  }
}
