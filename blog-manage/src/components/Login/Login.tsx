import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className="Login">
      <span className="title">Blog</span>
      <div className="login-form">
        <form id="form">
          <span>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" />
          </span>
          <span>
            <label htmlFor="password">密码:</label>
            <input id="password" type="password" />
          </span>
          <div className="login-button">
            <button type="button">注册</button>
            <button type="submit" form="form">
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
