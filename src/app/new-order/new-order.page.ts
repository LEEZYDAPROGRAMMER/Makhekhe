import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../ShopService/shop-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
  categories
  selectedItems
  constructor(public shopServices:ShopServiceService) 
  { 
         this.categories=shopServices.getCat();
         this.selectedItems=shopServices.getSelected()
  }
  selectItem(cat)
  {
      this.shopServices.selectItem(cat)
  }

  ngOnInit() {
  }

}
