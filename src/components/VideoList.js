import React from 'react';
import VideoItem from './VideoItem';

// can be written as -
// const VideoList = ({videoos}) => {
// and instead of <span>{props.videoos.length}</span>, it can be writen as <span>{videoos.length}</span>
const VideoList = (props) => {
  // props.videoos - list of all the video from App component
  const renderedList = props.videoos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelectFromList={props.onVideoSelected}
        video={video}
      />
    );
  });
  return (
    <div className='ui relaxed divided list'>
      {renderedList}
      {/* <span>{props.videoos.length}</span> */}
    </div>
  );
};

export default VideoList;
