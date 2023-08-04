import styled, { css } from 'styled-components';
import ProgressBar from './components/ProgressBar';
import Back from './components/Back';
import { Typography } from 'components/Typography';
import { color, radius } from 'styles/constants';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const day = {
  today: '오늘',
  tomorrow: '내일',
};

const time = {
  breakfast: '아침 (8:00 ~ 10:00)',
  lunchEarly: '점심 (10:00 ~ 12:00)',
  lunchLate: '점심 (12:00 ~ 14:00)',
  dinner: '저녁 (16:00 ~ 18:00)',
};

const getTextColor = (isSelected: boolean) => (isSelected ? color.white : color.gray[9]);

export default function TimePage() {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMealTime, setSelectedMealTime] = useState('');

  const navigate = useNavigate();

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const handleMealTimeSelect = (mealTime: string) => {
    setSelectedMealTime(mealTime);
  };

  return (
    <Wrap>
      <ProgressBar currentStep={1} />
      <Back page={'/'} text='장소 선택' />
      <Container>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24}>
          언제 먹을까요?
        </Typography>
        <DayBtnsWrap>
          <DayBtnLeft
            onClick={() => handleDaySelect(day.today)}
            selected={selectedDay === day.today}
          >
            <Typography variant='title' size={6} color={getTextColor(selectedDay === day.today)}>
              오늘
            </Typography>
          </DayBtnLeft>
          <DayBtnRight
            onClick={() => handleDaySelect(day.tomorrow)}
            selected={selectedDay === day.tomorrow}
          >
            <Typography variant='title' size={6} color={getTextColor(selectedDay === day.tomorrow)}>
              내일
            </Typography>
          </DayBtnRight>
        </DayBtnsWrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24} mt={30}>
          몇 시에 먹을까요?
        </Typography>
        <TimeBtnsWrap>
          <TimeBtn
            onClick={() => handleMealTimeSelect(time.breakfast)}
            selected={selectedMealTime === time.breakfast}
          >
            <Typography variant='title' size={6} color={color.gray[9]}>
              {time.breakfast}
            </Typography>
          </TimeBtn>
          <TimeBtn
            onClick={() => handleMealTimeSelect(time.lunchEarly)}
            selected={selectedMealTime === time.lunchEarly}
          >
            <Typography
              variant='title'
              size={6}
              color={getTextColor(selectedMealTime === time.lunchEarly)}
            >
              {time.lunchEarly}
            </Typography>
          </TimeBtn>
          <TimeBtn
            onClick={() => handleMealTimeSelect(time.lunchLate)}
            selected={selectedMealTime === time.lunchLate}
          >
            <Typography
              variant='title'
              size={6}
              color={getTextColor(selectedMealTime === time.lunchLate)}
            >
              {time.lunchLate}
            </Typography>
          </TimeBtn>
          <TimeBtn
            onClick={() => handleMealTimeSelect(time.dinner)}
            selected={selectedMealTime === time.dinner}
          >
            <Typography
              variant='title'
              size={6}
              color={getTextColor(selectedMealTime === time.dinner)}
            >
              {time.dinner}
            </Typography>
          </TimeBtn>
        </TimeBtnsWrap>
      </Container>

      <LaterBtn>
        <Typography variant='paragraph' size={5} color={color.gray[5]}>
          나중에 선택하기
        </Typography>
      </LaterBtn>
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

const DayBtnsWrap = styled.div`
  display: flex;
`;

const DayBtn = styled.button<{ selected: boolean }>`
  height: 50px;
  flex: 1;

  background-color: ${color.gray[1]};
  border: 1px solid ${color.gray[3]};

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${color.main[2]};
      color: ${color.white};
      border: none;
    `}
`;

const DayBtnLeft = styled(DayBtn)`
  border-top-left-radius: ${radius[4]}px;
  border-bottom-left-radius: ${radius[4]}px;
`;
const DayBtnRight = styled(DayBtn)`
  border-top-right-radius: ${radius[4]}px;
  border-bottom-right-radius: ${radius[4]}px;
  border-left: none;
`;

const TimeBtnsWrap = styled.div`
  background-color: 'red';
`;

const TimeBtn = styled.button<{ selected: boolean }>`
  width: 100%;
  height: 50px;
  flex: 1;
  background-color: ${color.gray[1]};
  border: 1px solid ${color.gray[3]};
  border-radius: 8px;

  & + & {
    margin-top: 24px;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${color.main[2]};
      color: ${color.white};
      border: none;
    `}
`;

const LaterBtn = styled.button`
  background-color: transparent;
  margin-bottom: 8px;
`;
