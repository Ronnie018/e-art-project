'use client';

import Container from '../styled';
import Image from 'next/image';

const OurMission = () => {
  return (
    <Container>
      <div className='text'>
        <header className='page-header-secondary'>
          <h1>Our Mission</h1>
        </header>
        <p>
          is to promote and support the arts community by providing a
          high-quality experience for both renters and explorers. E-Art is
          driven by the belief that art has the power to inspire, enrich, and
          bring people together, and our mission is to harness that power. Join
          us in our mission to celebrate the arts and experience the power of
          creativity.
        </p>
      </div>
      <div className='img-wrapper'>
        <Image
          src='/images/about/mission.png'
          alt='mission'
          width='800'
          height='1200'
        />
      </div>
    </Container>
  );
};

export default OurMission;
