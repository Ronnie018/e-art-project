'use client';

import NextLink from 'next/link';
import { App } from '../contexts/app';
import { changeSelected } from '@utils';
import { useContext } from 'react';

export default function Link({ href, ...rest }) {
  const { setNavlist } = useContext(App);

  return (
    <NextLink
      href={href}
      {...rest}
      onClick={() => {
        setNavlist((state) => changeSelected(state, href));
      }}
    />
  );
}
