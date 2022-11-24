import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../components/Login/Login'
import SignPage from '../pages/SignPage/SignPage'
import Register from '../components/Register/Register'
import AdminPage from '../pages/AdminPage/AdminPage'

export default function BaseRouter() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="main" replace={true} />
    },
    {
      path: 'main',
      element: <SignPage />,
      children: [
        {
          path: '',
          element: <Navigate to="login" replace={true} />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    },
    {
      path: 'admin',
      element: <AdminPage />
    }
  ])
}
