import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodListProvider } from '../../providers/food-list/food-list';
import { cook_detail } from '../cook_detail/cook_detail';
@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})
export class list_cook implements OnInit {
  toppings: string;
  stringconcat: string = "";
  checkUse: any[] = [];
  keepListFood: any[] = [];
  constructor(public Params: NavParams, public navCtrl: NavController, public _FoodListProvider: FoodListProvider) {
    this.keepListFood = [];
    this.toppings = Params.get('toppings');
    for (let l = 0; l < _FoodListProvider.food_list.length; l++) {
      this.checkUse[l] = 'false';
    }
    for (let k = 0; k < _FoodListProvider.food_list.length; k++) {
      for (let i = 0; i < _FoodListProvider.food_list[k][3].length; i++) {
        this.stringconcat += _FoodListProvider.food_list[k][3][i];
      }
      for (let j = 0; j < this.toppings.length; j++) {
        let substring = this.toppings[j],
          checkMacthIngredient = this.stringconcat.includes(substring);
        if (checkMacthIngredient == true) {
          if (this.checkUse[k] == 'false') {
            this.keepListFood.push(_FoodListProvider.food_list[k]);
            this.checkUse[k] = 'true';
          }
        }
      }
      this.stringconcat = "";
    }
  }
  gotopage(data: any) {
    this.navCtrl.push(cook_detail, {
      name: data[0],
      link_img: data[1],
      solution: data[2],
      staple: data[3],
      level: data[4],
      time_solu: data[5],
      time_sta: data[6]
    });
  }
<<<<<<< HEAD
  ngOnInit() {
=======
  ngOnInit(){

    // this.keepListFood  = [];
>>>>>>> parent of 9655264... remove comment at list_cook , what_cook.ts , food-list.ts
  }
}