import { MenuPage } from './../menu/menu';
import { type_food1 } from './../type_food1/type_food1';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  pushPage(){
    this.navCtrl.push(type_food1, {
    });
  }
  pushMenu(){
    this.navCtrl.push(MenuPage, {
    });
  }
  slidesfood = [
    {
      image: "assets/imgs/boil_type/ต้มยำขาหมู.jpg",
    },
    {
      image: "assets/imgs/fire_type/ปลากระพงทอด.jpg",
    },
    {
      image: "assets/imgs/fire_type/เกี๊ยวทอด.jpg",
    }
  ];
}
