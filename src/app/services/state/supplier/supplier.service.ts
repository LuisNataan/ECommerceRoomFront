import { Supplier } from './../../../interfaces/supplier.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private httpClient: HttpClient,
    private route: Router
  ) { }

  public register(supplier: Supplier): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json'
      };
      this.httpClient.post("https://localhost:7090/Supplier/Create", supplier, { headers }).subscribe(
        (response: any) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          reject(error.error);
        }
      )
    }
    )
  }
}
