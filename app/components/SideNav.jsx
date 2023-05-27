'use client';

import { useContext, useState } from 'react';
import Link from './Link';
import { App } from '../contexts/app';
import ElipsisList from './Elipsis';

export default function SideNav() {
  const { navlist } = useContext(App);

  return (
    <div className='hidden sm:flex justify-center sm:justify-start items-center my-8'>
      <ul>
        {navlist &&
          navlist.map(({ name, link, active }) => {
            return (
              <li className='flex gap-6 items-center mb-3' key={link}>
                <ElipsisList active={active}>
                  <Link
                    href={link}
                    className={`
                      leading-3 ${
                        active ? 'text-white' : 'text-nav-gray text-sm'
                      }`}
                  >
                    {name}
                  </Link>
                </ElipsisList>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
