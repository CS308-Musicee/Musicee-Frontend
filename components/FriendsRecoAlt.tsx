"use client"

import { useEffect, useState } from 'react';
import { Musicard } from "@/components";

interface TrackObject {
  track_id: string;
  track_name: string;
  track_artist: string[];
  track_album: string;
  genre: string;
  track_release_year: number;
  like_list: string[];
}


const getTracksData = async (tid: string) => {
  const res = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_track_details?track_id=${tid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
};

export default function ListOfTheTracks({track_id}:any) {
  const [tracks, setTracks] = useState<TrackObject>(
    {
      track_id: "",
      track_name: "",
      track_artist: [],
      track_album: "",
      genre: "",
      track_release_year: 0,
      like_list: [],
    }
  );

  useEffect(() => {
    async function fetchData() {

      console.log("trackid: " + track_id + " yeye " + JSON.stringify(track_id)  + " yeye "  );
      try {
        if (track_id) {
          const data = await getTracksData(track_id);
        setTracks(data);
        }
        
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <div className="flex">
      {tracks && (
          <Musicard
            key={tracks.track_id}
            tName={tracks.track_name}
            tAlbum={tracks.track_album}
            tArtist={tracks.track_artist}
            tId={tracks.track_id}
            tRY={tracks.track_release_year}
          />
        )}
      
     
      </div>
    </div>
  );
}
