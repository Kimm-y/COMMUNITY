import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/Login/Login.jsx'
import Organisation from './Pages/Organisation/Organisation.jsx'
import Volunteer from './Pages/Volunteer/Volunteer.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Landing from './Pages/Landing/Landing.jsx'
import { AuthProvider } from './context/authContext.jsx'
import Page from './Pages/Page/Page.jsx'
import CreatePost from './Pages/CreatePost/index.jsx'
import UpdatePost from './Pages/UpdatePost/index.jsx'
import Event from './Pages/Event/Event.jsx'
import Learn from './Pages/Learn/Learn.jsx'
import { ThemeProvider } from "./ThemeContext/ThemeContext"


const urls = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
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
    path: '/page',
    element: <Page />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: "/create-post",
    element: <CreatePost />
  },

  {
    path: "/update-post",
    element: <UpdatePost />
  },
  {
    path: "/event",
    element: <Event/>
  },
  {
    path: "/learn",
    element: <Learn/>
  },

 




  // {
  //   path: "/learn",
  //   element: <Learn/>
  // },





]


const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={paths} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
