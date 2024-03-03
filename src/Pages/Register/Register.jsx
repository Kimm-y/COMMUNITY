import './Register.css'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className='register'>
    <div className='card'>
      <div className='top'>
        <h1> WELCOME TO COMMUNITY</h1>
       <p>An online website where charity organisations and volunteers can come together to help the <strong>COMMUNITY</strong></p>
      
      </div>

      <div className='bottom'>
        <h1>QUICK QUESTION</h1>
        <h2>You are ?</h2>

        <div className='buttons'>
          <Link to ='/Organisation'>
        <button >A charity Organisation</button>
        </Link>
        <Link to ='/Volunteer'>
        <button>A volunteer</button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
