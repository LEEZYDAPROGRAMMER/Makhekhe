import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../ShopService/shop-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {
 currentNumber=1;
 seletedItem
  sugars
 milk
  constructor(public shopServices:ShopServiceService) 
  { 

    this.seletedItem=this.shopServices.getSelected();
  }
  
  increment() 
  {
    this.currentNumber++;
  }
  
   decrement() 
  {
    if(this.currentNumber>1)
    {
    this.currentNumber--;
    }
  }
  placeOrder(sugar,milk,currentNumber)
  {
      this.shopServices.placeOrder(sugar,milk,currentNumber)
  
  }

//
getSugar(event)
{

  this.sugars=event.detail.value
}

//
getMilk(event)
{

  this.milk=event.detail.value
}

  selectItem(cat)
{
    this.shopServices.selectItem(cat)
}
  ngOnInit() {
  }

}
