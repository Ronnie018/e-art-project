import { useEffect } from 'react';

import { changeSelected } from '../../utils';

export default function useSetPath(setter) {
  useEffect(() => {
    if (!window) return;

    setter(() => {
      const navListItems = window.location.pathname.startsWith('/about-us')
        ? [
            { name: 'About Us', link: '/about-us', active: true },
            { name: 'Founder', link: '/about-us/founder', active: false },
            { name: 'Mission', link: '/about-us/mission', active: false },
            { name: 'Vision', link: '/about-us/vision', active: false },
          ]
        : [
            { name: 'Welcome To E-ART', link: '/', active: false },
            { name: 'Artists', link: '/artists', active: false },
            { name: 'feedbacks', link: '/feedbacks', active: false },
            { name: 'Join Us', link: '/join-us', active: false },
          ];
      return changeSelected(navListItems, window.location.pathname);
    });
  }, []);
  //
}
