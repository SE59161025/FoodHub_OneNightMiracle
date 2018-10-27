import { Component } from '@angular/core';
import { list_cook } from '../list_cook/list_cook';
import { NavController } from 'ionic-angular';
import { FoodListProvider } from '../../providers/food-list/food-list';

@Component({
  selector: 'what_cook-page',
  templateUrl: 'what_cook.html'
})
export class what_cook{
  toppings : string;
  constructor(public navCtrl:NavController,private _FoodListProvider:FoodListProvider) {
    console.log(_FoodListProvider.test);
  }
  pushPage(){
    this.navCtrl.push(list_cook, {
      'toppings': this.toppings
    });
  }
}