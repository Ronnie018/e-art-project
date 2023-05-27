'use client';

import styled from 'styled-components';

const StyledElipsis = styled.div`
  display: flex;
  gap: 1rem;
  div {
    * {
      transition: 500ms ease-in-out;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    & div {
      height: 0px;
      width: 1px;
      background-color: #b4b4b4;
      &.active {
        height: 40px;
        margin-top: 0.6rem;
      }
    }
  }
`;

export default StyledElipsis;
