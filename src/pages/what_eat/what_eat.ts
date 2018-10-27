import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'what-eat-page',
  templateUrl: 'what_eat.html'
})
export class what_eat{
    constructor(public navCtrl:NavController) {
    }
    pushMenu(){
      this.navCtrl.push(MenuPage, {
      });
    }
}