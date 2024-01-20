"use client"
import { useEffect, useState, useRef } from 'react';
import { Musicard } from '@/components';
import { Console } from 'console';


interface Track {
  track_id: number;
  track_name: string;
  track_album: string;
  track_artist: string;
  track_release_year: number;
  // Add other properties as per your API response
}

export default function ListOfTheTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  useEffect(() => {
    const getTracksData = async () => {
      try {
        const res = await fetch("http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_tracks", { cache: "no-store" });
        const data = await res.json();
        setTracks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setTracks([]);
      }
    };

    getTracksData();
  }, []);


  return (
    <div>
      <div>

      
      <div className="overflow-x-auto">
      
        <div className="flex">
          {tracks.map((track) => (
            <div key={track.track_id} style={{ marginRight: '20px' }}>
              <Musicard
                tName={track.track_name}
                tAlbum={track.track_album}
                tArtist={track.track_artist}
                tId={track.track_id}
                tRY={track.track_release_year}
              />
            </div>
          ))}
        </div>
      </div>
      </div>

    </div>
  );
}
