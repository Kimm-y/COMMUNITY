import React from 'react'
import './Navbar.css'
import { useContext } from 'react';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { AuthContext } from '../../context/authContext';
import { supabase } from '../../utils/supbaseConfig';
import {Link} from 'react-router-dom'
// import { ThemeContext } from "../../ThemeContext/ThemeContext"


function Navbar() {

//   const { theme, handleThemeChange } = useContext(ThemeContext)

//   const backgroundColor = {
//     backgroundColor: theme === 'light' ? 'white' : 'black',
//     color: theme === 'light' ? 'black' : 'white' 

// }


const { session } = useContext(AuthContext)
console.log(session)


  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if ( error) {
      alert(error)
    }
  }  

  return (
    // <main style={backgroundColor}>
  

   


    <div className='navbar'>

   
     <div className='left'>
  
        <span>COMMUNITY</span>
        <img src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/icon.png?t=2024-03-13T07%3A47%3A59.634Z" alt="" />
        
        {/* <button onClick={handleThemeChange}><DarkModeIcon /></button> */}
       {/* <div className='search'>
       <PersonSearchIcon/>
        <input type="text"  placeholder='Search...'/>
       </div> */}
        
     </div>
     <div className='right'
     >
     <Link to ='/profile'>  <PersonOutlinedIcon /> </Link>
     <a href={ session ? session.user.user_metadata.email : "No email"}> <EmailOutlinedIcon /></a>
  
    
    

  

  <div className="user">
          <img
            src= { session ? session.user.user_metadata.picture : "No picture"}
            alt=""
          />
          <span>{
              session ? session.user.user_metadata.name : "No name"
            }</span>
        </div>
 
        <Link to= "/">
        <button onClick={signOut} className='log-out'>Logout</button>
        </Link>
    </div>
    </div>
    // </main>
  )
}

export default Navbar



