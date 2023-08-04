import styled from 'styled-components';
import Infowindow from './components/infowindow';
import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'components/Spinner';
import { getDistance } from './utils/helperFunc/calDistanceFunc';
import { useFetch } from './hooks/useFetch';
import { useGeolocation } from './hooks/useGeolacation';
import { useChangeAddr } from './hooks/useChangeAddr';

export default function Map() {
  const [markerMenuname, setMarkerMenuname] = useState<string>('');
  const [markerApplication, setMarkerApplication] = useState<number>(0);
  const [markerNumber, setMarkerNumber] = useState<number>(0);
  const [markerDistance, setMarkerDistance] = useState<number>(0);
  const [detailId, setDetailId] = useState<number>(0);
  const [infoOpen, setInfoOpen] = useState<boolean>(false);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const { kakao }: any = window;
  const { currentMyLocation, locationLoading } = useGeolocation();
  const gatheringData = useFetch();
  const { address, setAddress, changeAddr } = useChangeAddr();

  // gatheringData에 DISTANCE 추가
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
  // 현재 내 위치에서 1km 이내의 모임만 필터링
  const distanceLimitData = distanceAddData.filter((value: any) => value.DISTANCE < 1);

  // 지도 및 마커 생성
  useEffect(() => {
    if (currentMyLocation.lat !== 0 && currentMyLocation.lng !== 0) {
      // 내 위치를 중심으로 하는 지도 생성
      const map = new kakao.maps.Map(mapRef.current, {
        center: new kakao.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        level: 5,
      });

      const imageSrc = 'https://cdn.icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png';
      const imageSize = new kakao.maps.Size(45, 45);

      // 내 현재 위치 마커 생성
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        image: new kakao.maps.MarkerImage(imageSrc, imageSize),
      });

      // 내 주변 모임 마커 생성
      for (let i = 0; i < distanceLimitData.length; i++) {
        markerRef.current = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(distanceLimitData[i].lat, distanceLimitData[i].lng),
        });

        // 내 주변 모임 마커 클릭 이벤트 등록
        kakao.maps.event.addListener(markerRef.current, 'click', () => {
          setMarkerMenuname(distanceLimitData[i].menuname);
          changeAddr(distanceLimitData[i].lat, distanceLimitData[i].lng);
          setMarkerApplication(distanceLimitData[i].application);
          setMarkerNumber(distanceLimitData[i].number);
          setMarkerDistance(Math.floor(distanceLimitData[i].DISTANCE * 1000));
          setDetailId(distanceLimitData[i].post_idx);
          setInfoOpen(true);
        });
      }
    }
  }, [currentMyLocation]);

  // 하단 정보창 외부 클릭 시 닫기 이벤트
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (infoOpen && !infoRef.current?.contains(e.target as HTMLElement)) {
        setMarkerMenuname('');
        setAddress('');
        setMarkerApplication(0);
        setMarkerNumber(0);
        setDetailId(0);
        setInfoOpen(false);
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClose);
    }, 100);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [infoOpen]);

  return (
    <>
      <MapHeader>
        <div className='header_title'>내 주변 탐색</div>
      </MapHeader>
      {locationLoading ? (
        <Spinner mt={200} />
      ) : (
        <MapContainer ref={mapRef}>
          {infoOpen && (
            <Infowindow
              infoRef={infoRef}
              markerMenuname={markerMenuname}
              address={address}
              markerApplication={markerApplication}
              markerNumber={markerNumber}
              markerDistance={markerDistance}
              detailId={detailId}
            />
          )}
        </MapContainer>
      )}
    </>
  );
}

const MapHeader = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 20px;
  border-bottom: 1px solid #333333;

  > .header_title {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #333333;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px - 80px);
`;
