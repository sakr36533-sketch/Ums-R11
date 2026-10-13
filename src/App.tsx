
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AuthLayout from './Componants/AuthLayout/AuthLayout'
import NotFound from './Componants/NotFound/NotFound'
import Login from './Componants/Login/Login'
import MasterLayout from './Componants/MasterLayout/MasterLayout'
import Home from './Componants/Home/Home'
import Users from './Componants/Users/Users'
import AddUser from './Componants/AddUser/AddUser'
import Profile from './Componants/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import UpdateUser from './Componants/UpdateUser/UpdateUser'

function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <AuthLayout />, errorElement: <NotFound />, children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
      ]
    },
    {
      path: 'dashbourd', element: <MasterLayout />, errorElement: <NotFound />, children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'users', element: <Users /> },
        { path: 'add_user', element: <AddUser /> },
        { path: 'update_user/:id', element: <UpdateUser /> },
        { path: 'profile', element: <Profile /> },
      ]
    }
  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
