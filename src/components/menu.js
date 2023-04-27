import Link from 'next/link'
import React from 'react'


export const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><Link href='/home' className='link'>Home</Link></li>
            <li><Link href='/about' className='link'>About</Link></li>
            <li><Link href='/contact' className='link'>Contact</Link></li>
        </ul>
    </div>
  )
}
