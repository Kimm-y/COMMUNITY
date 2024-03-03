import './Organisation.css'

function Organisation() {
  return (
    <div className='login'>
    <div className='card'>
    
      <div className='right'>
        <h1>LOGIN</h1>
        <form>
          <input type="text" placeholder='email' className='email'/>
          <input type="text" placeholder='name' className='name' />
          <input type="password" placeholder='password' className='password' />
          <input type="password" placeholder='confirm password' className='password2' />
        
          <button>REGISTER</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Organisation
