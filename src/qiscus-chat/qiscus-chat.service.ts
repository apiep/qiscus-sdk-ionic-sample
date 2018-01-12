import { Injectable } from '@angular/core'

import { User } from './user'
import { UserService } from './user.service'

declare const QiscusSDK

@Injectable()
export class QiscusChatService {
  constructor(private userService: UserService) {}

  async init() {
    QiscusSDK.core.init({
      AppId: 'sdksample',
      mode: 'wide',
      options: {}
    })
    const users = await this.userService.getUsers()
    for (let user of users) {
      QiscusSDK.core.setUser(user.userId, user.secretKey, user.username)
    }
    const self = await this.userService.getSelf()
    QiscusSDK.core.setUser(self.userId, self.secretKey, self.username)

    // this.userService.getUsers()
    //   .then(users => {
    //     users.forEach(user => {
    //       QiscusSDK.core.setUser(user.userId, user.secretKey, user.username)
    //     })
    //   })
    // this.userService.getSelf()
    //   .then(user => QiscusSDK.core.setUser(user.userId, user.secretKey, user.username))
  }

  chatTarget(user: User) {
    QiscusSDK.core.UI.chatTarget(user.userId)
  }

  render() {
    QiscusSDK.render()
  }
}
