'use client';

import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-gap: 5rem;
  align-items: center;
  padding: 2rem;

  .text {
    header {
      margin-bottom: 1rem;
    }
    color: white;
    font-weight: 200;
    text-align: justify;
  }
  .img-wrapper {
    width: 320px;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    .img-wrapper {
      width: 100%;
    }
  }
`;

export default Container;
