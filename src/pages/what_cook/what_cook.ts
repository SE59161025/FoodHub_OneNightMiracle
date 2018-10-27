import { Component } from '@angular/core';
import { list_cook } from '../list_cook/list_cook';
import { NavController } from 'ionic-angular';
import { FoodListProvider } from '../../providers/food-list/food-list';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'what-cook-page',
  templateUrl: 'what_cook.html'
})
export class what_cook{
  toppings : string;
  checkvalidate:boolean=false;
  constructor(public navCtrl:NavController,private _FoodListProvider:FoodListProvider) {
    console.log(_FoodListProvider.test);
    console.log(_FoodListProvider.food_list);
  }
  pushPage(){
    this.navCtrl.push(list_cook, {
      'toppings': this.toppings
    });
  }
  pushMenu(){
    this.navCtrl.push(MenuPage, {
    });
  }
  not(data){
    console.log('ทดสอบ ',data);
    if(data.length!=0){
      this.checkvalidate=true;
    }else{
      this. checkvalidate=false;
    }
  }
  not2(){
    console.log('ทดสอบบบบบบบบบบบบบบบ');
  }
  showSelectValue = function(mySelect) {
    console.log(mySelect);
}
}