import React from 'react';
import Link from "next/link";

const Navbar = () => {

  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className='flex w-fit gap-10 mx-auto font-bold py-4 text-blackish'>
                <Link className='navbar__link relative' href='/'>
                    Home
                </Link>
                <Link className='navbar__link relative' href='/video'>
                    Video
                </Link>
                <Link className='navbar__link relative' href='/blog'>
                    Blog
                </Link>
                <Link className='navbar__link relative' href='/profile'>
                    Profile
                </Link>
                <Link className='navbar__link relative' href='/about'>
                    About Us
                </Link>
                <Link className='navbar__link relative' href='/contact'>
                    Contact us
                </Link>
                <Link className='navbar__link relative' href='/order'>
                    Order now
                </Link>
            </div>
        </div>  
    </div>
  )
}

export default Navbar
