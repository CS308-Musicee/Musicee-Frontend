"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';


interface TrackForm {
    track_name: string;
    track_artist: string[];
    track_album: string;
    track_release_year: number;
}


const OneTrackUpload: React.FC = () => {
    const [error, setError] = useState<string | null>(null); // State to hold error message
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const [trackForm, setTrackForm] = useState<TrackForm>({
        track_name: '',
        track_artist: [''],
        track_album: '',
        track_release_year: 0,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTrackForm((prevForm) => ({
            ...prevForm,
            [name]: name === 'track_artist' ? [value] : value,
        }));
    };

    const handleArtistChange = (index: number, value: string) => {
      const updatedArtists = [...trackForm.track_artist];
      updatedArtists[index] = value;
      setTrackForm((prevForm) => ({
        ...prevForm,
        track_artist: updatedArtists,
      }));
    };
  
    const addArtistInput = () => {
      setTrackForm((prevForm) => ({
        ...prevForm,
        track_artist: [...prevForm.track_artist, ''],
      }));
    };

    const handleManualSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Logic for manual submission here
            const response = await fetch('http://musicee.us-west-2.elasticbeanstalk.com/tracks/add_track/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(trackForm),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Server response:', result);
                console.log('Track added successfully');
                setSuccessMessage('Track added successfully!');
            } else {
                //const errorResult = await response.json();
                //console.error('Track addition failed:', errorResult);
                setError('An error occurred during signup. Please try again.');
            }
        } catch (error) {
            //console.error('Error adding track:', error);

            setError('An error occurred during signup. Please check your internet connection and try again.');

            // Reset success message state
            setSuccessMessage(null);
        }
    };


    return (
        <div>
        <form onSubmit={handleManualSubmit}>
          <div className="mb-4">
            <div className='text-4xl mb-8'>
                Add Track Manually
            </div>
            <label htmlFor="track_name" className="block text-gray-700 text-sm font-bold mb-2">
              Track Name:
            </label>
            <input
              type="text"
              id="track_name"
              name="track_name"
              value={trackForm.track_name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
  
          <div className="mb-4">
          <label htmlFor="track_artist" className="block text-gray-700 text-sm font-bold mb-2">
            Track Artists:
          </label>
          {trackForm.track_artist.map((artist, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={artist}
                onChange={(e) => handleArtistChange(index, e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addArtistInput}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Artist
          </button>
        </div>
  
          <div className="mb-4">
            <label htmlFor="track_album" className="block text-gray-700 text-sm font-bold mb-2">
              Track Album:
            </label>
            <input
              type="text"
              id="track_album"
              name="track_album"
              value={trackForm.track_album}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="track_release_year" className="block text-gray-700 text-sm font-bold mb-2">
              Release Year:
                    </label>
                    <input
                        type="number"
                        id="track_release_year"
                        name="track_release_year"
                        value={trackForm.track_release_year}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div>
                    {error && <div className="text-red-500">{error}</div>}
                    {successMessage && <div className="text-green-500">{successMessage}</div>}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Track
                    </button>
                </div>

            </form>


      </div>
    )
}

export default OneTrackUpload;