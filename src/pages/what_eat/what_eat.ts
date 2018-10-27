import { Component } from '@angular/core';
import { list_eat } from '../list_eat/list_eat';
import { NavController } from 'ionic-angular';
import { FoodListProvider } from '../../providers/food-list/food-list';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'what_eat-page',
  templateUrl: 'what_eat.html'
})
export class what_eat{
  toppings : string;
  checkvalidate:boolean=false;
  constructor(public navCtrl:NavController,private _FoodListProvider:FoodListProvider) {

  }
  pushPage(){
    this.navCtrl.push(list_eat, {
      'toppings': this.toppings
    });
  }
  pushMenu(){
    this.navCtrl.push(MenuPage, {
    });
  }
  checkvalue(data){
    console.log('ทดสอบ ',data);
    if(data.length!=0){
      this.checkvalidate=true;
    }else{
      this. checkvalidate=false;
    }
  }
}