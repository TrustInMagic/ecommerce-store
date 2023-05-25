import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterNav from './FilterNav';

describe('FilterNav', () => {
  it('applies the correct filter when specified', () => {
    const mockFilter = 'Reviews';

    render(<FilterNav filter={mockFilter} />);

    const filterSpan = screen.getByTestId('filter-span');

    expect(filterSpan.textContent).toBe('Reviews');
  });
  it('calls "clearFilter" when the respective button is clicked', () => {
    const mockClearFilter = jest.fn();

    render(<FilterNav clearFilter={mockClearFilter} />);

    const clearFilterButton = screen.getByRole('button', {
      name: 'Clear Filter',
    });

    userEvent.click(clearFilterButton);

    expect(mockClearFilter).toHaveBeenCalledTimes(1);
  });
});
