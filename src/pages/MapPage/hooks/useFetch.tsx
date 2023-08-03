import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [latlngData, setLatlngData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/info');
        setLatlngData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return latlngData;
};
