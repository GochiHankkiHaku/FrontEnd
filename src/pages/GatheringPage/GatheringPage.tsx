import styled from 'styled-components';
import GroupedGatheringItem from '../GatheringDetailPage/components/GroupedGatheringItem';
import { useFetch } from 'common/hooks/useFetch';
import { groupedDate } from './utils/helperFunc/groupedDate';

export default function GatheringPage() {
  const gatheringData = useFetch();
  const groupedGatheringData = groupedDate(gatheringData);

  return (
    <>
      <MapHeader>
        <div className='header_title'>모임 정보</div>
      </MapHeader>
      <ListArea>
        {groupedGatheringData.map((value: any, index: number) => {
          return <GroupedGatheringItem list={value} key={index} />;
        })}
      </ListArea>
    </>
  );
}

const MapHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 20px;

  > .header_title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #333333;
  }
`;

const ListArea = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  padding: 20px 20px 56px 20px;

  /* border: 1px solid red; */
`;
