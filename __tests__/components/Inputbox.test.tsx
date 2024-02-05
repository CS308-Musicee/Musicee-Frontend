import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Inputbox } from '@/components';
describe('Inputbox', () => {
    it('renders with the provided name', () => {
    render(<Inputbox name="Test Input" value="" onChange={() => {}} />);
    const nameLabel = screen.getByText('Test Input');
    expect(nameLabel).toBeInTheDocument();
  });


});
