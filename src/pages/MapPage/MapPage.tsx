import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { getDistance } from './utils/calDistanceFunc';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-backward.svg';
import { Spinner } from 'components/Spinner';
import { PostApi } from 'apis/lib/post';

export default function Map() {
  const [latlngData, setLatlngData] = useState<any>([]);
  const [currentMyLocation, setCurrentMyLocation] = useState({ lat: 0, lng: 0 });
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<number>(0);

  const [markerMenuname, setMarkerMenuname] = useState<string>('');
  const [markerAddress, setMarkerAddress] = useState<string>('');
  const [markerApplication, setMarkerApplication] = useState<number>(0);
  const [markerNumber, setMarkerNumber] = useState<number>(0);
  const [targetDistance, setTargetDistance] = useState<number>(0);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const { kakao }: any = window;
  const distanceLimitData = latlngData.filter((value: any) => value.DISTANCE < 1);

  const getData = async () => {
    try {
      const res = await PostApi.getPosts();
      setLatlngData(res);
    } catch (err: any) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  for (let i = 0; i < latlngData.length; i++) {
    const distance = getDistance(
      currentMyLocation.lat,
      currentMyLocation.lng,
      latlngData[i].lat,
      latlngData[i].lng,
      'K',
    );
    latlngData[i].DISTANCE = distance;
  }

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
          setMarkerApplication(distanceLimitData[i].application);
          setMarkerNumber(distanceLimitData[i].number);
          setTargetDistance(Math.floor(distanceLimitData[i].DISTANCE * 1000));
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
        setMarkerAddress('');
        setMarkerApplication(0);
        setMarkerNumber(0);
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
      {currentMyLocation.lat === 0 && currentMyLocation.lng === 0 ? (
        <Spinner mt={200} />
      ) : (
        <MapContainer ref={mapRef}>
          <Link to={`/detail/${detailId}`}>
            <div ref={infoRef}>
              {infoOpen && (
                <UnderBar>
                  <TitleArea>
                    <div className='title'>{markerMenuname} 요리 모임 합니다.</div>
                    <div className='title_state'>
                      <div className='title_state-text'>오늘 모집</div>
                    </div>
                  </TitleArea>
                  <InfoArea>
                    <Info>
                      <div className='address'>{markerAddress}</div>
                      <div className='distance'>
                        <div className='text'>
                          {markerApplication}/{markerNumber} 모집 완료
                        </div>
                        <div className='meter'>{targetDistance}m</div>
                      </div>
                      <div className='host_btn'>
                        <div className='ex'>최고에요 37</div>
                        <div className='good'>좋아요 15</div>
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
  /**  height - 100vh, 100% 안됨 */
  height: calc(100vh - 70px - 80px);
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

  > .host_btn {
    display: flex;
    gap: 5px;

    > .ex {
      font-size: 10px;
      font-weight: 600;
      color: #ff5c00;
      padding: 4.5px 12px;
      border-radius: 70px;
      border: 1px solid #c1c1c1;
    }

    > .good {
      font-size: 10px;
      font-weight: 600;
      color: #ffa51f;
      padding: 4.5px 12px;
      border-radius: 70px;
      border: 1px solid #c1c1c1;
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
`;
