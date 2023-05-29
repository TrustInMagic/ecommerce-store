import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import './index.css';

const App = () => {
  const [isCartVisible, setCartVisible] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [cartContent, setCartContent] = React.useState([]);

  const openCart = () => {
    setCartVisible(true);
    setBlur(true);
  };

  const closeCart = () => {
    setCartVisible(false);
    setBlur(false);
  };

  const addToCart = (game) => {
    setCartContent((prevContent) => [
      { name: game.name, price: game.price },
      ...prevContent,
    ]);
  };

  const removeFromCart = (game) => {
    setCartContent((prevContent) =>
      prevContent.filter((iteratedGame) => iteratedGame.name !== game.name)
    );
  };

  return (
    <div className='app'>
      <Cart
        isCartVisible={isCartVisible}
        closeCart={closeCart}
        content={cartContent}
        removeFromCart={removeFromCart}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Landing
                openCart={openCart}
                cartContent={cartContent}
                isCartVisible={isCartVisible}
                closeCart={closeCart}
              />
            }
          />
          <Route
            path='/store'
            element={
              <Store
                openCart={openCart}
                addToCart={addToCart}
                cartContent={cartContent}
                isCartVisible={isCartVisible}
                closeCart={closeCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
