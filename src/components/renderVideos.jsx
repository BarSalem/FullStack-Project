import React from "react";
import videos from "./videosArr1";
import Video from "./video";


function RenderVideos(video){
    return <div>
    <Video className="vidInTable" src={video.src}
    content={video.content}
    subject={video.subject}
    key={video.id}
    count={video.count}
    />
    <br clear="all" />
    <hr className="type_10"/>
    </div>
}

function allVids(props){
    return (<div>
        {videos[props.setNumber].map(RenderVideos)}
    </div>)
}

export default allVids;