import React from 'react';

const Button = ({ children, ...rest }) => {
  return (
    <Meta
      {...rest}
      className='bg-purple px-14 py-1.5 rounded-full text-sm mt-4 cursor-pointer'
    >
      {children}
    </Meta>
  );
};

export default Button;
