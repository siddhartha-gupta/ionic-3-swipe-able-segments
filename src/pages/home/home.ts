import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ManyTabs } from '../many-tabs/many-tabs';
import { MultipleTabs } from '../multiple-tabs/multiple-tabs';
import { ScrollableTabs } from '../scrollable-tabs/scrollable-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  pushPage(name) {
    switch (name) {
      case 'manyTabs':
        this.navCtrl.push(ManyTabs);
        break;

      case 'multipleTabs':
        this.navCtrl.push(MultipleTabs);
        break;

      case 'scrollableTabs':
        this.navCtrl.push(ScrollableTabs);
        break;

      default:
        break;
    }
  }
}
