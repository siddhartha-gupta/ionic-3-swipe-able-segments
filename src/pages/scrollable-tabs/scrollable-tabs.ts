import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-scrollable-tabs',
  templateUrl: 'scrollable-tabs.html'
})

export class ScrollableTabs {
  @ViewChild('toolbar') toolbar: any;
  public category: string = 'movies';
  public categories: Array<string> = ['movies', 'tvshows', 'animated', 'comedy', 'horror', 'action', 'romance', 'drama', 'adventure', 'fiction', 'spy', 'mystery'];

  constructor(public navCtrl: NavController) { }

  onTabChanged(tabName) {
    this.category = tabName;
  }
}
