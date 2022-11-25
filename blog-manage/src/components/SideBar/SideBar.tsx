import React, { memo } from 'react'
import './SideBar.scss'
import { useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'

function SideBar(): React.ReactElement {
  const selector = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  return (
    <div className="SideBar">
      <ul>
        <li>
          <span>{selector.lastName + selector.firstName}的博客</span>
        </li>
        <li onClick={() => navigate('/admin/edit')}>文章发布</li>
        <li onClick={() => navigate('/admin/list')}>文章列表</li>
      </ul>
    </div>
  )
}

export default memo(SideBar)
