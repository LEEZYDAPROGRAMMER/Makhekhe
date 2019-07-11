import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {
orders=[]
cartItems=[]
seletedItem=[]
// sugars
//  milk



categories=[{name:"Cuppo",price:30,picUrl:"https://cdn1.medicalnewstoday.com/content/images/articles/297/297449/a-cup-of-coffee.jpg"},{name:"Latte",price:35,picUrl:"https://cdn.shopify.com/s/files/1/1921/8479/files/coffee_art_4701f57a-4c74-4bf6-b6bc-b05c10b303f6_1024x1024.jpg?v=1519610079"},{name:"Expresso",price:39,picUrl:"http://cdn.deepjapan.org/content/images/.user/_image1_1_Ejo-2A1428547346696.jpg"},{name:"Plain Coffee",price:20,picUrl:"https://sandroslatinfood.com/wp-content/uploads/2017/01/cafe1.jpg"}]
  constructor() { }

//get categories
 getCat()
{

  return this.categories
}
//get selected
getSelected()
{

  return this.seletedItem
}
//get orders
getOrders()
{

  return this.orders
}
//place order
placeOrder(sugar,milk,currentNumber)
{

 

     if(sugar!=null&&milk!=null&&currentNumber!=null)
     {
      this.orders.push({name:this.seletedItem[0].name,sugar:sugar,milk:milk,qty:currentNumber,price:this.seletedItem[0].price })  
      console.log(this.orders);
      
     }

}
//selected item
selectItem(cat)
{
     let index=this.categories.indexOf(cat);  
     this.seletedItem.splice(0,1);
     this.seletedItem.push({name:this.categories[index].name ,price:this.categories[index].price })      
}


}
