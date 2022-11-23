import React from 'react'
import './SignPage.scss'
import { Outlet } from 'react-router-dom'

function SignPage() {
  return (
    <div className="background">
      <Outlet></Outlet>
    </div>
  )
}

export default SignPage
