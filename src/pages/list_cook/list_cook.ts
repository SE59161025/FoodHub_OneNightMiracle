import { Component } from '@angular/core';

@Component({
  selector: 'list_cook-page',
  templateUrl: 'list_cook.html'
})
export class list_cook{
  constructor() {}

  

    fire_type=['เกี๊ยวทอด','ไก่ทอดหาดใหญ่','น่องไก่ทอดน้ำปลา','ปีกไก่ทอด','ไก่ทอดวิงส์แซ่บ','หมูแดดเดียวทอด','หมูสามชั้นทอด','ปลาทอด','กุ้งทอด'];
    boil_type=['ต้มยำขาหมู','ไข่พะโล้','แกงโฮะ','แกงฮังเล','แกงป่าหมู','แกงจืดสับปะรดซี่โครงอ่อน','ต้มแซปกระดูกอ่อน','แกงอ่อมหมู','ขาหมูต้มผักกาดดอง','แกงรัญจวน'];

  getdata(){
    return this.fire_type;
  }








}

