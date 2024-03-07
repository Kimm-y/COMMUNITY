import './App.css'
import Login from './Pages/Login/Login'
import Landing from './Pages/Landing/Landing.jsx'
import Register from './Pages/Register/Register'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import { supabase } from './utils/supbaseConfig'

function App() {

  const { session } = useContext(AuthContext)

  return (
    <>
      {
        session ? <Landing/> : <Login />
      }

    </>
  )
}

export default App
