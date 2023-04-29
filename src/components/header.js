import React from 'react'

 const header = () => {
  return (
    <div className='header'>
      <div className='logo' ><i class='fas fa-dove' style='font-size:36px'></i></div>
      <div className='signInUp'>
          <a className='signUp '>Sign Up</a>
          <a className='login '>Sign In</a>
          
          
      </div>
    </div>
  )
}
export default header