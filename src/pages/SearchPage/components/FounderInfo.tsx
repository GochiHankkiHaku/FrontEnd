import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import { GatheringTagArea, GatheringPopularityTag } from './Infowindow';
import { FounderInfoProps } from '../utils/interface';

export default function FounderInfo({ founder, address, great, good }: FounderInfoProps) {
  return (
    <HostInfoArea>
      <User1 />
      <HostDescription>
        <Typography variant='paragraph' size={3} color={color.gray[9]}>
          {founder}
        </Typography>
        <Typography variant='paragraph' size={2} color={color.gray[9]}>
          장소 이름
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

const HostInfoArea = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  column-gap: 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray[4]};
`;

const HostDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24px - 81px);
  row-gap: 4px;
`;

// const GatheringPopularityTagArea = styled.div`
//   display: flex;
//   column-gap: 4px;
// `;

// const GatheringPopularityTag = styled.div<{ color: string }>`
//   padding: 4.5px 12px;
//   border-radius: 70px;
//   border: 1px solid ${color.gray[4]};

//   font-family: ${typograpy.caption[4].fontFamily};
//   font-weight: ${typograpy.caption[4].fontWeight};
//   font-size: ${typograpy.caption[4].fontSize}px;
//   color: ${({ color }) => (color === '#FF5C00' ? color : color)};
// `;
