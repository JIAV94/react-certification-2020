import { useEffect, useState } from 'react';
import axios from '../youtube';

export const useFetch = (query, videoId) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = query ? `search?q=${query}` : `search?relatedToVideoId=${videoId}`;
    console.log(url);
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await axios.get(url);
        setVideos(request.data.items);
        console.log(request.data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query, videoId]);

  return [videos, loading];
};
