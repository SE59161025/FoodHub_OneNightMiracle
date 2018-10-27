import { Component } from '@angular/core';

@Component({
  selector: 'type-food1-page',
  templateUrl: 'type_food1.html'
})
export class type_food1{
  food = [
    ["1","2","3","4","5","7",],
    ["ก","ข","ค","ง","จ","ช",],
    ["A","B","C","D","E","F",],
    ["a","b","c","d","e","f",]
  ];
  constructor() {

  }
  getfood(){
    return this.food;
  }
  wow(){

    console.log("wow");
  }
}