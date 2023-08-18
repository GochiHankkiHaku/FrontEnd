import styled from 'styled-components';
import GatheringItem from './GatheringItem';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function GroupedGatheringItem({ list }: any) {
  return (
    <>
      <GroupedItemWrap>
        <DateArea>
          <Typography variant='title' size={5} color={color.gray[7]} pt={8} pb={8}>
            {list[0].gathering_date}
          </Typography>
        </DateArea>
        {list.map((value: any) => {
          return <GatheringItem list={value} key={value.post_idx} />;
        })}
      </GroupedItemWrap>
      <Divider />
    </>
  );
}

const GroupedItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-size: 15px;

  /* border: 1px solid blue; */
`;

const DateArea = styled.div`
  border-bottom: 1px solid #dfdfdf;
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: #f5f4f3;

  &:last-child {
    display: none;
  }
`;
