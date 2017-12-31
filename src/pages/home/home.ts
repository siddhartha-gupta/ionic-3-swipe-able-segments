import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public category: string = 'movies';
  public categories: Array<string> = ['movies', 'tvshows', 'animated']

  constructor(public navCtrl: NavController) { }

  onTabChanged(tabName) {
    this.category = tabName;
  }
}
