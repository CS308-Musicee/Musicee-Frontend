"use client"

import { Musicard } from "@/components";

async function getData() {
    // You would usually fetch data from an API here.
    const res = await fetch("http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_tracks");
  
    // But, here we just wait for 3 seconds.
    //await new Promise((res) => setTimeout(res, 3000));
    
    // You would usually return data from an API here.
    return res.json();
    return "Dashboard data";
  }
  
  export default async function Page() {
    const name = await getData();
  
    return (<div>{name.map((track: any) => {
        return (
          <div className="">
            <Musicard tName={track.track_name} tAlbum={track.track_album} tArtist={track.track_artist} tId={track.track_id} tRY={track.track_release_year}></Musicard>
          </div>
        )
      })

      }</div>)
  }