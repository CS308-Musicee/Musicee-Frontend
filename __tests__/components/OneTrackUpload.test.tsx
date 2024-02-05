// import React from 'react';
// import { render, screen, fireEvent, act } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { setupServer } from 'msw/node';
// import OneTrackUpload from '@/components/OneTrackUpload';
// const server = setupServer(
//   // Define mock API endpoint for successful track addition
//   rest.post('http://musicee.us-west-2.elasticbeanstalk.com/tracks/add_track/', (req, res, ctx) => {
//     return res(ctx.json({ success: true }));
//   }),
//   // Define mock API endpoint for unsuccessful track addition
//   rest.post('http://musicee.us-west-2.elasticbeanstalk.com/tracks/add_track_error/', (req, res, ctx) => {
//     return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('OneTrackUpload Component', () => {
//   it('renders component with initial state', () => {
//     render(<OneTrackUpload />);

//     // Add your assertions here
//     expect(screen.getByLabelText('Track Name')).toBeInTheDocument();
//     // Add more assertions as needed
//   });

//   it('handles successful track addition', async () => {
//     render(<OneTrackUpload />);

//     // Mocking the server response for a successful track addition
//     server.use(
//       rest.post('http://musicee.us-west-2.elasticbeanstalk.com/tracks/add_track/', (req, res, ctx) => {
//         return res(ctx.json({ success: true }));
//       })
//     );

//     // Add your test logic here, for example, filling out the form and submitting it
//     fireEvent.change(screen.getByLabelText('Track Name'), { target: { value: 'Test Track' } });
//     fireEvent.change(screen.getByLabelText('Track Album'), { target: { value: 'Test Album' } });
//     fireEvent.change(screen.getByLabelText('Release Year'), { target: { value: '2022' } });
//     fireEvent.click(screen.getByText('Add Track'));

//     // Wait for the asynchronous operation to complete
//     await act(async () => {});

//     // Add assertions related to the successful track addition
//     expect(screen.getByText('Track added successfully!')).toBeInTheDocument();
//     // Add more assertions as needed
//   });

//   it('handles unsuccessful track addition', async () => {
//     render(<OneTrackUpload />);

//     // Mocking the server response for an unsuccessful track addition
//     server.use(
//       rest.post('http://musicee.us-west-2.elasticbeanstalk.com/tracks/add_track_error/', (req, res, ctx) => {
//         return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
//       })
//     );

//     // Add your test logic here, for example, filling out the form and submitting it
//     fireEvent.change(screen.getByLabelText('Track Name'), { target: { value: 'Test Track' } });
//     fireEvent.change(screen.getByLabelText('Track Album'), { target: { value: 'Test Album' } });
//     fireEvent.change(screen.getByLabelText('Release Year'), { target: { value: '2022' } });
//     fireEvent.click(screen.getByText('Add Track'));

//     // Wait for the asynchronous operation to complete
//     await act(async () => {});

//     // Add assertions related to the unsuccessful track addition
//     expect(screen.getByText('An error occurred during signup. Please try again.')).toBeInTheDocument();
//     // Add more assertions as needed
//   });
// });
