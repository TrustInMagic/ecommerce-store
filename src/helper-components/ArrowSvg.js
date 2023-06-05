import React from 'react';

const ArrowSvg = ({path, fill}) => {
  return (
    <svg
      width='64px'
      height='64px'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
    >
      <g id='SVGRepo_iconCarrier'>
        <path
          d={path}
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default ArrowSvg