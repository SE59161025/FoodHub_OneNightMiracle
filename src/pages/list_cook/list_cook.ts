import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})

export class list_cook implements OnInit {
  toppings2: any = ['Mushrooms', '2', '4'];
  toppings: string;
  car: boolean = false;
  a: any = ['Mushrooms', '123', '2', ['Mushrooms of the best', 'Mushrooms2', 'Mushrooms3']];
  constructor(public Params: NavParams, public navCtrl: NavController) {
    this.toppings = Params.get('toppings');
    console.log(typeof this.a);
    for (let i = 0; i < this.a.length; i++) {
      // console.log(this.a[3]);

    }
  }
  fire_type=['เกี๊ยวทอด','ไก่ทอดหาดใหญ่','น่องไก่ทอดน้ำปลา','ปีกไก่ทอด','ไก่ทอดวิงส์แซ่บ','หมูแดดเดียวทอด','หมูสามชั้นทอด','ปลากระพงทอด','กุ้งทอด'];
  boil_type=['ต้มยำขาหมู','ไข่พะโล้','แกงโฮะ','แกงฮังเล','แกงป่าหมู','แกงจืดสับปะรดซี่โครงอ่อน','ต้มแซปกระดูกอ่อน','แกงอ่อมหมู','ขาหมูต้มผักกาดดอง','แกงรัญจวน'];
  ngOnInit() {
    let test1 = this.a[3][0]+this.a[3][1]+this.a[3][2];
    
    console.log(test1);
    for (let i = 0; i < this.toppings2.length; i++) {
        let substring = this.toppings2[i],
            checkMacthIngredient = test1.includes(substring);
            console.log(checkMacthIngredient);
    }
    

  }
}