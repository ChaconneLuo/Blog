import React, { ReactElement } from 'react'
import './SignPage.scss'
import { Outlet } from 'react-router-dom'

function SignPage(): ReactElement {
  return (
    <div className="background">
      <Outlet></Outlet>
    </div>
  )
}

export default SignPage
