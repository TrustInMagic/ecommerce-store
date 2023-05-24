import React from 'react';

const CustomSvg = ({ fill, path, stroke, strokeWidth }) => {
  return (
    <svg fill={fill} width='64px' height='64px' viewBox='0 0 24 24'>
      <g>
        <path d={path} stroke={stroke} strokeWidth={strokeWidth} />
      </g>
    </svg>
  );
};

export default CustomSvg;
