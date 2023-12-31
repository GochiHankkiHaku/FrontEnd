import styled from 'styled-components';
import GatheringItem from './GatheringItem';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { Divider } from 'components/Divider';
import { changeFormatDate } from 'pages/SearchPage/utils/changeFormatDate';
import { GatheringGroupProps } from '../utils/gatheringPage.type';

export default function GatheringGroup({ data }: GatheringGroupProps) {
  return (
    <>
      <Wrap>
        <GatheringDate>
          <Typography variant='title' size={5} color={color.gray[7]} pt={8} pb={8}>
            {changeFormatDate(data[0].postDate)}
          </Typography>
        </GatheringDate>
        {data.map((value) => {
          return <GatheringItem key={value.postIdx} data={value} />;
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
