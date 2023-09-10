import { useState, useEffect } from 'react';
import { PostApi } from 'apis/lib/post';

export const useGetPosts = () => {
  const [gatheringData, setGatheringData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await PostApi.getPosts();
        setGatheringData(res);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return gatheringData;
};
