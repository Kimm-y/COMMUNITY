import { Outlet } from 'react-router-dom'
import Leftbar from '../../components/Leftbar/Leftbar'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../Home/Home'
import './Landing.css'

function Landing() {


  return (
    
    <div className='theme-light'>
      <Navbar/>
      <div style={{display:'flex'}}> 
     <Leftbar/>
     <div style={{flex:6}}>
     <Outlet/>
     <Home/>
   
     </div>
      </div>
    </div>
  )
}

export default Landing
