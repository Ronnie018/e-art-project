'use client';
import { useContext } from 'react';

import Link from './Link';
import { App } from '@app/contexts/app';
import useSetPath from '../hooks/useSetPath';

const Navbar = () => {
  const { setNavlist } = useContext(App);

  useSetPath(setNavlist);

  return (
    <nav className='sm:h-16 shadow-2xl shadow-l-black'>
      <div className='container mx-auto w-10/12 h-full flex sm:justify-between justify-center items-center flex-wrap gap-8 sm:py-0 py-10'>
        <Link href={'/'}>
          <img src='/images/logo.svg' alt='company logo' />
        </Link>
        <ul className='flex space-x-10 text-sm font-medium text-white'>
          <li>
            <Link href={'/about-us'}>About Us</Link>
          </li>
          <li>
            <Link href={'/artists/all'}>Artists</Link>
          </li>
          <li>
            <Link href={'/join-us'}>Join Us</Link>
          </li>
        </ul>
        <button>
          <span className='text-purple font-text-xl text-nav-lg'>
            Subscribe Now
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
