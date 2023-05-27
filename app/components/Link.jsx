'use client';

import NextLink from 'next/link';
import { App } from '../contexts/app';
import { changeSelected } from '@utils';
import { useContext } from 'react';
import { getListItems } from '../../utils/index';

export default function Link({ href, ...rest }) {
  const { setNavlist } = useContext(App);

  function handleClick() {
    setNavlist(() => {
      const navListItems = getListItems(href);
      //
      return changeSelected(navListItems, href);
    });
  }

  return <NextLink href={href} {...rest} onClick={handleClick} />;
}
