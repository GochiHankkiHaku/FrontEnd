import styled from 'styled-components';
import Infowindow from './components/infowindow';
import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'components/Spinner';
import { getDistance } from './utils/getDistance';
import { useFetch } from '../../common/hooks/useFetch';
import { useGeolocation } from './hooks/useGeolacation';
import { useChangeAddr } from './hooks/useChangeAddr';

const { kakao }: any = window;

export default function SearchPage() {
  const [markers, setMarkers] = useState<any>([]);
  const [markerInfo, setMarkerInfo] = useState<any>({
    markerId: 0,
    markerMenuname: '',
    markerDate: '',
    markerTime: '',
    markerApplication: 0,
    markerNumber: 0,
    markerMoney: 0,
    markerDistance: 0,
  });
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<number>(0);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const { currentMyLocation, locationLoading } = useGeolocation();
  const gatheringData = useFetch();
  const { address, changeAddr } = useChangeAddr();

  const distanceAddData = gatheringData.map((gatheringData: any) => {
    const distance = getDistance(
      currentMyLocation.lat,
      currentMyLocation.lng,
      gatheringData.lat,
      gatheringData.lng,
      'K',
    );
    return {
      ...gatheringData,
      DISTANCE: distance,
    };
  });
  const distanceLimitData = distanceAddData.filter(
    (gatheringData: any) => gatheringData.DISTANCE < 1,
  );
  const filteredData = distanceLimitData.filter((gatheringData: any) => {
    if (selectDate === 0) {
      return true;
    } else if (selectDate === 1) {
      return gatheringData.date === '오늘';
    } else if (selectDate === 2) {
      return gatheringData.date === '내일';
    }
  });

  const filterAll = () => {
    setSelectDate(0);
  };

  const filterToday = () => {
    setSelectDate(1);
  };

  const filterTomorrow = () => {
    setSelectDate(2);
  };

  useEffect(() => {
    if (currentMyLocation.lat !== 0 && currentMyLocation.lng !== 0) {
      mapRef.current = new kakao.maps.Map(mapRef.current, {
        center: new kakao.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        level: 5,
      });

      const imageSrc = 'https://cdn.icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png';
      const imageSize = new kakao.maps.Size(45, 45);

      new kakao.maps.Marker({
        map: mapRef.current,
        position: new kakao.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        image: new kakao.maps.MarkerImage(imageSrc, imageSize),
      });
    }
  }, [currentMyLocation]);

  useEffect(() => {
    if (currentMyLocation.lat !== 0 && currentMyLocation.lng !== 0) {
      markers.forEach((marker: any) => {
        marker.setMap(null);
      });

      const newMarkers = filteredData.map((gatheringData: any) => {
        const marker = new kakao.maps.Marker({
          map: mapRef.current,
          position: new kakao.maps.LatLng(gatheringData.lat, gatheringData.lng),
        });

        const markerClickEvent = () => {
          setMarkerInfo({
            markerId: gatheringData.post_idx,
            markerMenuname: gatheringData.menuname,
            markerDate: gatheringData.date,
            markerTime: gatheringData.time,
            markerApplication: gatheringData.application,
            markerNumber: gatheringData.number,
            markerMoney: gatheringData.money,
            markerDistance: Math.floor(gatheringData.DISTANCE * 1000),
          });
          changeAddr(gatheringData.lat, gatheringData.lng);
          setIsInfoOpen(true);
        };
        kakao.maps.event.addListener(marker, 'click', markerClickEvent);

        return marker;
      });

      setMarkers(newMarkers);
    }
  }, [currentMyLocation, selectDate]);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isInfoOpen && !infoRef.current?.contains(e.target as HTMLElement)) {
        setIsInfoOpen(false);
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClose);
    }, 100);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isInfoOpen]);

  return (
    <>
      <MapHeader>
        <div className='header_title'>내 주변 탐색</div>
      </MapHeader>
      {locationLoading ? (
        <Spinner mt={200} />
      ) : (
        <MapContainer ref={mapRef}>
          <BtnArea>
            <MarkerFilterBtn onClick={filterAll} active={selectDate === 0}>
              전체 기간
            </MarkerFilterBtn>
            <MarkerFilterBtn onClick={filterToday} active={selectDate === 1}>
              오늘 모집
            </MarkerFilterBtn>
            <MarkerFilterBtn onClick={filterTomorrow} active={selectDate === 2}>
              내일 모집
            </MarkerFilterBtn>
          </BtnArea>
          {isInfoOpen && <Infowindow infoRef={infoRef} markerInfo={markerInfo} address={address} />}
        </MapContainer>
      )}
    </>
  );
}

const MapHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  border-bottom: 1px solid #333333;

  > .header_title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #333333;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px - 80px);
`;

const BtnArea = styled.div`
  display: flex;
  column-gap: 8px;
  position: absolute;
  left: 20px;
  top: 16px;
  z-index: 999;
`;

const MarkerFilterBtn = styled.button<{ active: boolean }>`
  font-size: 14px;
  font-weight: 500;
  width: 85px;
  height: 32px;
  border-radius: 70px;
  color: ${({ active }) => (active ? '#FFFFFF' : '#333333')};
  border: 1px solid ${({ active }) => (active ? '#AD3E00' : '#DFDFDF')};
  background-color: ${({ active }) => (active ? '#FF5C00' : '#FFFFFF')};
  box-shadow: 0px 0px 4px 0px #00000026;
`;
