// import { Outlet } from 'react-router-dom'
import Leftbar from '../../components/Leftbar/Leftbar'
import Navbar from '../../components/Navbar/Navbar'

import './Landing.css'
import { Home } from '@mui/icons-material'

function Landing() {
  return (
    
    <div>
      <Navbar/>
      <div style={{display:'flex'}}> 
      <Leftbar/>
   

      </div>
    </div>
  )
}

export default Landing
