import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

describe('Cart', () => {
  describe('renders Cart visible only when isCartVisible state is true', () => {
    it('applies class "invisible" to Cart when isCartVisible is false', () => {
      const mockIsCartVisible = false;

      render(
        <Cart
          isCartVisible={mockIsCartVisible}
          closeCart={jest.fn}
          content={[]}
          removeFromCart={jest.fn}
        />
      );

      const cartEl = screen.queryByTestId('cart-test');

      expect(cartEl).toHaveClass('invisible');
    });
    it('applies class "visible" to Cart when isCartVisible is true', () => {
      const mockIsCartVisible = true;

      render(
        <Cart
          isCartVisible={mockIsCartVisible}
          closeCart={jest.fn}
          content={[]}
          removeFromCart={jest.fn}
        />
      );

      const cartEl = screen.getByTestId('cart-test');

      expect(cartEl).toHaveClass('visible');
    });
  });
  it('calls closeCart function when the appropriate button is clicked', () => {
    const mockCloseCart = jest.fn();

    render(
      <Cart
        isCartVisible={true}
        closeCart={mockCloseCart}
        content={[]}
        removeFromCart={jest.fn}
      />
    );

    const closeCartEl = screen.getByTestId('close-cart-test');

    userEvent.click(closeCartEl);

    expect(mockCloseCart).toHaveBeenCalled();
  });
  describe('renders content correctly from content prop', () => {
    const mockContent = [
      { name: 'Dota', price: '20' },
      { name: 'Starcraft', price: '25' },
    ];

    it('renders the appropriate number of elements', () => {
      render(
        <Cart
          isCartVisible={true}
          closeCart={jest.fn}
          content={mockContent}
          removeFromCart={jest.fn}
        />
      );

      const cartItems = screen.getAllByTestId('cart-item');

      expect(cartItems).toHaveLength(2);
    });
    it('displays the appropriate name of the game in the Cart', () => {
      render(
        <Cart
          isCartVisible={true}
          closeCart={jest.fn}
          content={mockContent}
          removeFromCart={jest.fn}
        />
      );

      const firstItemNameEl = screen.getByTestId('item-name-0');

      expect(firstItemNameEl).toHaveTextContent(/dota/i);
    });
    it('displays the appropriate price of the game in the Cart', () => {
      render(
        <Cart
          isCartVisible={true}
          closeCart={jest.fn}
          content={mockContent}
          removeFromCart={jest.fn}
        />
      );

      const firstItemPriceEl = screen.getByTestId('item-price-0');

      expect(firstItemPriceEl).toHaveTextContent('$20');
    });
  });
  describe('calls removeFromCart function correctly when the appropriate button is clicked', () => {
    const mockContent = [
      { name: 'Dota', price: '20' },
      { name: 'Starcraft', price: '25' },
    ];

    const mockRemoveFromCart = jest.fn();

    it('calls removeFromCart function once when the appropriate button is clicked', () => {
      render(
        <Cart
          isCartVisible={true}
          closeCart={jest.fn}
          content={mockContent}
          removeFromCart={mockRemoveFromCart}
        />
      );

      const removeFromCartButton = screen.getByTestId('remove-item-0');

      userEvent.click(removeFromCartButton);

      expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
    });

    it('calls removeFromCart function with the appropriate arguments', () => {
      render(
        <Cart
          isCartVisible={true}
          closeCart={jest.fn}
          content={mockContent}
          removeFromCart={mockRemoveFromCart}
        />
      );

      const removeFromCartButton = screen.getByTestId('remove-item-0');

      userEvent.click(removeFromCartButton);

      expect(mockRemoveFromCart).toHaveBeenCalledWith({
        name: 'Dota',
        price: '20',
      });
    });
  });

});
