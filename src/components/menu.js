import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export const Menu = () => {
  const [menuItem,setMenuItem]=useState('')
  const [isMobileMenu,setIsMobileMenu]=useState(false)
  const [right,setRight]=useState(-150)

  //mobile menu
  const getBrowserWidth=()=>{
    let timeoutId;
    let flag=true
    setIsMobileMenu(document.body.offsetWidth <600 ? true : false)
    window.addEventListener('resize',()=>{
      let width=document.body.offsetWidth
    
      if(flag){
        flag=false;
        setIsMobileMenu(width <600 ? true : false)
      }
      clearTimeout(timeoutId)
      timeoutId=setTimeout(()=>{
        setIsMobileMenu(width <600 ? true : false)
      },500)
   
    })
  }

  
  useEffect(()=>{
    //menu
      let pathName=window.location.pathname
      setMenuItem(pathName.slice(1) || 'home')
      //mobile-menu
      getBrowserWidth()
  },[])
  
  const fnClick=(eve)=>{
    //menu
       setMenuItem(eve.target.id)

       //mobile menu
       if(isMobileMenu){
        setRight(-150)
       }
  }
  const fnMobileMenuBtnClick=()=>{
    setRight(right === 0 ? -150 : 0)
  }
  const fnClose=()=>{
    setRight(-150)
  }

  return (
    <div className='menu'>
      {isMobileMenu && <button onClick={fnMobileMenuBtnClick} className='mobile-menu-btn'><i class="fa fa-bars"></i></button>}
      
      <ul style={{right:right}} className={isMobileMenu ? 'mobile-menu' : 'menu'}>
      {isMobileMenu && <span onClick={fnClose} className='close-btn'>x</span>}
            <li><Link id='home' className={menuItem=='home' && 'activeMenu' || 'menuList'} onClick={fnClick} href='/home'>Home</Link></li>
            <li><Link id='about' className={menuItem=='about' && 'activeMenu' || 'menuList'} onClick={fnClick} href='/about'>About</Link></li>
            <li><Link id='contact' className={menuItem=='contact' && 'activeMenu' || 'menuList'} onClick={fnClick} href='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}
