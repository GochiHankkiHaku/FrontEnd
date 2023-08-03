import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [currentMyLocation, setCurrentMyLocation] = useState({ lat: 0, lng: 0 });
  const [latlngData, setLatlngData] = useState<any>([]);

  useEffect(() => {
    const success = (location: { coords: { latitude: number; longitude: number } }) => {
      setCurrentMyLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    };
    const error = () => {
      setCurrentMyLocation({ lat: 33.450701, lng: 126.570667 });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [setCurrentMyLocation]);

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

  return { currentMyLocation, latlngData };
};
