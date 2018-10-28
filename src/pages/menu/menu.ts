import { what_eat } from './../what_eat/what_eat';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { what_cook } from '../what_cook/what_cook';
import { HomePage } from '../home/home';
import { contact } from '../contact/contact';

@Component({
  selector: 'menu-page',
  templateUrl: 'menu.html'
})
export class MenuPage {
  constructor(public navCtrl: NavController) {
  }
  pushcook(){
    this.navCtrl.push(what_cook, {
    });
  }
  pusheat(){
    this.navCtrl.push(what_eat, {
    });
  }
  pushhome(){
    this.navCtrl.push(HomePage, {
    });
  }
  pushcontact(){
    this.navCtrl.push(contact, {
    });
  }
}