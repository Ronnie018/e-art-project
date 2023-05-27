'use client';

import Link from '../Link';
import { useRef, useState } from 'react';
import StyledPortfolioSlider from './styled';
import Dragger from './Dragger.ts';

const PortfolioSlider = ({ items = [] }) => {
  const scroller = useRef();
  const dragger = new Dragger(scroller.current);

  const [active, setActive] = useState(0);

  return (
    <StyledPortfolioSlider>
      <div
        className='main'
        ref={scroller}
        onMouseDown={(e) => dragger.handleMouseDown(e)}
        onMouseUp={(e) => dragger.handleMouseUp(e)}
        onMouseLeave={(e) => dragger.handleMouseLeave(e)}
        onMouseMove={(e) => dragger.handleMouseMove(e)}
      >
        {items.map(({ id, name, url }, i) => (
          <div
            className='slide-item'
            id={i}
            onMouseDown={() => {
              setActive(() => Math.floor(i / 5) * 5);
            }}
          >
            <Link href={`/art/${id}`} draggable='false'>
              <div>
                <img src={'/' + url} alt={name} width='100%' />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='options'>{renderDot(items, Dot, active, setActive)}</div>
    </StyledPortfolioSlider>
  );
};

export default PortfolioSlider;

function renderDot(items, Component, active, setActive) {
  return items.map(({ id }, i) => {
    if (i % 5 === 0 || i === 0)
      return (
        <Component
          key={id}
          id={i}
          i={i}
          setActive={setActive}
          active={active}
        />
      );
  });
}

function Dot({ id, setActive, active, i }) {
  let isActive = active === i;

  return (
    <a type='button' onClick={() => setActive(i)} href={`#${id}`}>
      <svg
        width={isActive ? '11' : '8'}
        height={isActive ? '11' : '8'}
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5' cy='5' r='5' fill={isActive ? '#fff' : '#a8a8a8d4'} />
      </svg>
    </a>
  );
}
