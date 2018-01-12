import { Injectable } from '@angular/core'
import { User } from './user'

const USERS: User[] = [
  { userId: 'ionic-sample---user-1', username: 'User 1 Ionic', secretKey: 'secret' },
  { userId: 'ionic-sample---user-2', username: 'User 2 Ionic', secretKey: 'secret' },
  { userId: 'ionic-sample---user-3', username: 'User 3 Ionic', secretKey: 'secret' },
  { userId: 'ionic-sample---user-4', username: 'User 4 Ionic', secretKey: 'secret' },
  { userId: 'ionic-sample---user-5', username: 'User 5 Ionic', secretKey: 'secret' },
]

@Injectable()
export class UserService {
  constructor() {}

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS)
  }

  getSelf(): Promise<User> {
    return Promise.resolve({
      userId: 'ionic-sample---user-0',
      username: 'User 0 Ionic',
      secretKey: 'secret'
    })
  }

}
