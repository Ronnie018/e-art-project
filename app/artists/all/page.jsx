'use client';

import { useContext, useState, useEffect } from 'react';
import DataList from '@app/components/DataList';

import { App } from '@app/contexts/app';

const Artists = async () => {
  const [artists, setArtists] = useState([]);

  const { setImage } = useContext(App);

  useEffect(() => {
    setImage('e-art-bg.png');

    const fetchArtists = async () => {
      const response = await fetch(`/api/artists/all`);
      const data = await response.json();

      setArtists(
        data.map((artist, i) => {
          return { ...artist, id: i };
        })
      );
    };

    fetchArtists();
    return () => {};
  }, []);

  return (
    <div className='flex pt-20 text-white'>
      <div className='min-h-max h-96 flex flex-col w-9/12 mx-auto pb-12 sm:pb-0 gap-20'>
        <header className='page-header'>
          <h1>All Artists</h1>
        </header>
        <div className='container'>
          <DataList items={artists}></DataList>
        </div>
      </div>
    </div>
  );
};

export default Artists;
