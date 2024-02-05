import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { FriendsList } from '@/components';
describe('FriendsList', () => {
  test('fetches and displays friends correctly', async () => {
    // Mock the fetch function to return a specific response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(['Friend1', 'Friend2']),
    });

    render(<FriendsList />);

    // Wait for the component to render and fetch data
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://musicee.us-west-2.elasticbeanstalk.com/users/list_friends/username',
        expect.anything()
      );
    });

    // Check if Friends are rendered
    const friend1Element = screen.getByText('Friend1');
    const friend2Element = screen.getByText('Friend2');

    expect(friend1Element).toBeInTheDocument();
    expect(friend2Element).toBeInTheDocument();
  });

  test('handles fetch error', async () => {
    // Mock the fetch function to return an error response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    });

    render(<FriendsList />);

    // Wait for the component to render and fetch data
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://musicee.us-west-2.elasticbeanstalk.com/users/list_friends/username',
        expect.anything()
      );
    });

    // Check if error message is displayed
    const errorMessageElement = screen.getByText('Failed to fetch user-specific data: Not Found');
    expect(errorMessageElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
