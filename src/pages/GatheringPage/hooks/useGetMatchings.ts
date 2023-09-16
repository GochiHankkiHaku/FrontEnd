import { useState, useEffect } from 'react';
import { axiosClient } from 'apis/apiClient';

export const useGetMatchings = () => {
  const [matchingData, setMatchingData] = useState<any>([]);

  const user_idx = localStorage.getItem('user_idx');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosClient.get(`matching/list/${user_idx}`);
        setMatchingData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return matchingData;
};
