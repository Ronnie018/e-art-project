'use client';
import StyledElipsis from './styled';

const ElipsisList = ({ children, active }) => {
  return (
    <StyledElipsis>
      <div>
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='5' cy='5' r='5' fill='white' />
        </svg>
        <div className={active ? 'active' : ''} />
      </div>
      {children}
    </StyledElipsis>
  );
};

export default ElipsisList;
