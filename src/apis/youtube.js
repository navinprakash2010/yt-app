import axios from 'axios';
const KEY = 'AIzaSyDNIQk4Yl7n_exnaH3B0NJ3wzvrMw3d664';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
