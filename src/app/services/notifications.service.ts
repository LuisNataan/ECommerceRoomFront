import { retriveMessage } from './state/message/message.actions';
import { Supplier } from './../interfaces/supplier.model';
import { getCustomers, getSuppliers } from './state/service.actions';
import { Customer } from './../interfaces/customer.model';
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';


const url = 'https://localhost:7090/notifications';


@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  private hubConnection!: HubConnection;

  constructor(
    private store: Store
  ) { }

  createHubConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(url).build();
  }


  startHubConnection(): Promise<void> {
    return this.hubConnection.start()
      .then(() => console.log("HubConnection started"))
      .catch((error) => console.log(error.message));
  }

  getCustomerNotification() {
    this.hubConnection.on("SendNotification", (customers: readonly Customer[]) => {
      this.store.dispatch(getCustomers({ customers }))
    });
  }

  getSupplierNotification() {
    this.hubConnection.on("SendNotification", (suppliers: readonly Supplier[]) => {
      this.store.dispatch(getSuppliers({ suppliers }))
    });
  }

  getMessage() {
    this.hubConnection.on("NotificationMessage", (message: string) => {
      this.store.dispatch(retriveMessage({ message }))
    });
  }

}
