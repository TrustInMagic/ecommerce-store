import React from 'react';

const Nav = ({ leftButtons, rightButtons }) => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        {leftButtons.map((button) => {
          return button.name !== 'Search Bar' ? (
            <a className='nav-button' key={button.name} href={button.href}>
              <img src={button.iconSrc} alt='' />
              <div className='button-name'>{button.name}</div>
            </a>
          ) : (
            <input
              type='search'
              placeholder='Search Games...'
              key={button.name}
            />
          );
        })}
      </div>
      {rightButtons.map((button) => {
        return (
          <a className='nav-button' key={button.name} href={button.href}>
            <img src={button.iconSrc} alt='' />
            <div className='button-name'>{button.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
