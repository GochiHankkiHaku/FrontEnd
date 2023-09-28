import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import { GatheringTagArea, GatheringPopularityTag } from './MarkerInfoWindow';
import { FounderInfoProps } from '../utils/searchPage.type';

export default function FounderInfo({
  founder,
  address,
  great,
  good,
  founderInfoBorder,
}: FounderInfoProps) {
  const borderColor = founderInfoBorder === 'detail' ? color.gray[4] : color.white;

  return (
    <HostInfoArea borderColor={borderColor}>
      <User1 />
      <HostDescription>
        <Typography variant='paragraph' size={3} color={color.gray[9]}>
          {founder}
        </Typography>
        <Typography variant='caption' size={2} color={color.gray[6]}>
          {address}
        </Typography>
        <GatheringTagArea gap={4}>
          <GatheringPopularityTag>
            <Typography variant='caption' size={4} color={color.main[1]}>
              최고에요 {great}
            </Typography>
          </GatheringPopularityTag>
          <GatheringPopularityTag>
            <Typography variant='caption' size={4} color={color.main[2]}>
              좋아요 {good}
            </Typography>
          </GatheringPopularityTag>
        </GatheringTagArea>
      </HostDescription>
    </HostInfoArea>
  );
}

const HostInfoArea = styled.div<{ borderColor: string }>`
  display: flex;
  padding: 12px;
  align-items: center;
  column-gap: 12px;
  border-radius: 8px;
  border: 1px solid ${({ borderColor }) => borderColor};
`;

export const HostDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 24px - 81px);
  row-gap: 4px;
`;
