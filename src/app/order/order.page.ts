import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../ShopService/shop-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orders
  eryTot
  constructor(public shopServices:ShopServiceService) 
  {
           this.orders=shopServices.getOrders()
           this.eryTot=shopServices.getTotal()
           console.log(this.eryTot)
   }
   placeOrder(sugars,milk,currentNumber,tempTot)
   {
        this.shopServices.placeOrder(sugars,milk,currentNumber,tempTot)

   }
   checkout()
   {
     this.shopServices.checkout()
    
   }
  ngOnInit() {
  }

}
