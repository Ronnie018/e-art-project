'use client';

import { createContext, useState } from 'react';

export const App = createContext(null);

const AppContext = ({ children }) => {
  const [image, setImage] = useState('home-bg.png');

  const [navlist, setNavlist] = useState([
    { name: 'Welcome To E-ART', link: '/', active: true },
    { name: 'Artists', link: '/artists', active: false },
    { name: 'feedbacks', link: '/feedbacks', active: false },
    { name: 'Join Us', link: '/join-us', active: false },
  ]);

  return (
    <App.Provider value={{ image, setImage, navlist, setNavlist }}>
      {children}
    </App.Provider>
  );
};

export default AppContext;
