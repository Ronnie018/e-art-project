'use client';

import styled from 'styled-components';

const StyledLoading = styled.div`
  min-height: 100vh;
  background-image: url(/images/load-bg.png);
  background-position: center;
  background-size: cover;
  .container {
    animation: appear 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    @keyframes appear {
      from {
        transform: translateX(1000%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export default function Loading() {
  return (
    <StyledLoading className='overflow-x-hidden max-w-screen'>
      <div className='container w-96 max-w-full m-auto flex flex-col gap-4 items-center text-center text-load-lg font-medium text-l-gray mt-24'>
        <div className='img-wrapper w-11/12 mx-auto'>
          <img src='/images/load.svg' alt='loading' width='100%' />
        </div>
        <div className='text'>
          <h1>Loading...</h1>
          <h3 className='mt-2'>
            Are you ready to try a new Art <br />
            <span> Exhibition experience?</span>
          </h3>
        </div>
      </div>
    </StyledLoading>
  );
}
