import Link from 'next/link';
import React from 'react'

let pages = ["Home", "About", "Contact", "Blogs"];


const Header = () => {
  return (
    <nav className='flex justify-between py-4 w-[1280px] mx-auto'>
        <div>
            <Link href="/">
                <img src="/assets/logo.png" alt='Logo' className='w-[140px]'/>
            </Link>
        </div>
        <ul className='flex gap-6 items-center'>
            {pages.map(page => (
                <li key={page}>
                    <Link href="#">{page}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Header