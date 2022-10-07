import { Customer } from '../../../interfaces/customer.model';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient,
    private route: Router
  ) { }

  public register(customer: Customer): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json'
      };
      this.httpClient.post("https://localhost:7090/Customer/Create", customer, { headers }).subscribe(
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
