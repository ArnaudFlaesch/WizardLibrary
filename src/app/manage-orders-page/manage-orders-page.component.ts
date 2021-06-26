import { Order } from '../model/Order';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-manage-orders-page',
  templateUrl: './manage-orders-page.component.html',
  styleUrls: ['./manage-orders-page.component.scss']
})
export class ManageOrdersPageComponent implements OnInit {
  public validatedOrders: Order[] = [];

  ngOnInit(): void {
    const validatedOrdersFromStorage = localStorage.getItem('validatedOrders');
    if (validatedOrdersFromStorage) {
      this.validatedOrders = plainToClass(
        Order,
        JSON.parse(validatedOrdersFromStorage)
      );
    }
  }

  public formatOrderDate(dateToFormat: Date): string {
    return format(dateToFormat, 'HH:mm dddd MMMM YYYY');
  }
}
