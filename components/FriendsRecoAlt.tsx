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
  comment: string[];
}


const getTracksData = async (tid: string) => {
  try {
      console.log("bi de buraya bakalım: " + tid);
      const res = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_track_details/${tid}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      console.log("okeyy");
      const data = await res.json();
      return data;
  } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed, e.g., return a default value or rethrow the error
      throw error;
  }
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
      comment: []
    }
  );

  useEffect(() => {
    async function fetchData() {

      console.log("trackid: " + track_id + " yeye " + JSON.stringify(track_id)  + " yeye "  );
      try {
        if (track_id) {
          console.log("bakıyoruzz");
          const data = await getTracksData(track_id);
        setTracks(data);
        console.log("bu ne : " + tracks.track_id)

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
            tComment = {tracks.comment}

          />
        )}
      
     
      </div>
    </div>
  );
}
