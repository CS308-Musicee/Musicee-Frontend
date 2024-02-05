import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Musicard } from '@/components';
// Mocking the fetch function
const originalFetch = global.fetch;
global.fetch = jest.fn();

// Mocking localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

describe('Musicard Component', () => {
  // Mock data for testing
  const testData = {
    tName: 'Track Name',
    tArtist: ['Artist1', 'Artist2'],
    tId: '123',
    tRY: 4,
    tComment: ['Comment1', 'Comment2'],
  };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('renders component with initial state', () => {
    render(<Musicard {...testData} />);
    
    // Add your assertions here
    expect(screen.getByText('Track Name')).toBeInTheDocument();
    expect(screen.getByText('Artist1')).toBeInTheDocument();
    expect(screen.getByText('Artist2')).toBeInTheDocument();
    // Add more assertions as needed
  });



  // Add more test cases as needed, such as testing comment handling, etc.
});
