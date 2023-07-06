import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';
import Back from './components/Back';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { flexSet } from 'styles/minxin';

export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <ProgressBar currentStep={3} />
      <Back page='/onboarding/time' text='식사 일정' />
      <Container>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          어떤 요리를 할까요?
        </Typography>
      </Container>
      <Button
        col='white'
        bgCol={color.main[1]}
        onClick={() => {
          navigate('/onboarding/cost');
          localStorage.setItem('menuname', '조림');
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
