import React from 'react';
import Nav from './Nav';

const Landing = () => {
  const leftNavButtons = [
    { name: 'Game Store', href: '/', iconSrc: '' },
    { name: 'Browse Store', href: '/store', iconSrc: '' },
  ];

  const rightNavButtons = [
    { name: 'trustinmagic', href: '', iconSrc: '' },
    { name: 'cart', href: '/cart', iconSrc: '' },
  ];

  return <Nav leftButtons={leftNavButtons} rightButtons={rightNavButtons} />;
};

export default Landing;
