import React, { useState } from 'react'
import './Register.scss'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UnionType } from '../../util/TypeUtil'
import { User, UserInfo } from '../../api/User'

function Register() {
  const [form, setForm] = useState<UserInfo>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const edit = (keyName: UnionType<UserInfo>, value: UserInfo[typeof keyName]) => {
    setForm({
      ...form,
      [keyName]: value
    })
  }
  const handleSubmit = () => {
    User.register(form)
      .then(() => {
        navigate('/main/login')
      })
      .catch(() => {
        alert('注册失败')
      })
      .finally(() => {
        resetForm()
      })
  }
  const resetForm = () => {}
  const navigate: NavigateFunction = useNavigate()
  return (
    <div className="Register">
      <span className="title">注册</span>
      <div className="form-style">
        <form id="form">
          <span>
            <label htmlFor="lastName">姓:</label>
            <input id="lastName" type="text" onChange={(e) => edit('lastName', e.target.value)} required={true} />
          </span>
          <span>
            <label htmlFor="firstName">名:</label>
            <input id="firstName" type="text" onChange={(e) => edit('firstName', e.target.value)} required={true} />
          </span>
          <span>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" onChange={(e) => edit('email', e.target.value)} required={true} />
          </span>
          <span>
            <label htmlFor="password">密码:</label>
            <input id="password" type="password" onChange={(e) => edit('password', e.target.value)} required={true} />
          </span>
          <div className="button-group">
            <button type="button" onClick={() => navigate('/main/login')}>
              返回
            </button>
            <button type="button" onClick={handleSubmit}>
              注册
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
