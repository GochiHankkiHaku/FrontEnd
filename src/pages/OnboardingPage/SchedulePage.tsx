import styled, { css } from 'styled-components';
import { Typography } from 'components/Typography';
import { color, radius } from 'styles/constants';
import { usePage } from './hooks/usePage';
import Footer from './components/Footer';
import { useFormActions, useApplyForm } from './store/formStore';

const DAY = {
  today: '오늘',
  tomorrow: '내일',
} as const;

const TIME = {
  breakfast: '아침 (8:00 ~ 10:00)',
  lunchEarly: '점심 (10:00 ~ 12:00)',
  lunchLate: '점심 (12:00 ~ 14:00)',
  dinner: '저녁 (16:00 ~ 18:00)',
} as const;

const getTextColor = (isSelected: boolean) => (isSelected ? color.white : color.gray[9]);

export default function SchedulePage() {
  const { goNextPage } = usePage();

  const { day, time } = useApplyForm();
  const { setDay, setTime } = useFormActions();

  const isBtnDisabled = day == null || time == null;

  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24}>
          언제 먹을까요?
        </Typography>
        <DayBtnsWrap>
          <DayBtnLeft onClick={() => setDay(DAY.today)} selected={day === DAY.today}>
            <Typography variant='title' size={6} color={getTextColor(day === DAY.today)}>
              {DAY.today}
            </Typography>
          </DayBtnLeft>
          <DayBtnRight onClick={() => setDay(DAY.tomorrow)} selected={day === DAY.tomorrow}>
            <Typography variant='title' size={6} color={getTextColor(day === DAY.tomorrow)}>
              {DAY.tomorrow}
            </Typography>
          </DayBtnRight>
        </DayBtnsWrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24} mt={30}>
          몇 시에 먹을까요?
        </Typography>
        <TimeBtnsWrap>
          <TimeBtn onClick={() => setTime(TIME.breakfast)} selected={time === TIME.breakfast}>
            <Typography variant='title' size={6} color={getTextColor(time === TIME.breakfast)}>
              {TIME.breakfast}
            </Typography>
          </TimeBtn>
          <TimeBtn onClick={() => setTime(TIME.lunchEarly)} selected={time === TIME.lunchEarly}>
            <Typography variant='title' size={6} color={getTextColor(time === TIME.lunchEarly)}>
              {TIME.lunchEarly}
            </Typography>
          </TimeBtn>
          <TimeBtn onClick={() => setTime(TIME.lunchLate)} selected={time === TIME.lunchLate}>
            <Typography variant='title' size={6} color={getTextColor(time === TIME.lunchLate)}>
              {TIME.lunchLate}
            </Typography>
          </TimeBtn>
          <TimeBtn onClick={() => setTime(TIME.dinner)} selected={time === TIME.dinner}>
            <Typography variant='title' size={6} color={getTextColor(time === TIME.dinner)}>
              {TIME.dinner}
            </Typography>
          </TimeBtn>
        </TimeBtnsWrap>
      </Wrap>
      <Footer
        isDisabled={isBtnDisabled}
        onClick={() => {
          goNextPage();
        }}
      />
    </>
  );
}

const Wrap = styled.div`
  padding: 30px 20px;

  overflow: auto;
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
