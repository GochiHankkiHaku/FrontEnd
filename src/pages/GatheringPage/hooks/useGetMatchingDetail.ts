import { useState, useEffect } from 'react';
import { axiosClient } from 'apis/apiClient';
import { MatchingDetail } from '../utils/gatheringPage.type';

export const useGetMatchingDetail = (post_idx: string) => {
  const [matchingDetail, setMatchingDetail] = useState<MatchingDetail>();

  const getMatchingDetail = async () => {
    try {
      const res = await axiosClient.get(`matching/detail/${post_idx}`);
      setMatchingDetail(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMatchingDetail();
  }, []);

  return { matchingDetail, getMatchingDetail };
};
