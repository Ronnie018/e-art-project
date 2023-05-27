'use client';

import { useEffect } from 'react';

import { changeSelected, getListItems } from '../../utils';

export default function useSetPath(setter) {
  useEffect(() => {
    if (!window) return;

    setter(() => {
      const navListItems = getListItems(window.location.pathname);
      return changeSelected(navListItems, window.location.pathname);
    });
  }, []);
  //
}
