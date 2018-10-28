import { NavController } from "ionic-angular";
import { Component } from "@angular/core";
import { eat_detail2 } from "../eat_detail2/eat_detail2";
import { eat_detail } from "../eat_detail/eat_detail";
@Component({
  selector: 'list-res-page',
  templateUrl: 'list_res.html'
})
export class list_res {
  constructor(public navCtrl: NavController) {
  }
  goto_cook_detail(num) {
    if (num == 1) {
      this.navCtrl.push(eat_detail2, {});
    } else {
      this.navCtrl.push(eat_detail, {});
    }
  }
}