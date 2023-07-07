import { Typography } from 'components/Typography';
import Back from './components/Back';
import ProgressBar from './components/ProgressBar';
import { Button } from 'components/Button';
import { color } from 'styles/constants';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { flexSet } from 'styles/minxin';

export default function PersonalPage() {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Wrap>
      <ProgressBar currentStep={2} />
      <Back page='/onboarding/time' text='인원 수' />
      <Container>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          몇 명을 초대할까요?
        </Typography>
        <Typography variant='paragraph' size={6} color={color.gray[6]}>
          최대 4명까지 선택 가능합니다.
          <br />
          그룹 단위로 방문합니다.
        </Typography>
        <CounterContainer>
          <CntButton onClick={handleDecrement}>-</CntButton>
          <CounterDisplay>{count} 명</CounterDisplay>
          <CntButton onClick={handleIncrement}>+</CntButton>
        </CounterContainer>
      </Container>
      <Button
        col='white'
        bgCol={color.main[2]}
        onClick={() => {
          navigate(staticServerUri + '/onboarding/menu');
          localStorage.setItem('number', String(count));
        }}
      >
        다음으로
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Container = styled.div`
  /* background-color: red; */
  flex: 1;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  display: flex;
  flex-direction: column;
`;

const CounterContainer = styled.div`
  /* background-color: aliceblue; */
  flex: 1;
  display: flex;
  align-items: center;

  justify-content: space-evenly;
`;

const CntButton = styled.button`
  ${flexSet()};
  width: 42px;
  height: 42px;

  font-size: 30px;
  color: ${color.gray[7]};

  background-color: white;
  border: 1px solid ${color.gray[4]};
  border-radius: 50%;
`;

const CounterDisplay = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${color.gray[9]};
`;
