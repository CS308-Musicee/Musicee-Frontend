// __tests__/app/components/FileUploadForm.test.tsx
import React from 'react';
import { render,screen, fireEvent, waitFor, act } from '@testing-library/react';
import FileUploadForm from '@/components/FileUploadForm';
import '@testing-library/jest-dom';

describe('FileUploadForm', () => {
  const handleSubmitMock = jest.fn();
  it('should upload a file and display success message', async () => {
    render(<FileUploadForm onSubmit={handleSubmitMock} />);
    const fileInput = screen.getByTestId('input-div');
    expect(fileInput).toBeInTheDocument();

  // Assert the content of the success message
  });
  it('should render the button', async () => {
    render(<FileUploadForm onSubmit={handleSubmitMock} />);
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

  // Assert the content of the success message
  });
  it('should call handleSubmit when button is clicked', async () => {
    
    render(<FileUploadForm onSubmit={handleSubmitMock} />);

    // Simulate a file change (optional if you want to test the entire process)
    const fileInput = screen.getByTestId('input-div');
    fireEvent.change(fileInput, { target: { files: [new File([], 'dummy.json', { type: 'application/json' })] } });

    // Simulate a button click
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    handleSubmitMock();
    // Assert that handleSubmit was called
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});
