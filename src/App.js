import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import './index.css';

const App = () => {
  const [cartVisible, setCartVisible] = React.useState(false);
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

  const removeGame = (game) => {
    setCartContent((prevContent) =>
      prevContent.filter((iteratedGame) => iteratedGame.name !== game.name)
    );
  };

  return (
    <div className='app'>
      <Cart
        cartVisible={cartVisible}
        closeCart={closeCart}
        content={cartContent}
        removeGame={removeGame}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Landing
                openCart={openCart}
                blur={blur}
                cartContent={cartContent}
              />
            }
          />
          <Route
            path='/store'
            element={
              <Store
                openCart={openCart}
                blur={blur}
                addToCart={addToCart}
                cartContent={cartContent}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
