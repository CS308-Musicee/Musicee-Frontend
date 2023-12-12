
import { Musicard } from "@/components"

const getTracksData = async () => {
  const res = await fetch("http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_tracks", {cache: "no-store"});
  return res.json();
  
}


export default async function ListOfTheTracks(){
  const tracks = await getTracksData();
  return(
    <div>
<div className="flex">
        {tracks.map((track: any) => {
          return (
            <div className="" >
              <Musicard key={track.track_id} tName={track.track_name} tAlbum={track.track_album} tArtist={track.track_artist} tId={track.track_id} tRY={track.track_release_year}></Musicard>
            </div>
          )
        })

        }
      </div>
      
      
    </div>
    
  )
}