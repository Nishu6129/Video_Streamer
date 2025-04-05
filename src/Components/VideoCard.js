import React from 'react'

const VideoCard = ({ info }) => {
//   console.log(info)

  return (
    <div className='flex flex-col'>
    <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 m-2">
      <img
        alt="Thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-xl line-clamp-2">{info?.snippet?.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{info?.snippet?.channelTitle}</p>
        <div className="flex items-center space-x-4 mt-2 text-gray-600 text-sm">
          <div>{info?.statistics?.viewCount} views</div>
          <div>{info?.statistics?.likeCount} likes</div>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default VideoCard;
