import React from 'react'

 const header = () => {
  
  return (
    <div className='header'>
      <div className='svg'>
      {/* <svg  viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,149.3C384,128,480,64,576,80C672,96,768,192,864,213.3C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      </div>
      <div className='logo' >
      <img className="logo-img" src='images/logo.png' alt="logo"/>
      </div>
      {/* <div className='signInUp'>
          <a className='login '>Login</a> 
          <a className='signUp '>Sign Up</a>
      </div> */}
    </div>
  )
}
export default header