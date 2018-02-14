import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-multiple-tabs',
  templateUrl: 'multiple-tabs.html'
})
export class MultipleTabs {
  public category: string = 'movies';
  public categories: Array<string> = ['movies', 'animated'];

  constructor(public navCtrl: NavController) { }

  onTabChanged(tabName) {
    this.category = tabName;
  }
}
