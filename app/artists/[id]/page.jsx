'use client';

import { useState, useEffect, useContext } from 'react';
import { App } from '@app/contexts/app';

import { useSearchParams } from 'next/navigation';
import ArtistCard from '@app/components/ArtistsCard';
import Link from '@app/components/Link';
import PortfolioSlider from '@app/components/PortfolioSlider';

const Artist = ({ params }) => {
  const [artist, setArtist] = useState([]);

  const { setImage } = useContext(App);

  useEffect(() => {
    setImage('e-art-bg.png');

    const fetchArtist = async () => {
      const response = await fetch(`/api/artists/?id=${params.id}`);
      const { artist } = await response.json();

      setArtist(artist);
    };

    fetchArtist();
    return () => {};
  }, []);

  return (
    <div className='container pt-16 text-white'>
      <div className='min-h-max h-96 flex flex-col w-9/12 gap-x-20 gap-y-4 mx-auto pb-12 sm:pb-0'>
        <header className='page-header'>
          <h1>All Artists</h1>
        </header>
        <div className='flex items-start mb-12 gap-12  flex-wrap justify-center'>
          <div className='img-wrapper w-36 d-shadow flex-grow-0 h-fit'>
            <img src={`/${artist.image}`} alt={artist.name} width={'100%'} />
          </div>
          <div
            className='flex-1'
            style={{
              maxWidth: '450px',
            }}
          >
            <div className='info mb-8'>
              <h1 className='text-2xl tracking-wide'>{artist.name}</h1>
              <span className='text-xl font-secondary italic font-thin'>
                {artist.country}
              </span>
            </div>
            <p className='leading-5 font-extralight tracking-wide'>
              {artist.description}
            </p>
          </div>
        </div>
        <section>
          <div className='section-header mb-8'>
            <h2>Portfolio</h2>
          </div>
          <PortfolioSlider items={artist.portfolio} />
        </section>
      </div>
    </div>
  );
};

export default Artist;
