import styled from 'styled-components';
import GatheringGroup from './components/GatheringGroup';
import GatheringItem from './components/GatheringItem';
import { groupedDate } from './utils/groupedDate';
import { color } from 'styles/constants';
import { Typography } from 'components/Typography';
import SearchHeader from 'components/SearchHeader';
import { Divider } from 'components/Divider';
import { useGetMatchings } from './hooks/useGetMatchings';

export default function GatheringPage() {
  const matchingData = useGetMatchings();
  const recruitingData = matchingData.filter((value: any) => {
    return value.postStatus === 'N';
  });
  const recruitmentCompletedData = matchingData.filter((value: any) => {
    return value.postStatus === 'C';
  });
  const groupedData = groupedDate(recruitmentCompletedData);

  return (
    <>
      <SearchHeader title={'모임 정보'} underbarColor={color.white} />
      <Main>
        {recruitingData.length !== 0 && (
          <GatheringLabel>
            <Typography variant='title' size={5} color={color.white}>
              현재 모임
            </Typography>
          </GatheringLabel>
        )}

        <GatheredListArea>
          {recruitingData.map((data: any) => {
            return <GatheringItem data={data} key={data.postIdx} />;
          })}
        </GatheredListArea>

        {recruitingData.length === 0 && (
          <Divider height={14} backgroundColor={color.gray[2]} margin={36} />
        )}

        <GatheringListArea>
          {groupedData.map((data: any, index: number) => {
            return (
              <GatheringGroup
                key={`group: ${index}`}
                data={data}
                index={index}
                dataLength={groupedData.length}
              />
            );
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

const GatheringListArea = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  padding-bottom: 56px;
`;
