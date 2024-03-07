import React from 'react'
import './Navbar.css'
import { useContext } from 'react';
// import { AuthContext } from '../../context/authContext'
// import { DarkModeContext } from  '../../context/darkmodeContext';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";



function Navbar() {
// const { toggle, darkMode } = useContext(DarkModeContext);

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if ( error) {
      alert(error)
    }
  }  

  return (
    <div className='navbar'>
        <button onClick={signOut}>Logout</button>
     <div className='left'>
        <span>COMMUNITY</span>
        
        
        {/* {darkMode ? (
        <LightModeIcon onClick={toggle}/>) : (<DarkModeIcon onClick={toggle}/>) } */}
 
       <div className='search'>
       <PersonSearchIcon/>
        <input type="text"  placeholder='Search...'/>
       </div>
        
     </div>
     <div className='right'></div>
     <PersonOutlinedIcon />
  <EmailOutlinedIcon />
 
   
    </div>
  )
}

export default Navbar



