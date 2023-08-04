import { Typography } from 'components/Typography';
import { Button } from 'components/Button';
import { color } from 'styles/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { flexSet } from 'styles/minxin';
import { getNextPageUrl } from './utils/pagesInformation';

export default function MemberCountPage() {
  const location = useLocation().pathname;

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
          <CountBtn onClick={handleDecrement}>-</CountBtn>
          <CounterText>{count} 명</CounterText>
          <CountBtn onClick={handleIncrement}>+</CountBtn>
        </CounterContainer>
      </Container>
      <Button
        col='white'
        bgCol={color.main[2]}
        onClick={() => {
          navigate(getNextPageUrl(location));
          localStorage.setItem('number', String(count));
        }}
      >
        다음으로
      </Button>
    </Wrap>
  );
}
const Wrap = styled.div`
  flex: 1;

  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;

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

const CounterText = styled.span`
  min-width: 100px;
  text-align: center;

  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${color.gray[9]};
`;
