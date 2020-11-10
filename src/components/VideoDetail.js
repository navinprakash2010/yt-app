import React from 'react';

// Instead of (props) 🔻 and use as props.video, we will use as ({video})
// const VideoDetail = (props) => {
const VideoDetail = ({ videoSelected }) => {
  if (!videoSelected) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videoSelected.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe title='Video Player' src={videoSrc} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{videoSelected.snippet.title}</h4>
        <p>{videoSelected.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
