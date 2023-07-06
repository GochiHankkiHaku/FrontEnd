import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { dummyData } from 'common/utils/dummyData';
import { getDistance } from 'common/utils/calDistanceFunc';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-backward.svg';

const MapContainer = styled.div`
  width: 100%;
  /**  height - 100vh, 100% 안됨 */
  height: calc(100vh - 80px);
`;

const UnderBar = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 164px;
  font-size: 20px;
  background-color: white;
  padding: 16px 20px 16px 20px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 0px 8px 0px #00000066;
  gap: 8px;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  height: 27px;
  gap: 8px;

  > .title {
    font-weight: 700;
    font-size: 18px;
  }

  > .title_state {
    display: flex;
    align-items: center;
    width: 62px;
    height: 24px;
    padding: 5px 12px 5px 12px;
    border-radius: 70px;
    border: 1px;
    gap: 10px;
    color: #ff5325;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    border: 1px solid #ff5325;

    > .title_state-text {
      width: 38px;
    }
  }
`;

const InfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  padding: 12px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  border-top: 1px solid #dfdfdf;
  /* border: 1px solid red; */
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 322px;
  /* border: 1px solid red; */

  > .address {
    height: 18px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #8b8b8b;
  }

  > .distance {
    display: flex;
    gap: 8px;

    > .text {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;
    }

    > .meter {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #128fe9;
    }
  }

  > .ingredient {
    display: flex;
    align-items: center;
    width: 205px;
    height: 30px;
    gap: 8px;

    > .ingredient_title {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #333333;
    }

    > .ingredient_list {
      display: flex;
      gap: 8px;

      > .ingredient_item {
        width: 30px;
        height: 30px;
        background-color: #d9d9d9;
      }
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
`;

function Map() {
  const [currentMyLocation, setCurrentMyLocation] = useState({ lat: 0, lng: 0 });
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [markerTitle, setMarkerTitle] = useState<string>('');
  const [markerAddress, setMarkerAddress] = useState<string>('');
  const [targetDistance, setTargetDistance] = useState<number>(0);

  const [detailId, setDetailId] = useState<number>(0);

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
          setMarkerAddress(distanceLimitData[i].address);
          setTargetDistance(Math.floor(distanceLimitData[i].DISTANCE * 1000));
          setInfoOpen(true);
          setDetailId(distanceLimitData[i].id);
        });
      }
    }
  }, [currentMyLocation]);

  // 하단 정보창 외부 클릭 시 닫기 이벤트
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (infoOpen && !infoRef.current?.contains(e.target as HTMLElement)) {
        setMarkerTitle('');
        setMarkerAddress('');
        setInfoOpen(false);
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClose);
    }, 100);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [infoOpen]);

  return (
    <MapContainer ref={mapRef}>
      <Link to={`/detail/${detailId}`}>
        <div ref={infoRef}>
          {infoOpen && (
            <UnderBar>
              <TitleArea>
                <div className='title'>{markerTitle}</div>
                <div className='title_state'>
                  <div className='title_state-text'>오늘 모집</div>
                </div>
              </TitleArea>
              <InfoArea>
                <Info>
                  <div className='address'>{markerAddress}</div>
                  <div className='distance'>
                    <div className='text'>1/3 모집 완료</div>
                    <div className='meter'>{targetDistance}m</div>
                  </div>
                  <div className='ingredient'>
                    <div className='ingredient_title'>필요 재료</div>
                    <ul className='ingredient_list'>
                      <li className='ingredient_item'></li>
                      <li className='ingredient_item'></li>
                      <li className='ingredient_item'></li>
                      <li className='ingredient_item'></li>
                    </ul>
                  </div>
                </Info>
                <Arrow>
                  <ArrowChevron />
                </Arrow>
              </InfoArea>
            </UnderBar>
          )}
        </div>
      </Link>
    </MapContainer>
  );
}

export default Map;
