// getTracksData.test.js

import fetchMock from 'jest-fetch-mock';
import { getTracksData } from '../FriendsReco'; // Adjust the import path based on your project structure

// Mock the fetch function
fetchMock.enableMocks();

describe('getTracksData', () => {
   afterEach(() => {
       fetchMock.resetMocks();
   });

   it('fetches successfully data from an API', async () => {
       // Arrange
       const fakeData = { yourFakeData: 'value' };
       fetchMock.mockResponseOnce(JSON.stringify(fakeData));

       // Act
       const result = await getTracksData('your_track_id');

       // Assert
       expect(result).toEqual(fakeData);
       expect(fetchMock).toHaveBeenCalledWith(
           'http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_track_details/your_track_id',
           {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json',
               },
           }
       );
   });

   it('handles errors by throwing an exception', async () => {
       // Arrange
       fetchMock.mockResponseOnce('', { status: 404 });

       // Act & Assert
       await expect(getTracksData('nonexistent_track_id')).rejects.toThrowError(
           'HTTP error! Status: 404'
       );
   });
});
