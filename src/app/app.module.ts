import { what_eat } from './../pages/what_eat/what_eat';
import { eat_detail2 } from './../pages/eat_detail2/eat_detail2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { list_cook} from '../pages/list_cook/list_cook';
import { list_eat} from '../pages/list_eat/list_eat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { eat_detail } from '../pages/eat_detail/eat_detail';

//  author  : Supachai Boonying
import { cook_detail } from '../pages/cook_detail/cook_detail';
import { type_food1 } from '../pages/type_food1/type_food1';

import { what_cook } from '../pages/what_cook/what_cook';
import { HttpModule } from '@angular/http';
import { MenuPage } from '../pages/menu/menu';
import { FoodListProvider } from '../providers/food-list/food-list';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { type_food2 } from '../pages/type_food2/type_food2';
import { list_res } from '../pages/list_res/list_res';
import { contact } from '../pages/contact/contact';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    list_eat,
    list_cook,
    cook_detail,
    eat_detail,
    type_food1,
    what_cook,
    eat_detail2,
    MenuPage,
    contact,
    type_food2,
    what_eat,
    list_res

  
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    list_cook,
    list_eat,
    cook_detail,
    eat_detail,
    type_food1,
    what_cook,
    type_food2,
    contact,
    MenuPage,
    eat_detail2,
    what_eat,
    list_res

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodListProvider
  ]
})

export class AppModule {}
