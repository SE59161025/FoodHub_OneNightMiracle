import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})
export class list_cook{
  toppings:string;
  constructor(public Params: NavParams,public navCtrl: NavController) {
  this.toppings = Params.get('toppings');
  }
}
