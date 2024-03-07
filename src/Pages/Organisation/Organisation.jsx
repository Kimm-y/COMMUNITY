import './Organisation.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { supabase } from '../../utils/supbaseConfig'

function Organisation() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  async function signUpNewUser(e) {
    e.preventDefault();

    const { data: created_user, error: user_creation_error } = await supabase.auth.signUp({
      email: email,
      password: password,
      name: name,
      options: {
        emailRedirectTo: 'http://localhost:5173/',
      },
    })

    const { data: user_role, error: role_error } = await supabase
      .from('user_roles')
      .insert([
        { email: email, role: 'organization' },
      ])
      .select()


    if (user_creation_error || role_error) {
      console.error(user_creation_error, role_error)
    } else {
      console.log(created_user)
    }
  }
  return (
    <div className='login'>
      <div className='card'>

        <div className='right'>
          <h1>REGISTER</h1>
          <form onSubmit={signUpNewUser}>
            <input type="text" placeholder='email' value={email} className='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='name' value="" className='name'  onChange={(e) => setName(e.target.value)}/>
            <input type="password" placeholder='password' className='password' onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder='confirm password' className='password2' />

              <button type='submit'>REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Organisation
