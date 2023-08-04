import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [gatheringData, setGatheringData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/info');
        setGatheringData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return gatheringData;
};
