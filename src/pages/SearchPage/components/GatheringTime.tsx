import styled from 'styled-components';
import { color } from 'styles/constants';
import { GatheringTimeProps } from '../utils/interface';
import { Typography } from 'components/Typography';

export default function GatheringTime({ time }: GatheringTimeProps) {
  return (
    <GatheringTimeArea>
      <Typography variant='title' size={6}>
        {time}
      </Typography>
    </GatheringTimeArea>
  );
}

const GatheringTimeArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid ${color.gray[4]};
  background-color: ${color.gray[2]};
`;
