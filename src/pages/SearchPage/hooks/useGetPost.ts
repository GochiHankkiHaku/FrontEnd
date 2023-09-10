import { useState, useEffect } from 'react';
import { PostApi } from 'apis/lib/post';

export const useGetPost = (post_idx: string) => {
  const [gatheringDetailData, setGatheringDetailData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await PostApi.getPost(post_idx);
        setGatheringDetailData(res);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return gatheringDetailData;
};
