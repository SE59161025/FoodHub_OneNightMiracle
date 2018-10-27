import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { list_cook} from '../pages/list_cook/list_cook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { cook_detail } from '../pages/cook_detail/cook_detail';
import { eat_detail } from '../pages/eat_detail/eat_detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    list_cook,
    cook_detail,
    eat_detail
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
    eat_detail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
