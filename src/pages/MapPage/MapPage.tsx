import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { dummyData } from 'common/utils/dummyData';
import { getDistance } from 'common/utils/calDistanceFunc';
import { Link } from 'react-router-dom';

const MapContainer = styled.div`
  width: 100%;
  /**  height - 100vh, 100% 안됨 */
  height: calc(100vh - 80px);
`;

const UnderBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid red;
`;

function Map() {
  const [currentMyLocation, setCurrentMyLocation] = useState({ lat: 0, lng: 0 });
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [markerTitle, setMarkerTitle] = useState<string>('');
  const [markerContent, setMarkerContent] = useState<string>('');
  const [targetDistance, setTargetDistance] = useState<number>(0);

  const staticServerUri = process.env.REACT_APP_PATH || '';
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const { kakao }: any = window;

  for (let i = 0; i < dummyData.length; i++) {
    const distance = getDistance(
      currentMyLocation.lat,
      currentMyLocation.lng,
      dummyData[i].lat,
      dummyData[i].lng,
      'K',
    );
    dummyData[i].DISTANCE = distance;
  }

  const distanceLimitData = dummyData.filter((value: any) => value.DISTANCE < 1);

  // 내 현재 위치 불러오는 부분
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
    if (currentMyLocation.lat !== 0 && currentMyLocation.lng !== 0) {
      const map = new kakao.maps.Map(mapRef.current, {
        center: new kakao.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        level: 5,
      });

      const imageSrc = 'https://cdn.icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png';
      const imageSize = new kakao.maps.Size(50, 50);

      // 마커의 이미지정보를 가지고 있는 마커이미지 생성
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 내 현재 위치
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
        image: markerImage,
      });

      // 내 주변 마커
      for (let i = 0; i < distanceLimitData.length; i++) {
        // for (let i = 0; i < dummyData.length; i++) {
        markerRef.current = new kakao.maps.Marker({
          map: map,
          // position: new kakao.maps.LatLng(dummyData[i].lat, dummyData[i].lng),
          position: new kakao.maps.LatLng(distanceLimitData[i].lat, distanceLimitData[i].lng),
        });

        // 내 주변 마커 클릭 이벤트
        kakao.maps.event.addListener(markerRef.current, 'click', () => {
          // setMarkerTitle(dummyData[i].title);
          // setMarkerContent(dummyData[i].content);
          setMarkerTitle(distanceLimitData[i].title);
          setMarkerContent(distanceLimitData[i].content);
          setTargetDistance(Math.floor(distanceLimitData[i].DISTANCE * 1000));
          setInfoOpen(() => true);
        });
      }
    }
  }, [currentMyLocation]);

  // 하단 정보창 외부 클릭 시 닫기 이벤트
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (infoOpen && !infoRef.current?.contains(e.target as HTMLElement)) {
        setMarkerTitle('');
        setMarkerContent('');
        setInfoOpen(() => false);
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClose);
    }, 100);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [infoOpen]);

  const closeInfo = () => {
    setMarkerTitle('');
    setMarkerContent('');
    setInfoOpen(false);
  };

  return (
    <MapContainer ref={mapRef}>
      <Link to={staticServerUri + `/Detail/${distanceLimitData.id}`}>
        <div ref={infoRef}>
          {infoOpen && (
            <UnderBar>
              <div>{markerTitle}</div>
              <div>{markerContent}</div>
              <div>{targetDistance}m</div>
              <button onClick={closeInfo}>X</button>
            </UnderBar>
          )}
        </div>
      </Link>
    </MapContainer>
  );
}

export default Map;
