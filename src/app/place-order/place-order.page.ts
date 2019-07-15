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
 tempTot=0;
 itemPrice
  constructor(public shopServices:ShopServiceService) 
  { 

    this.seletedItem=this.shopServices.getSelected();
    this.itemPrice=this.seletedItem[0].price;
    this.tempTot=this.itemPrice
  }
  
  increment() 
  {
   this.tempTot=this.tempTot+this.itemPrice
    this.currentNumber++;
   
  }
  
   decrement() 
  {
   
    if(this.currentNumber>1)
    {
      this.tempTot=this.tempTot-this.itemPrice
    this.currentNumber--;
    
    }
  }
  placeOrder(currentNumber,tempTot)
  {
      this.shopServices.placeOrder(this.sugars,this.milk,currentNumber,tempTot)
  
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
