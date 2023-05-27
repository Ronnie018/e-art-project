'use client';

import React, { useContext } from 'react';

import { App } from '@app/contexts/app';

const Background = () => {
  const { image } = useContext(App);

  return (
    <div
      className='bg-t-gray outline outline-1 outline-slate-900 absolute top-0 left-0 w-full h-full bg-bottom bg-no-repeat layer layer--light'
      style={{ backgroundImage: `url(/images/${image})`, zIndex: '-100' }}
    />
  );
};

export default Background;
