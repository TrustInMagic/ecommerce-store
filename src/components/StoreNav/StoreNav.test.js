import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import StoreNav from './StoreNav';

describe('StoreNav', () => {
  it('inverts styles of the clicked button', () => {
    const mockCurrentFilter = 'Wishlist';

    render(<StoreNav currentFilter={mockCurrentFilter} />);

    const imgElements = screen.getAllByRole('img');
    const targetImgElement = imgElements[0];

    expect(targetImgElement).toHaveStyle(
      'filter: invert(10)',
      'transition: filter 0.3s'
    );
  });
  it('passes the correct filter to "filterBy" callback', () => {
    const mockFilterBy = jest.fn();

    render(<StoreNav filterBy={mockFilterBy} />);

    const imgElements = screen.getAllByRole('img');
    const targetImgElement = imgElements[1];

    userEvent.click(targetImgElement);

    expect(mockFilterBy).toHaveBeenCalledWith('Ratings')
  });
});
