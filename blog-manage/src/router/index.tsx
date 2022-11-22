import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../components/Login/Login'
import SignPage from '../pages/SignPage/SignPage'
import Register from '../components/Register/Register'

export default function BaseRouter() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/main" replace={true} />
    },
    {
      path: '/main',
      element: <SignPage />
    },
    {
      path: '/main/login',
      element: <Login />
    },
    {
      path: '/main/register',
      element: <Register />
    }
  ])
}
