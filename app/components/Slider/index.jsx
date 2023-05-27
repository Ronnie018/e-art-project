'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import usePosition from '@app/hooks/usePosition';
import ArtistCard from '../ArtistsCard';

const StyledSlider = styled.div`
  height: 100%;
  .container {
    height: 100%;
    position: relative;

    * {
      transition: 300ms ease-in-out;
    }

    .n-0 {
      transform: translateY(40px) scale(1.2);
      z-index: 10;
    }
    .n-1 {
      transform: translateX(190px) translateY(0px);
      z-index: 9;
    }
    .n-2 {
      transform: translateX(86px) translateY(-42px) scale(0.9);
      filter: brightness(30%);
      .info {
        opacity: 0;
      }
    }
    .n-3 {
      transform: translateX(-86px) translateY(-42px) scale(0.9);
      filter: brightness(30%);
      .info {
        opacity: 0;
      }
    }
    .n-4 {
      transform: translateX(-190px) translateY(0px);
      z-index: 9;
    }

    @media (max-width: 640px) {
      .n-0 {
        transform: translate(0);
      }
      .n-1 {
        transform: none;
        opacity: 0;
      }
      .n-2 {
        transform: none;
        z-index: 8;
        filter: none;
        opacity: 0;
      }
      .n-3 {
        transform: none;
        z-index: 7;
        filter: none;
        opacity: 0;
      }
      .n-4 {
        transform: none;
        z-index: 6;
        opacity: 0;
      }
    }
  }
`;

export default function Slider({ artists, setArtists, ...rest }) {
  const [diff, setDiff] = useState(0);

  return (
    <StyledSlider {...rest}>
      <div className='container min-h-max mb-16'>
        {artists.map((artist) => (
          <ArtistCard
            artist={artist}
            key={artist.id}
            diff={diff}
            setDiff={setDiff}
          />
        ))}
      </div>
      <div className='flex mt-4 flex-wrap gap-20 sm:gap-6 justify-center relative'>
        <div className='dots flex justify-center gap-6 flex-grow'>
          {artists.map(({ id }) => (
            <Dot id={id} key={id} diff={diff} setDiff={setDiff} />
          ))}
        </div>
        <div className='w-max flex-grow-0 static sm:absolute right-0'>
          <Link
            href='/artists/all'
            className='bg-purple max-w-full px-16 sm:px-6 py-4 sm:py-1.5 rounded text-sm mt-4 cursor-pointer'
          >
            All Artists
          </Link>
        </div>
      </div>
    </StyledSlider>
  );
}

export function Dot({ id, diff, setDiff }) {
  const position = usePosition(diff, setDiff, id);

  return (
    <button type='button' onClick={() => setDiff(position)}>
      <svg
        width={position ? '8' : '11'}
        height={position ? '8' : '11'}
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5' cy='5' r='5' fill={position ? '#a8a8a8d4' : '#fff'} />
      </svg>
    </button>
  );
}
