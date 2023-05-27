'use client';

import { useEffect, useState } from 'react';

export default function useUrlHash(cb) {
  const [hash, setHash] = useState('');

  function handleUrlChange() {
    setHash(window.location.hash);
    cb(window.location.hash);
  }

  useEffect(() => {
    window && window.addEventListener('popstate', handleUrlChange);

    return () =>
      window && window.removeEventListener('popstate', handleUrlChange);
  }, []);

  return hash;
}
