import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color } from 'styles/constants';
import { flexSet } from 'styles/minxin';
import { useSwiper } from 'swiper/react';

interface SliderCntProps {
  activeIndex: number;
}
export default function SliderCnt({ activeIndex }: SliderCntProps) {
  const swiper = useSwiper();

  const handleClickNext = () => {
    swiper.slideNext();
  };
  return (
    <Wrap onClick={handleClickNext}>
      <Typography
        variant={'caption'}
        size={2}
        color={color.gray[9]}
      >{`${activeIndex}/4 >`}</Typography>
    </Wrap>
  );
}
const Wrap = styled.div`
  ${flexSet()}
  position: absolute;
  bottom: 2px;
  right: 0;
  width: 43px;
  height: 23px;
  background-color: ${color.gray[9]};
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
`;
