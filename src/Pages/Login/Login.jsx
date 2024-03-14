import { useState } from "react";
import { supabase } from "../../utils/supbaseConfig"
import './Login.css'

import { Link, json } from 'react-router-dom'

function Login() {


  // $('#github-button').on('click', function() {
  //   OAuth.initialize('https://whwmzevsajfomnepcyzz.supabase.co/auth/v1/callback');
  //   OAuth.popup('github').then(github => {
  //     console.log(github.me());
  //   });
  // })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithOAUth = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: "http://localhost:5173/"
      },
    })

    if (error) {
      alert("Error")
    }
  }




  async function signInWithEmail(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
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

            <Link to='/register'>
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
                onChange={(e) => setEmail(e.target.value)}

              />

              <input
                type="password"
                value={password}
                placeholder='password'
                className='password'
                onChange={(e) => setPassword(e.target.value)}
              />
               <div className="sign-in"> 
              <button type="submit" className="login">LOGIN</button>
              <button onClick={() => handleSignInWithOAUth("google")} className="google">Sign in with Google</button>
              <button onClick={() => handleSignInWithOAUth("github")} className="github">Sign in With Github</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
