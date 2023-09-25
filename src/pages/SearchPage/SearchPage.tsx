import styled from 'styled-components';
import Infowindow from './components/Infowindow';
import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'components/Spinner';
import { getDistance } from './utils/getDistance';
import { useGetPosts } from './hooks/useGetPosts';
import { useGeolocation } from './hooks/useGeolacation';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import SearchHeader from 'components/SearchHeader';
import { MarkerInfo } from './utils/searchPage.type';

const { kakao }: any = window;

export default function SearchPage() {
  const [markers, setMarkers] = useState<any>([]);
  const [markerInfo, setMarkerInfo] = useState<MarkerInfo>({
    post_idx: 0,
    menuname: '',
    date: '',
    address: '',
    status: '',
    great: 0,
    good: 0,
    distance: 0,
  });
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<number>(0);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const { currentMyLocation, locationLoading } = useGeolocation();

  const posts = useGetPosts();
  const distanceLimitPosts = posts
    .map((post) => {
      const distance = getDistance(
        currentMyLocation.lat,
        currentMyLocation.lng,
        post.lat,
        post.lng,
        'K',
      );
      return {
        ...post,
        DISTANCE: distance,
      };
    })
    .filter((filteredDatePost) => filteredDatePost.DISTANCE < 1);
  const filteredDatePosts = distanceLimitPosts.filter((distanceLimitPost) => {
    if (selectDate === 0) {
      return true;
    } else if (selectDate === 1) {
      return distanceLimitPost.date === '오늘';
    } else if (selectDate === 2) {
      return distanceLimitPost.date === '내일';
    }
  });

  const selectDateHandler = (date: number) => {
    setSelectDate(date);
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

      const newMarkers = filteredDatePosts.map((filteredDatePost) => {
        const marker = new kakao.maps.Marker({
          map: mapRef.current,
          position: new kakao.maps.LatLng(filteredDatePost.lat, filteredDatePost.lng),
        });

        const markerClickEvent = () => {
          setMarkerInfo({
            post_idx: filteredDatePost.post_idx,
            menuname: filteredDatePost.menuname,
            date: filteredDatePost.date,
            address: filteredDatePost.address,
            status: filteredDatePost.status,
            great: filteredDatePost.great,
            good: filteredDatePost.good,
            distance: Math.floor(filteredDatePost.DISTANCE * 1000),
          });
          setIsInfoWindowOpen(true);
        };
        kakao.maps.event.addListener(marker, 'click', markerClickEvent);

        return marker;
      });

      setMarkers(newMarkers);
    }
  }, [currentMyLocation, selectDate]);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isInfoWindowOpen && !infoRef.current?.contains(e.target as HTMLElement)) {
        setIsInfoWindowOpen(false);
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClose);
    }, 100);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isInfoWindowOpen]);

  return (
    <>
      <SearchHeader title={'내 주변 탐색'} underbarColor={color.gray[4]} />
      {locationLoading && markers.length === 0 ? (
        <Spinner />
      ) : (
        <Wrap ref={mapRef}>
          <MarkerFilteringBtnArea>
            <MarkerFilteringBtn onClick={() => selectDateHandler(0)} active={selectDate === 0}>
              <Typography variant='paragraph' size={4}>
                전체 기간
              </Typography>
            </MarkerFilteringBtn>
            <MarkerFilteringBtn onClick={() => selectDateHandler(1)} active={selectDate === 1}>
              <Typography variant='paragraph' size={4}>
                오늘 모집
              </Typography>
            </MarkerFilteringBtn>
            <MarkerFilteringBtn onClick={() => selectDateHandler(2)} active={selectDate === 2}>
              <Typography variant='paragraph' size={4}>
                내일 모집
              </Typography>
            </MarkerFilteringBtn>
          </MarkerFilteringBtnArea>
          {isInfoWindowOpen && <Infowindow infoRef={infoRef} markerInfo={markerInfo} />}
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 50px - 80px);
`;

const MarkerFilteringBtnArea = styled.div`
  display: flex;
  column-gap: 8px;
  position: absolute;
  left: 20px;
  top: 16px;
  z-index: 999;
`;

const MarkerFilteringBtn = styled.button<{ active: boolean }>`
  border-radius: 70px;
  padding: 5.5px 16px;
  color: ${({ active }) => (active ? color.white : color.gray[9])};
  border: 1px solid ${({ active }) => (active ? color.main[5] : color.gray[3])};
  background-color: ${({ active }) => (active ? color.main[1] : color.white)};
  box-shadow: 0px 0px 4px 0px #00000026;
`;
