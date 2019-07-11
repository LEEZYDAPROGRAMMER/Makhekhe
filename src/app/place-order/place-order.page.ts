import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {
 currentNumber=0;
  constructor() { }
  
  increment() 
  {
    this.currentNumber++;
  }
  
   decrement() 
  {
    this.currentNumber--;
  }
  ngOnInit() {
  }

}
