import { useState } from "react";
import { supabase } from "../../utils/supbaseConfig"
import './Login.css'

import { Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  async function signInWithEmail(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if ( error ) {
        console.log(error)
    } else {
        window.location.href = '/'
        console.log(data)
    }
  }

  return (
    <>
    <div className='login'>
    <div className='card'>
      <div className='left'>
        <h1> WELCOME TO COMMUNITY</h1>
       <p>An online website where charity organisations and volunteers can come together to help the <strong>COMMUNITY</strong></p>
       <span>Don't have an account, click below to register</span>

       <Link to ='/register'>
       <button>REGISTER</button>
       </Link>

      </div>
      <div className='right'>
        <h1>LOGIN</h1>

        <form onSubmit={signInWithEmail}>
          <input
           type="text" 
           value={email}
          placeholder='email' 
          className='email'
          onChange={(e)=> setEmail(e.target.value)}

          />

          <input 
          type="password" 
          value={password}
          placeholder='password'
           className='password' 
           onChange={(e)=>setPassword(e.target.value)}
           />

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
    </div>

    </>
  )
}

export default Login
