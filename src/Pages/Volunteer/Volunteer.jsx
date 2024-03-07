import './Volunteer.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { supabase } from '../../utils/supbaseConfig'

function Volunteer() {
 
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
  
    async function signUpNewUser(e) {
      e.preventDefault();
      
      const { data: user_creation, error: creation_error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: 'http://localhost:5173/',
        },
      })

      const { data: user_role, error: role_error } = await supabase
      .from('user_roles')
      .insert([
        { email: email, role: 'volunteer' },
      ])
      .select()

  
      if ( role_error || creation_error ) {
          console.error(user_creation, creation_error)
      } else {
          console.log(user_creation, user_role)
      }
    }

  return (
    <div className='login'>
    <div className='card'>
    
      <div className='right'>
        <h1>REGISTER</h1>
        <form onSubmit={signUpNewUser}>
          <input type="text" placeholder='email' className='email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder='username' className='username' />
          <input type="password" placeholder='password' className='password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
          <input type="password" placeholder='confirm password' className='password2' />
          <button type='submit'>REGISTER</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Volunteer
