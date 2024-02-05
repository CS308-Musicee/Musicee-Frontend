// __tests__/app/components/FileUploadForm.test.tsx
import React from 'react';
import { render,screen, fireEvent, waitFor, act } from '@testing-library/react';
import { CommentButton } from '@/components';
import '@testing-library/jest-dom';

describe('FileUploadForm', () => {
  const handleSubmitMock = jest.fn();
  it('should upload a file and display success message', async () => {
    render(<CommentButton />);
    const commentButton = screen.getByText('Comment');
    expect(commentButton).toBeInTheDocument();

  // Assert the content of the success message
  });

  it('should call handleSubmit when button is clicked', async () => {
    
    render(<CommentButton />);

    // Simulate a file change (optional if you want to test the entire process)
    const outCommentButton = screen.getByTestId('outComment');
    fireEvent.click(outCommentButton);
    expect(screen.getByText('Comment Section')).toBeInTheDocument();

    // Assert that handleSubmit was called
  });

  it('should terminate modal when button is clicked', async () => {
    
    render(<CommentButton />);

    // Simulate a file change (optional if you want to test the entire process)
    const outCommentButton = screen.getByTestId('outComment');
    fireEvent.click(outCommentButton);
    expect(screen.getByText('Comment Section')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Comment Section')).not.toBeInTheDocument();

    // Assert that handleSubmit was called
  });

  it('The modal is initially closed', () => {
    render(<CommentButton />);
    
    // Check if the modal is not in the document
    expect(screen.queryByText('Comment Section')).not.toBeInTheDocument();
  });
});
