import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})
export class list_cook{
  toppings:string;
  car : boolean = false
  a : any='Mushrooms';
  constructor(public Params: NavParams,public navCtrl: NavController) {
    
    this.toppings = Params.get('toppings');
  }
  abc(){
    for(var i = 0; i <this.toppings.length;i++){
      if(this.a==this.toppings[i]){
        this.car = true;
      }
    }
    
    return this.car;
  }
}