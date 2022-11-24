import request from '../util/request'

export interface UserInfo {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface Login {
  email: string
  password: string
}

export class User {
  static async login(login: Login) {
    const { email, password } = login
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
