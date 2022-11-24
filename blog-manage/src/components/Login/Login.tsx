import React, { useState } from 'react'
import './Login.scss'
import { Login, User } from '../../api/User'
import { NavigateFunction, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate: NavigateFunction = useNavigate()
  const resetValue = () => {
    setEmail('')
    setPassword('')
  }
  const handleSubmit = () => {
    User.login({ email, password } as Login)
      .then(() => {
        navigate('/admin')
      })
      .catch(() => {
        alert('登录失败')
      })
      .finally(() => {
        resetValue()
      })
  }

  return (
    <div className="Login">
      <span className="title">Blog</span>
      <div className="form-style">
        <form id="form">
          <span>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} required={true} />
          </span>
          <span>
            <label htmlFor="password">密码:</label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required={true} />
          </span>
          <div className="button-group">
            <button type="button" onClick={() => navigate('/main/register')}>
              注册
            </button>
            <button type="button" onClick={handleSubmit}>
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
