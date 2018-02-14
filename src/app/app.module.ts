import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManyTabs } from '../pages/many-tabs/many-tabs';
import { MultipleTabs } from '../pages/multiple-tabs/multiple-tabs';
import { ScrollableTabs } from '../pages/scrollable-tabs/scrollable-tabs';
import { SwipeSegmentDirective } from '../directives/swipe-segment.directive';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManyTabs,
    MultipleTabs,
    ScrollableTabs,
    SwipeSegmentDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManyTabs,
    MultipleTabs,
    ScrollableTabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
