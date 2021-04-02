import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiCall = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_API_KEY,
    type: 'video',
    videoEmbeddable: true,
  },
});

export default apiCall;
