import { Order } from './../model/Order';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {
  public validatedOrders: Order[] = [];

  ngOnInit(): void {
    const validatedOrdersFromStorage = localStorage.getItem('validatedOrders');
    if (validatedOrdersFromStorage) {
      this.validatedOrders = JSON.parse(validatedOrdersFromStorage);
    }
  }

  public formatOrderDate(dateToFormat: Date): string {
    return format(dateToFormat, 'HH:mm dddd MMMM YYYY');
  }
}
