import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../ShopService/shop-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orders
  constructor(public shopServices:ShopServiceService) 
  {
           this.orders=shopServices.getOrders()

   }
   placeOrder(sugar,milk,currentNumber)
   {
        this.shopServices.placeOrder(sugar,milk,currentNumber)

   }

  ngOnInit() {
  }

}
