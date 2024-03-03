import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register/Register.jsx'
import Organisation from './Pages/Organisation/Organisation.jsx'
import Volunteer from './Volunteer/Volunteer.jsx'


const urls = [
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/organisation',
    element: <Organisation/>
  },
  {
    path: '/volunteer',
    element: <Volunteer/>
  },
 
 
 


]


const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)
