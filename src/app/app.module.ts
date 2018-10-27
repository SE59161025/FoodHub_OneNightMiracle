import { eat_detail2 } from './../pages/eat_detail2/eat_detail2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { list_cook} from '../pages/list_cook/list_cook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { eat_detail } from '../pages/eat_detail/eat_detail';

//  author  : Supachai Boonying
import { cook_detail } from '../pages/cook_detail/cook_detail';
import { type_food1 } from '../pages/type_food1/type_food1';
import { MenuPage } from '../pages/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    list_cook,
    cook_detail,
    eat_detail,
    type_food1,
    MenuPage,
    eat_detail2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    list_cook,
    cook_detail,
    eat_detail,
    type_food1,
    MenuPage,
    eat_detail2

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
