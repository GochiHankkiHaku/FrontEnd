import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styled from 'styled-components/macro';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { color } from 'styles/constants';
import cookImg1 from 'assets/images/cook1.png';
import cookImg2 from 'assets/images/cook2.png';
import cookImg3 from 'assets/images/cook3.png';
import cookImg4 from 'assets/images/cook4.png';
import { useState } from 'react';
import SliderCnt from './SliderCnt';

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Wrap>
      <Swiper
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex + 1);
        }}
        autoplay={{ delay: 2000 }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        <SliderCnt activeIndex={activeIndex} />
        {bannerItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.image} alt='갈치' />
            <GradientBackground />
            <Text>{item.description}</Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
}

const bannerItems = [
  {
    id: 1,
    image: cookImg1,
    description: `귀한 손님에게 대접하는 구살국을\n새로운 사람들과 함께 만들어봐요!`,
  },
  {
    id: 2,
    image: cookImg2,
    description: '싱싱한 오징어로 만든 한치 물회를\n제주 바다를 보면서 함께 식사해요!',
  },
  {
    id: 3,
    image: cookImg3,
    description: '제주 해녀분들이 직접 요리한\n신선한 해산물 요리를 드셔보세요! ',
  },
  {
    id: 4,
    image: cookImg4,
    description: '제주도민의 따뜻한 마음이 담긴\n식사를 통해 추억을 만들어보세요.',
  },
];

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

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 29.55%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  overflow: hidden;
  overflow: hide;
  object-fit: cover;
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;

  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 20px 0 0 20px;

  white-space: pre-line;
`;
