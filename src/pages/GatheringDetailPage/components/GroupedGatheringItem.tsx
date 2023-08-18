import styled from 'styled-components';
import GatheringItem from './GatheringItem';

export default function GroupedGatheringItem({ list }: any) {
  return (
    <Test>
      <div>{list[0].gathering_date}</div>
      {list.map((value: any) => {
        return <GatheringItem list={value} key={value.post_idx} />;
      })}
    </Test>
  );
}

const Test = styled.li`
  border: 1px solid blue;
  font-size: 15px;
`;
