import React from "react";
import './Video.css';
import ReactPlayer from "react-player";

const Video = (props) => {
    return (
        <div className="video_component">
            <ReactPlayer className="video_play" height="240px" width="420px" controls url={props.url}/>
        </div>
    );
}

export default Video;