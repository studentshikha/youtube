const VideoCards=({data})=>{
   

    const {snippet , statistics} = data;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics;
    return (
        <div className="p-2 m-4  w-52 shadow-lg">
     <img className="rounded-lg" src={thumbnails.medium.url}/>
     <p className="font-bold py-2 text-sm">{title}</p>
      <p>{channelTitle}</p>
      <p>{viewCount} views</p>
        </div>
    )
}
export default VideoCards;