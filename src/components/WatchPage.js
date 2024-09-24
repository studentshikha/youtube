import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = ()=>{

 const [searchParams] = useSearchParams();
 console.log(searchParams.get("v"))

const dispatch = useDispatch();

useEffect(()=>{
dispatch(closeMenu());
},[])
    
return (
<div>
<iframe 
className="px-5 "
width="900" 
height="480" 
src={"https://www.youtube.com/embed/"+searchParams.get("v")}
title="How to Create a YouTube API Key - Step By Step Tutorial" 
frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerPolicy="strict-origin-when-cross-origin" 
AllowFullScreen
>
</iframe>
</div>
)
}

export default WatchPage;