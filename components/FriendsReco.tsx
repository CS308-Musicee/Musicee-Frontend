"use client"

import { useEffect, useState } from 'react';
import { FriendsRecoAlt } from "@/components";

const getTracksData = async () => {
  const username = localStorage.getItem("username");
  const res = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/recommend_friend_track?username=${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const asılRes = await fetch("http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_tracks", {cache: "no-store"});

  return res.json();
};

export default function ListOfTheTracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTracksData();
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
        {tracks.map((track, index) => (
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
