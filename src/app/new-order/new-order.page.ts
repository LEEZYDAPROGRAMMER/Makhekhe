import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
  categories=[{name:"Cuppo",price:30,picUrl:"https://cdn1.medicalnewstoday.com/content/images/articles/297/297449/a-cup-of-coffee.jpg"},{name:"Latte",price:35,picUrl:"https://cdn.shopify.com/s/files/1/1921/8479/files/coffee_art_4701f57a-4c74-4bf6-b6bc-b05c10b303f6_1024x1024.jpg?v=1519610079"},{name:"Expresso",price:39,picUrl:"http://cdn.deepjapan.org/content/images/.user/_image1_1_Ejo-2A1428547346696.jpg"},{name:"Plain Coffee",price:20,picUrl:"https://sandroslatinfood.com/wp-content/uploads/2017/01/cafe1.jpg"}]
  constructor() { }

  ngOnInit() {
  }

}
