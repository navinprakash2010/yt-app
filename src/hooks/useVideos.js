import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  // related to hooks
  const [videos, setVideos] = useState([]);

  // related to hooks
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    //   its a asynchronous api request
    const response = await youtube.get('search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; //React way of return
  //   return {videos, search}; //JS way of return
};

export default useVideos;
