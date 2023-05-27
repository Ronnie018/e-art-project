'use client';

import styled from 'styled-components';
import ArtistCard from '../ArtistsCard';

export const StyledDataList = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > *{
    flex: 0 1 27%;
  }
`;

export default function DataList({ items }) {
  return (
    <StyledDataList>
      {items.map((artist, i) => (
        <ArtistCard artist={artist} key={i} />
      ))}
    </StyledDataList>
  );
}
