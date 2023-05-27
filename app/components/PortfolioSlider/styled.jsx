'use client';

import styled from 'styled-components';

const StyledPortfolioSlider = styled.div`
  .main {
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    max-width: 600px;
    display: flex;
    gap: 1rem;
    user-select: none;
    &,
    * {
      cursor: grab;
    }

    .slide-item {
      scroll-snap-align: center;
      flex: 0 0 calc(20% - 0.8rem);
      img {
        pointer-events: none;
      }
    }

    ::-webkit-scrollbar {
      height: 0;
    }

    @media (max-width: 768px) {
      .slide-item {
        flex: 0 0 calc(33.33% - 0.66rem);
      }
    }

    @media (max-width: 400px) {
      .slide-item {
        flex: 0 0 100%;
      }
    }
  }

  .options {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    gap: 1rem;
  }
`;

export default StyledPortfolioSlider;
