import React, { useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { updateUserInfo } from '../../store/userSlice'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import './AdminPage.scss'

function AdminPage() {
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
        <header></header>
        <Outlet />
        <footer></footer>
      </main>
    </div>
  )
}

export default AdminPage
