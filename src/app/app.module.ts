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
<<<<<<< HEAD
import { type_food2 } from '../pages/type_food2/type_food2';
import { what_cook } from '../pages/what_cook/what_cook';
=======
// End 
>>>>>>> 1f8720714290e6ffcf67af7eb3ee3deb82e92403

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    list_cook,
    cook_detail,
    eat_detail,
    type_food1,
    what_cook
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
    what_cook
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
