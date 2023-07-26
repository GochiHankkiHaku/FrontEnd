// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styled from 'styled-components/macro';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import gachiGookImg from 'assets/images/galchi-gook.png'; // 이미지를 import 합니다.
import { useRef, useState } from 'react';
import { flexSet } from 'styles/minxin';

interface ItemsProps {
  id: number;
  image: string;
}

export default function Slider() {
  const swiper = useSwiper();

  const [activeIndex, setActiveIndex] = useState(1);
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

  const handleClickNext = () => {
    swiper?.slideNext();
    // if (swiperRef.current) {
    //   swiperRef.current?.swiper?.slideNext();
    // }
  };

  const swiperRef = useRef(null);

  return (
    <Wrap>
      <SliderCnt onClick={handleClickNext}>
        <Typography
          variant={'caption'}
          size={2}
          color={color.gray[9]}
        >{`${activeIndex}/4 >`}</Typography>
      </SliderCnt>
      <Swiper
        ref={swiperRef}
        //   spaceBetween={50}
        //   slidesPerView={3}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex + 1);
          // console.log(swiper, swiper.activeIndex);
        }}
        // onSwiper={(swiper) => swiperRef}
        autoplay={{ delay: 3000 }}
        pagination={{
          // type: 'fraction',
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // modules={[Pagination]}
        className='mySwiper'
      >
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
  /* height: 100%; */
  height: 220px;
  background-color: black;
  background: rgba(0, 0, 0, 0.35);
  position: relative;

  overflow: hidden;

  /* border: 2px solid red; */

  .swiper-slide {
    height: 220px;
  }

  .swiper-horizontal > .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal {
    /* position: fixed; */
    position: absolute;
    /* border: 2px solid red; */
    top: 224px;
    height: 2px;
    /* bottom: 0; */
    /* background-color: red; */
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: ${color.main[4]};
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    /* width: 3px;
    height: 5px; */
    /* background-color: red;
    position: absolute;
    top: 220px;
    bottom: 0;
    right: 0;

    width: 43px;
    height: 23px;

    z-index: 150; */
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

const SliderCnt = styled.div`
  ${flexSet()}
  position: absolute;
  bottom: 0;
  right: 0;
  width: 43px;
  height: 23px;
  background-color: ${color.gray[9]};
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
`;
