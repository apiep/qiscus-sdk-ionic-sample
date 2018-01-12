import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { User } from '../qiscus-chat/user'
import { UserService } from '../qiscus-chat/user.service'
import { QiscusChatService } from '../qiscus-chat/qiscus-chat.service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  users: Array<User>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private userService: UserService,
    private qiscusService: QiscusChatService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.userService.getUsers()
      .then(users => { this.users = users})

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(user: User) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.qiscusService.chatTarget(user)
  }
}
