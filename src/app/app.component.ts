import { type_food2 } from './../pages/type_food2/type_food2';
import { what_eat } from './../pages/what_eat/what_eat';
import { eat_detail2 } from './../pages/eat_detail2/eat_detail2';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { list_cook } from '../pages/list_cook/list_cook';
import { cook_detail } from '../pages/cook_detail/cook_detail';



import { eat_detail } from '../pages/eat_detail/eat_detail';
import { type_food1 } from '../pages/type_food1/type_food1';
import { what_cook } from '../pages/what_cook/what_cook';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'list_cook', component: list_cook },
      { title: 'cook_detail', component: cook_detail },
      { title: 'eat_detail', component: eat_detail },
      { title: 'type_food1', component: type_food1 },
      { title: 'type_food2', component: type_food2 },
      { title: 'what_cook', component: what_cook },
      { title: 'what_eat', component: what_eat },
      { title: 'eat_detail2', component: eat_detail2 },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
