import { Component, OnInit } from '@angular/core';

import { Order } from './order'
import { OrderService } from './order.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [OrderService]
})
export class AppComponent implements OnInit {
    constructor(private orderService: OrderService) { }
    ngOnInit(): void {
        this.getOrders();
    }
    orders: Order[];
    getOrders(): void {
        this.orderService.getOrders().then(orders => this.orders = orders);
    }
}