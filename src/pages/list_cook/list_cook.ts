import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})
export class list_cook{
  toppings:string;
  car : boolean = false
  a : any='Mushrooms';
  constructor(public Params: NavParams,public navCtrl: NavController) {
    fire_type=['เกี๊ยวทอด','ไก่ทอดหาดใหญ่','น่องไก่ทอดน้ำปลา','ปีกไก่ทอด','ไก่ทอดวิงส์แซ่บ','หมูแดดเดียวทอด','หมูสามชั้นทอด','ปลากระพงทอด','กุ้งทอด'];
    boil_type=['ต้มยำขาหมู','ไข่พะโล้','แกงโฮะ','แกงฮังเล','แกงป่าหมู','แกงจืดสับปะรดซี่โครงอ่อน','ต้มแซปกระดูกอ่อน','แกงอ่อมหมู','ขาหมูต้มผักกาดดอง','แกงรัญจวน'];
    this.toppings = Params.get('toppings');
  }
  abc(){
    for(var i = 0; i <this.toppings.length;i++){
      if(this.a==this.toppings[i]){
        this.car = true;
      }
    }
    
    return this.car;
  }
}