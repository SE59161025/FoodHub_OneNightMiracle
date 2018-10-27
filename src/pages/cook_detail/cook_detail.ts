import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
@Component({
  selector: 'cook-detail',
  templateUrl: 'cook_detail.html'
})
export class cook_detail implements OnInit {
    name;
    link_img;
    solution;
    staple;
    level : any [] = [];
    nlvel : any [] = [];
    time_solu;
    time_sta;
  constructor(private navParams: NavParams) {
    this.name = navParams.get('name');
    this.link_img = navParams.get('link_img'); 
    this.solution = navParams.get('solution');
    this.staple = navParams.get('staple');
    this.level.length = navParams.get('level');
    this.nlvel.length = navParams.get('nlvel');
    this.time_solu = navParams.get('time_solu');
    this.time_sta  = navParams.get('time_sta');
  }
 
  ngOnInit(){
    // console.log(this.solution);
    // console.log(this.level);
  }
}