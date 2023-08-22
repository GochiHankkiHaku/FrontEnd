import styled from 'styled-components';
import GatheringItem from './GatheringItem';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { Divider } from 'components/Divider';

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
      <Divider height={14} backgroundColor={color.gray[2]} />
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
