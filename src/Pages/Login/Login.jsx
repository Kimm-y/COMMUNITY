import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
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
        <form>
          <input type="text" placeholder='email' className='email'/>
          <input type="password" placeholder='password' className='password' />
          <button>LOGIN</button>
        </form>
      </div>
    </div>
    </div>

    </>
  )
}

export default Login
