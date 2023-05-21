import React from "react"
import Nav from "./Nav"

const Store = () => {
  const leftNavButtons = [
    { name: 'Game Store', href: '/', iconSrc: '' },
    { name: 'Search Bar', href: '', iconSrc: '' },
  ];

  const rightNavButtons = [
    { name: 'trustinmagic', href: '', iconSrc: '' },
    { name: 'cart', href: '/cart', iconSrc: '' },
  ];

  return <Nav leftButtons={leftNavButtons} rightButtons={rightNavButtons} />;

}

export default Store