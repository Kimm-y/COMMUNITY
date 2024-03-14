
import React, { useState } from 'react'
// import {buddies} from "../../assets/icons/buddies.png"
import './Leftbar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';





function Leftbar() {
  const { session } = useContext(AuthContext)
  console.log(session)
  
 
  return (
    <div className='leftbar'>
      <div className='container'>
      <div className='menu'>
        <Link to= '/profile' style={{textDecoration: 'none' }}>
      <div className="user">
          <img
            src= { session ? session.user.user_metadata.picture : "No picture"}
            alt=""
          />
   <span>{
              session ? session.user.user_metadata.name : "No name"
            }</span>
        </div>
        </Link>

        {/* <Link to = '/learn' style={{textDecoration: 'none' }}>
        <div className="item">
            <img src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/buddies.png" alt="" />
          
            <span>LEARN MORE</span>
          </div>
          </Link> */}

 
          {/* <div className="item">
            <img src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/organisation.png" alt="" />
            <span>HUMANITARIAN ISSUES</span>
          </div> */}
          <Link to = '/event' style={{textDecoration: 'none' }}>
          <div className="item">
            <img src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/calendar.png?t=2024-03-13T07%3A51%3A27.475Z" alt="" />
            <span>EVENTS</span>
          </div>
          </Link>

      </div>
      </div>
    </div>
  )
}

export default Leftbar
