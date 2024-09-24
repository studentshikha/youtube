import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const  VideoContainer = ()=>{
  
    const [videosData, setVideosData] = useState([])

   useEffect(()=>{
     getVideos();
   },[])

   const getVideos = async()=>{
    try{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideosData(json?.items);
       
    }
    catch(error){
       console.log(error);
    }
    

   }

    return (
        <div className="flex flex-wrap">
            {
                videosData.map((video)=>(
                    <Link to={"/watch?v="+ video.id}>
                    <VideoCards 
                    key={video.id} data={video}
                    /></Link>
                ))
            }
        </div>
    )
}
export default VideoContainer;