import request from '../utils/request'

export interface UserInfo {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class User {
  static async login(email: string, password: string) {
    return await request({
      url: '/user/login',
      method: 'post',
      params: {
        email,
        password
      }
    })
  }

  static async register(user: UserInfo) {
    return await request({
      url: '/user/register',
      method: 'post',
      data: user
    })
  }
}
