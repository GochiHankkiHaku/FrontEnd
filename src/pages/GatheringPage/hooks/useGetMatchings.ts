import { useState, useEffect } from 'react';
import { axiosClient } from 'apis/apiClient';
import { Matchings } from '../utils/gatheringPage.type';

export const useGetMatchings = () => {
  const [matchings, setMatchings] = useState<Matchings[]>([]);

  const user_idx = localStorage.getItem('user_idx');

  const getMatchings = async () => {
    try {
      const res = await axiosClient.get(`matching/list/${user_idx}`);
      setMatchings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMatchings();
  }, []);

  return matchings;
};
