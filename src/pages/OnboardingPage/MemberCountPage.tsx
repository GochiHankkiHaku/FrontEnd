import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import styled from 'styled-components';
import { useState } from 'react';
import { flexSet } from 'styles/minxin';
import Footer from './components/Footer';
import { usePage } from './hooks/usePage';

type COMMAND = 'max' | 'min';

export default function MemberCountPage() {
  const { goNextPage } = usePage();

  const [count, setCount] = useState({
    max: 4,
    min: 1,
  });

  const handleIncrement = (command: COMMAND) => {
    if (count[command] < 4) {
      setCount({ ...count, [command]: count[command] + 1 });
    }
  };

  const handleDecrement = (command: COMMAND) => {
    if (count[command] > 1) {
      setCount({ ...count, [command]: count[command] - 1 });
    }
  };

  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          몇 명을 초대할까요?
        </Typography>
        <Typography variant='paragraph' size={6} color={color.gray[6]} mb={30}>
          최대 4명까지 선택 가능합니다.
          <br />
          그룹 단위로 방문합니다.
        </Typography>
        <StyledTypography variant='paragraph' size={2} $color={color.active}>
          <span className='color'>최대</span> 인원 선택
        </StyledTypography>
        <CounterContainer>
          <CountBtn onClick={() => handleDecrement('max')}>-</CountBtn>
          <CounterText $color={color.active}>{count.max} 명</CounterText>
          <CountBtn onClick={() => handleIncrement('max')}>+</CountBtn>
        </CounterContainer>
        <StyledTypography variant='paragraph' size={2} $color={color.alert}>
          <span className='color'>최소</span> 인원 선택
        </StyledTypography>
        <CounterContainer>
          <CountBtn onClick={() => handleDecrement('min')}>-</CountBtn>
          <CounterText $color={color.alert}>{count.min} 명</CounterText>
          <CountBtn onClick={() => handleIncrement('min')}>+</CountBtn>
        </CounterContainer>
      </Wrap>
      <Footer
        saveLater
        onClick={() => {
          goNextPage();
          localStorage.setItem('number', String(count));
        }}
      />
    </>
  );
}
const Wrap = styled.div`
  flex: 1;

  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
`;

const CounterContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const CountBtn = styled.button`
  ${flexSet()};
  width: 42px;
  height: 42px;

  font-size: 30px;
  color: ${color.gray[7]};

  background-color: white;
  border: 1px solid ${color.gray[4]};
  border-radius: 50%;
`;

const CounterText = styled.span<{ $color: string }>`
  min-width: 100px;
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${({ $color }) => $color};
`;

const StyledTypography = styled(Typography)<{ $color: string }>`
  .color {
    color: ${({ $color }) => $color};
  }
`;
