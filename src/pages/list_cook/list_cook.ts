import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})


export class list_cook implements OnInit {
  toppings2: any = ['Mushrooms', '2', '4'];
  toppings: string;
  car: boolean = false;
  nameconcat : string="";
  checkUse : any [] = [] ;
  keepListFood : any [] = [];
  length : number = 0;
  a: any = ['Mushrooms', '123', '2', ['Mushrooms of the best', 'Mushrooms2', 'Mushrooms3']];
  constructor(public Params: NavParams, public navCtrl: NavController ,public _FoodListProvider:FoodListProvider) {
    this.toppings = Params.get('toppings');
    console.log(_FoodListProvider.food_list.length);
    for(let l = 0 ; l < _FoodListProvider.food_list.length ; l++){
      this.checkUse[l] = 'false';
    }
    for(let k = 0 ; k < _FoodListProvider.food_list.length ; k++){
      for (let i = 0; i < _FoodListProvider.food_list[k][3].length; i++) {
        this.nameconcat += _FoodListProvider.food_list[k][3][i];
      }
      for (let j = 0; j < this.toppings.length; j++) {
        let substring = this.toppings[j],
            checkMacthIngredient = this.nameconcat.includes(substring);
            console.log(substring);
            console.log(this.nameconcat);
            console.log(checkMacthIngredient);
            if(checkMacthIngredient==true){
              if(this.checkUse[k]=='false'){
                console.log(_FoodListProvider.food_list[k][0]);
                this.keepListFood[length++]=_FoodListProvider.food_list[k];
                this.checkUse[k]='true';
              }
             
            }
      }
      this.nameconcat ="";
    }
    console.log(this.keepListFood);
  }
  
}