import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/Wanderlust.png'
import NavLinks from './NavLinks';
const Navbar = () => {
  const links = <ul className='flex items-center gap-5 justify-center'>
    <NavLinks href={'/'}>Home</NavLinks>
    <NavLinks href={'/allNav/destinations'}>Destinations</NavLinks>
    <NavLinks href={'/allNav/bookings'}>My Bookings</NavLinks>
    <NavLinks href={'/allNav/admin'}>Admin</NavLinks>
  </ul>
  return (
    <section className='mt-6 bg-base-300'>
      <div className='flex justify-between items-center max-w-310 mx-auto'>
      <ul>
      {links}
      </ul>
      <div className='flex justify-center'>
        <Image className='w-40 h-auto'  width={100} height={100} src={Logo} alt='Logo'/>
      </div>
      <div className='flex items-center gap-5'>
        <Link href={'/'}><Button>Profile</Button></Link>
        <Link href={'/auth/signin'}><Button>Login</Button></Link>
        <Link href={'/auth/signup'}><Button>Sign Up</Button></Link>
      </div>
      </div>
    </section>
  );
};

export default Navbar;