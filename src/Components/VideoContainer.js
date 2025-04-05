import React from 'react'
import { useEffect ,useState} from 'react'
import { YOUTUBE_API_KEY } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  useEffect(()=>{
    getVidoes();
  },[]);

  const [videos, setVideo] = useState([]);



  const getVidoes = async () =>{
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
    setVideo(json.items);
  }

  return (
   <>
   <div className='flex flex-wrap ms-10'>
   {videos.map(video => (
    <Link key={video?.id} to={"watch?v="+ video.id} >
   <VideoCard  info={video} />
   </Link> 

   )
   )}

   </div>
   </>
  ) 
}

export default VideoContainer