"use client"

import { useEffect, useState } from 'react';
import { FriendsRecoAlt } from "@/components";

const getTracksData = async (inputLink: any) => {
  const link = String(inputLink);
  const username = localStorage.getItem("username");
  const res = await fetch(link+ `${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const asılRes = await fetch("http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_tracks", {cache: "no-store"});

  return res.json();
};

export default function ListOfTheTracks({ inputMainLink }: { inputMainLink: string }) {
  const link = String(inputMainLink);
  const [tracks, setTracks] = useState([]);
  const [likedTracks, setLikedTracks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTracksData(inputMainLink);
        setTracks(data);

      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <div className="flex">
        {tracks &&tracks.length > 0 &&  tracks.map((track, index) => (
          <div key={index} className="">
            
            <FriendsRecoAlt
              track_id={track}
            />
          </div>
        ))}
      </div>

      
    </div>
  );
}
