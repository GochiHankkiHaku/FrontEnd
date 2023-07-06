import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';
import Back from './components/Back';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function TimePage() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMealTime, setSelectedMealTime] = useState('');

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const handleMealTimeSelect = (mealTime: string) => {
    setSelectedMealTime(mealTime);
  };

  return (
    <Wrap>
      <ProgressBar currentStep={1} />
      <Back page='/' text='방문 목적' />
      <Container>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24}>
          언제 먹을까요?
        </Typography>
        <QuestionText></QuestionText>
        <ButtonGroup1>
          <Button1 onClick={() => handleDaySelect('오늘')} selected={selectedDay === '오늘'}>
            <Typography variant='title' size={6} color={color.gray[9]}>
              오늘
            </Typography>
          </Button1>
          <Button1 onClick={() => handleDaySelect('내일')} selected={selectedDay === '내일'}>
            <Typography variant='title' size={6} color={color.gray[9]}>
              내일
            </Typography>
          </Button1>
        </ButtonGroup1>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24} mt={30}>
          몇 시에 먹을까요?
        </Typography>
        <ButtonGroup2>
          <Button2
            onClick={() => handleMealTimeSelect('아침')}
            selected={selectedMealTime === '아침'}
          >
            <Typography variant='title' size={6} color={color.gray[9]}>
              아침 (8:00 ~ 10:00)
            </Typography>
          </Button2>
          <Button2
            onClick={() => handleMealTimeSelect('점심')}
            selected={selectedMealTime === '점심'}
          >
            <Typography variant='title' size={6} color={color.gray[9]}>
              점심 (10:00 ~ 14:00)
            </Typography>
          </Button2>
          {/* <Button2
            onClick={() => handleMealTimeSelect('점심2')}
            selected={selectedMealTime === '점심2'}
          >
            <Typography variant='title' size={6} color={color.gray[9]}>
              점심 (12:00 ~ 14:00)
            </Typography>
          </Button2> */}
          <Button2
            onClick={() => handleMealTimeSelect('저녁')}
            selected={selectedMealTime === '저녁'}
          >
            <Typography variant='title' size={6} color={color.gray[9]}>
              저녁 (16:00 ~ 18:00)
            </Typography>
          </Button2>
        </ButtonGroup2>
      </Container>
      <Button
        col='white'
        bgCol={color.main[2]}
        onClick={() => {
          localStorage.setItem('date', selectedDay);
          localStorage.setItem('time', selectedMealTime);
          navigate('/onboarding/personal');
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
  /* background-color: pink; */
`;
const Container = styled.div`
  /* background-color: red; */
  flex: 1;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const ButtonGroup1 = styled.div`
  display: flex;
`;

const Button1 = styled.button<{ selected: boolean }>`
  height: 50px;
  flex: 1;

  background-color: ${({ selected }) => (selected ? color.gray[4] : color.gray[1])};
  border: 1px solid ${color.gray[3]};
`;

const ButtonGroup2 = styled.div`
  background-color: 'red';
`;

const Button2 = styled.button<{ selected: boolean }>`
  width: 100%;
  margin: 5px;
  height: 50px;
  flex: 1;
  background-color: ${({ selected }) => (selected ? color.gray[4] : color.gray[1])};
  border: 1px solid ${color.gray[3]};
  border-radius: 8px;
`;

const QuestionText = styled.div``;
