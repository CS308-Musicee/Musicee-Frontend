import React from 'react'

export const LikedList = ({title, artist, album, rYear}: any) => {
  return (
    <div className="m-10 text-sm justify-start max-w-full">
        {/* song list header */}
        <div className="flex text-gray-600">
              <div className="p-2 w-8 flex-shrink-0"></div>
              <div className="p-2 w-8 flex-shrink-0"></div>
              <div className="p-2 w-full">Title</div>
              <div className="p-2 w-full">Artist</div>
              <div className="p-2 w-full">Album</div>
              <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
          </div>

          <div className="flex border-b border-gray-800 hover:bg-pink-100">
              <div className="p-3 w-8 flex-shrink-0">▶️</div>
              <div className="p-3 w-8 flex-shrink-0">❤️</div>
              <div className="p-3 w-full">{title}</div>
              {Array.isArray(artist) && artist.map((arty: any, index: any) => {
                  return (
                      <div key={index} className="p-3 w-full">-{arty}
                      </div>

                  )
              })}
              <div className="p-3 w-full">{album}</div>
              <div className="p-3 w-12 flex-shrink-0 text-ri  ght">{rYear}</div>
          </div>
      </div>
  );
}
