import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'

function Leftbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='leftbar'>
      <div className='menu'>
      <div className="user"></div>

      </div>
      
    </div>
  )
}

export default Leftbar
