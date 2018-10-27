import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FoodListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodListProvider {
  test : any = "555555";
  constructor(public http: HttpClient) {
    console.log('Hello FoodListProvider Provider');
  }

}
