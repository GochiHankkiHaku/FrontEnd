import { useState } from 'react';

export const useChangeAddr = () => {
  const [address, setAddress] = useState<string>('');
  const { kakao }: any = window;

  const changeAddr = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);
    const callback = (result: any, status: string) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].road_address.address_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  return { address, setAddress, changeAddr };
};
