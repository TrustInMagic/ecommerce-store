const CartSvg = ({full}) => {
  return (
    <svg
      version='1.0'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      width='20px'
      height='20px'
      viewBox='0 0 64 64'
      fill='#ffffff'
      stroke='#ffffff'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />

      <g id='SVGRepo_tracerCarrier' />

      <g id='SVGRepo_iconCarrier'>
        <g>
          <path
            fill={full ? '#22c55e' : '#FFFFFF'}
            d='M44,20v-8c0-6.633-5.371-12-12-12S20,5.367,20,12v8H8v40c0,2.211,1.789,4,4,4h40c2.211,0,4-1.789,4-4V20H44 z M28,12c0-2.211,1.789-4,4-4s4,1.789,4,4v8h-8V12z M48,56H16V28h32V56z'
          />
          <rect
            x='16'
            y='28'
            fill={full ? '#22c55e' : '#000000'}
            width='32'
            height='28'
          />
        </g>
      </g>
    </svg>
  );
};

export default CartSvg;
