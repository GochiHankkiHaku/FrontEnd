import styled from 'styled-components';
import GatheringItem from './GatheringItem';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { Divider } from 'components/Divider';

export default function GatheringGroup({ data, index, dataLength }: any) {
  return (
    <>
      <Wrap>
        <GatheringDate>
          <Typography variant='title' size={5} color={color.gray[7]} pt={8} pb={8}>
            {data[0].postDate}
          </Typography>
        </GatheringDate>
        {data.map((value: any) => {
          return <GatheringItem data={value} key={value.postIdx} />;
        })}
      </Wrap>
      {index !== dataLength - 1 && <Divider height={14} backgroundColor={color.gray[2]} />}
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
