import { Musicard } from "@/components"

const getTracksData = async () => {
  const res = await fetch("http://musicee.us-west-2.elasticbeanstalk.com/tracks/get_tracks")
  return res.json()
}


export default async function ListOfTracks(){
  const tracks = await getTracksData()
  return(
    <div className="flex">
        {/* Render your tracks here */}
        {tracks.map((track: any) => {
          return (
            <div className="">
              <Musicard tName={track.track_name} tAlbum={track.track_album} tArtist={track.track_artist} tId={track.track_id} tRY={track.track_release_year}></Musicard>
            </div>
          )
        })

        }
      </div>
  )
}