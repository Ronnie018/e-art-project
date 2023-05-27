'use client';

import Container from '../styled';
import Image from 'next/image';

const OurVision = () => {
  return (
    <Container>
      <div className='text'>
        <header className='page-header-secondary'>
          <h1>Our Vision</h1>
        </header>
        <p>
          At E-Art, we imagine a future where art is at the heart of our daily
          lives and is accessible and celebrated by everyone. Our vision is to
          be the premier destination for renting, discovering, and experiencing
          unique and diverse art from all around the world. We are committed to
          supporting and promoting the arts community and creating a platform
          that inspires and brings people together to illuminate, inspire, and
          motivate through the arts. Our goal is to lead the way and build a
          digital space where the spirit of creativity can flourish. Join us on
          our mission to make art an integral part of life by celebrating the
          beauty and diversity of art.
        </p>
      </div>
      <div className='img-wrapper'>
        <Image
          src='/images/about/vision.png'
          alt='vision'
          width='800'
          height='1200'
        />
      </div>
    </Container>
  );
};

export default OurVision;
