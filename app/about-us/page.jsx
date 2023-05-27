'use client';

import Container from './styled';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Container>
      <div className='text'>
        <header className='page-header-secondary'>
          <h1>About Us</h1>
        </header>
        <p>
          Discover the world of art like never before with our virtual gallery.
          Our platform is dedicated to bringing together artists and art
          enthusiasts from around the world and providing them with a space to
          showcase their work and share their passion and creativity. Whether
          you're an emerging artist looking to imprint your creativity or an art
          lover searching for that one-of-a-kind piece, our virtual gallery is
          the perfect place to connect and explore the world of art. Join our
          community of artists and art lovers, and be inspired by the unique and
          captivating works on display. Browse our curated selection of pieces
          by some of the most talented artists from around the world and find
          the perfect piece to add to your collection. Our mission is to enrich
          lives through the power of art, and we're dedicated to ensuring that
          it reaches everyone who explores the gallery.
        </p>
      </div>
      <div className='img-wrapper'>
        <Image src='/images/about/about.png' alt='' width='800' height='1200' />
      </div>
    </Container>
  );
};

export default AboutUs;
