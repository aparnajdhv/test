import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export const Menu = () => {
  const [menuItem,setmenuItem]=React.useState('');
  
  const fnClick=(eve)=>{
    setmenuItem(eve.target.id);

  }

  useEffect(()=>{
    let pathName=window.location.pathname;
    setmenuItem(pathName.slice(1)|| 'home')
  },[])

  return (
    <div className='menu'>
        <ul>
            <li><Link id='home' className={menuItem=='home' && 'activeMenu'} onClick={fnClick} href='/home'>Home</Link></li>
            <li><Link id='about' className={menuItem=='about' && 'activeMenu'} onClick={fnClick} href='/about'>About</Link></li>
            <li><Link id='contact' className={menuItem=='contact' && 'activeMenu'} onClick={fnClick} href='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}
