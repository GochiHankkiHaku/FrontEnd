import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color } from 'styles/constants';

export default function MainPage() {
  return (
    <div>
      <Slider>
        슬라이더 영역
        <Typography variant='title' size={5} color={color.white}>
          귀한 손님에게 대접하는 구살국을
          <br />
          새로운 사람들과 함께 만들어봐요!
        </Typography>
      </Slider>
      <Typography variant='title' size={3}>
        내 주변 요리 모임
      </Typography>
    </div>
  );
}

const Slider = styled.div`
  height: 220px;
  background-color: black;
`;
