import styled from 'styled-components';
import GatheringItem from './GatheringItem';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function GatheringGroup({ list }: any) {
  return (
    <>
      <Wrap>
        <GatheringDate>
          <Typography variant='title' size={5} color={color.gray[7]} pt={8} pb={8}>
            {list[0].gathering_date}
          </Typography>
        </GatheringDate>
        {list.map((value: any) => {
          return <GatheringItem list={value} key={value.post_idx} />;
        })}
      </Wrap>
      <Divider />
    </>
  );
}

const Wrap = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const GatheringDate = styled.div`
  border-bottom: 1px solid ${color.gray[3]};
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: ${color.gray[2]};

  &:last-child {
    display: none;
  }
`;
