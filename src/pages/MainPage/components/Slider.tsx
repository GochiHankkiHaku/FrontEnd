import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styled from 'styled-components/macro';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { color } from 'styles/constants';
import gachiGookImg from 'assets/images/galchi-gook.png'; // 이미지를 import 합니다.
import { useRef, useState } from 'react';
import SliderCnt from './SliderCnt';

interface ItemsProps {
  id: number;
  image: string;
}

const items: ItemsProps[] = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2023/05/28/13/15/helicopter-8023696_1280.jpg',
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2023/05/18/09/28/monastery-8001787_1280.jpg',
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg',
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);

  const swiperRef = useRef(null);

  return (
    <Wrap>
      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex + 1);
        }}
        autoplay={{ delay: 3000 }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        <SliderCnt activeIndex={activeIndex} />
        <SwiperSlide>
          <Image src={gachiGookImg} alt='갈치' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gachiGookImg} alt='갈치' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gachiGookImg} alt='갈치' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gachiGookImg} alt='갈치' />
        </SwiperSlide>
      </Swiper>
      <Text>
        귀한 손님에게 대접하는 구살국을
        <br />
        새로운 사람들과 함께 만들어봐요!
      </Text>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  background-color: black;
  background: rgba(0, 0, 0, 0.35);
  position: relative;

  overflow: hidden;

  .swiper-slide {
    height: 220px;
  }

  .swiper-horizontal > .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal {
    top: auto;
    bottom: 0;
    height: 2px;
    background-color: ${color.gray[3]};
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: ${color.alert};
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
`;

const Image = styled.img`
  /* border: 2px solid pink; */
  width: 100%;
  height: 220px;
  overflow: hidden;
  overflow: hide;
  object-fit: cover;

  filter: brightness(65%);

  /* border: 2px solid blue; */
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;

  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 20px 0 0 20px;
`;
