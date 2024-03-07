import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register/Register.jsx'
import Organisation from './Pages/Organisation/Organisation.jsx'
import Volunteer from './Pages/Volunteer/Volunteer.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Landing from './Pages/Landing/Landing.jsx'
import { AuthProvider } from './context/authContext.jsx'



const urls = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/organisation',
    element: <Organisation />
  },
  {
    path: '/volunteer',
    element: <Volunteer />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/landing',
    element: <Landing />
  },





]


const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={paths} />
    </AuthProvider>
  </React.StrictMode>,
)
