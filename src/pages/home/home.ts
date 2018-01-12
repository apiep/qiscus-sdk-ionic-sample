/* globals QiscusSDK */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QiscusChatService } from '../../qiscus-chat/qiscus-chat.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private qiscusService: QiscusChatService
  ) {
  }

  ngOnInit() {
    this.qiscusService.init()
    this.qiscusService.render()
  }

}
