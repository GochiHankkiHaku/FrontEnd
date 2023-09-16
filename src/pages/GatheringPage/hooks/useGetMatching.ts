import { useState, useEffect } from 'react';
import { axiosClient } from 'apis/apiClient';

export const useGetMatching = (post_idx: string) => {
  const [matchingDetailData, setMatchingDetailData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosClient.get(`matching/detail/${post_idx}`);
        setMatchingDetailData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return matchingDetailData;
};
