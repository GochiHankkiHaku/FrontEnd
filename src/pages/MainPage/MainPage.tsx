import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color } from 'styles/constants';
import GatheringInfo from './components/GatheringInfo';

export default function MainPage() {
  return (
    <Wrap>
      <Slider>
        슬라이더 영역
        <Typography variant='title' size={5} color={color.white}>
          귀한 손님에게 대접하는 구살국을
          <br />
          새로운 사람들과 함께 만들어봐요!
        </Typography>
      </Slider>
      <ContentsWrap>
        <Typography variant='title' size={3} color={color.gray[9]}>
          내 주변 요리 모임
        </Typography>
        <GatheringInfo
          thumbnail='https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/catlab/20210525034607713vblk.jpg'
          title='구살국(성게국) 요리 모집'
          address='제주 서귀포시 성산읍 고성리 296-8'
          recruitedCnt={1}
          totalCnt={3}
        />
        <GatheringInfo
          thumbnail='https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/catlab/20210525034607713vblk.jpg'
          title='구살국(성게국) 요리 모집'
          address='제주 서귀포시 성산읍 고성리 296-8'
          recruitedCnt={1}
          totalCnt={3}
        />
        <GatheringInfo
          thumbnail='https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/catlab/20210525034607713vblk.jpg'
          title='구살국(성게국) 요리 모집'
          address='제주 서귀포시 성산읍 고성리 296-8'
          recruitedCnt={1}
          totalCnt={3}
        />
      </ContentsWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: white;
`;

const Slider = styled.div`
  height: 220px;
  background-color: black;
`;

const ContentsWrap = styled.div`
  background-color: pink;
  padding: 24px 20px;
`;
