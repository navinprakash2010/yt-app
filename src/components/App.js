import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <p>I have {videos.length} videos.</p>
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail videoSelected={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelected={(video) => setSelectedVideo(video)}
              videoos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
