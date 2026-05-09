'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({children, href, className}) => {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <li>
      <Link href={href} 
      className={` border-2 px-2 py-1 border-green-500 rounded-xl
      ${className} 
      ${isActive? 
      'bg-green-500 text-bold' : 
      ''}`}>
      {children}
      </Link>
    </li>
  );
};

export default NavLinks;