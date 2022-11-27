import React, { ReactElement, useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { updateUserInfo } from '../../store/userSlice'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import './AdminPage.scss'

function AdminPage(): ReactElement {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(updateUserInfo())
  })
  return (
    <div className="AdminPage">
      <aside>
        <SideBar />
      </aside>
      <main>
        <div className="bac">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminPage
