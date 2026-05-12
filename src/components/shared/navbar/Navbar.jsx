'use client'
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/Wanderlust.png'
import NavLinks from './NavLinks';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
  const links = <ul className='flex items-center gap-5 justify-center'>
    <NavLinks href={'/'}>Home</NavLinks>
    <NavLinks href={'/allNav/destinations'}>Destinations</NavLinks>
    <NavLinks href={'/allNav/allDestinations'}>All Destinations</NavLinks>
    <NavLinks href={'/allNav/bookings'}>My Bookings</NavLinks>
    <NavLinks href={'/allNav/admin'}>Admin</NavLinks>
  </ul>
  
  const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 
    const user = session?.user
    console.log(user);
    const handleSignOut= async()=>{
    await authClient.signOut()
    }
    
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
          {!isPending && (
            <>
              {user ? (
                <div className="flex items-center gap-3">
                  <Link href={'/profile'}><Button>Profile</Button></Link>
                  {/* <Avatar>
                    <Avatar.Image alt='jhon doe' src={user?.image}>
                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                    </Avatar.Image>
                  </Avatar> */}
                  <Button  onClick={handleSignOut}
                    color="danger" 
                    variant="flat"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className='flex items-center gap-3'>
                  <Link href={'/auth/signin'}><Button>Login</Button></Link>
                  <Link href={'/auth/signup'}><Button variant="bordered">Sign Up</Button></Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;