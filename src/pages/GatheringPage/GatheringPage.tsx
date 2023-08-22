import styled from 'styled-components';
import GatheringGroup from './components/GatheringGroup';
import Test from './components/GatheringItem';
import { useFetch } from 'common/hooks/useFetch';
import { groupedDate } from './utils/groupedDate';
import { color } from 'styles/constants';
import { Typography } from 'components/Typography';
import SearchHeader from 'components/SearchHeader';

export default function GatheringPage() {
  const gatheringData = useFetch();
  const notDoneData = gatheringData.filter((value: any) => {
    return value.gathering_state === '모임 중';
  });
  const doneData = gatheringData.filter((value: any) => {
    return value.gathering_state === '모임 완료';
  });
  const groupedDoneData = groupedDate(doneData);

  return (
    <>
      <SearchHeader title={'모임 정보'} underbarColor={color.white} />
      <Main>
        {notDoneData.length !== 0 && (
          <GatheringLabel>
            <Typography variant='title' size={5} color={color.white}>
              현재 모임
            </Typography>
          </GatheringLabel>
        )}
        <GatheredListArea>
          {notDoneData.map((value: any, index: number) => {
            return <Test list={value} key={index} />;
          })}
        </GatheredListArea>
        {notDoneData.length !== 0 && <Divider />}
        <GatheringListArea>
          {groupedDoneData.map((value: any, index: number) => {
            return <GatheringGroup list={value} key={index} />;
          })}
        </GatheringListArea>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 0 20px;
`;

const GatheringLabel = styled.div`
  height: 43px;
  margin: 20px 0 16px 0;
  padding: 8px 12px;
  border-bottom: 1px solid ${color.gray[3]};
  border-radius: 12px 12px 0px 0px;
  background-color: ${color.main[2]};
`;

const GatheredListArea = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  margin: 36px 0;
  background-color: #f5f4f3;

  &:last-child {
    display: none;
  }
`;

const GatheringListArea = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  padding-bottom: 56px;
`;
