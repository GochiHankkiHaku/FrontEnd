import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MarkerInfoWindowProps } from '../utils/searchPage.type';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-backward.svg';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function MarkerInfoWindow({ infoRef, markerInfo }: MarkerInfoWindowProps) {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(`/detail/${markerInfo.post_idx}`);
  };

  return (
    <Wrap ref={infoRef} onClick={moveDetailPage}>
      <TitleArea>
        <Typography variant='title' size={4} color={color.gray[9]}>
          {markerInfo.menuname} 요리 모임 합니다.
        </Typography>
      </TitleArea>
      <BodyArea>
        <ContentArea>
          <Typography variant='caption' size={2} color={color.gray[6]}>
            {markerInfo.address}
          </Typography>
          <GatheringTagArea gap={8}>
            <GatheringTagArea gap={8}>
              {markerInfo.date === '오늘' ? (
                <GatheringDateTag border={color.main[1]}>
                  <Typography variant='caption' size={4} color={color.main[1]}>
                    {markerInfo.date} 모집
                  </Typography>
                </GatheringDateTag>
              ) : (
                <GatheringDateTag border={color.main[2]}>
                  <Typography variant='caption' size={4} color={color.main[2]}>
                    {markerInfo.date} 모집
                  </Typography>
                </GatheringDateTag>
              )}
              {markerInfo.status === 'N' ? (
                <GatheringStatusTag background={color.active}>
                  <Typography variant='caption' size={4} color={color.white}>
                    모집중
                  </Typography>
                </GatheringStatusTag>
              ) : (
                <GatheringStatusTag background={color.complete}>
                  <Typography variant='caption' size={4} color={color.white}>
                    모집 완료
                  </Typography>
                </GatheringStatusTag>
              )}
              <Typography variant='paragraph' size={7} color={color.active}>
                {markerInfo.distance}m
              </Typography>
            </GatheringTagArea>
          </GatheringTagArea>
          <GatheringTagArea gap={4}>
            <GatheringPopularityTag>
              <Typography variant='caption' size={4} color={color.main[1]}>
                최고에요 {markerInfo.great}
              </Typography>
            </GatheringPopularityTag>
            <GatheringPopularityTag>
              <Typography variant='caption' size={4} color={color.main[2]}>
                좋아요 {markerInfo.good}
              </Typography>
            </GatheringPopularityTag>
          </GatheringTagArea>
        </ContentArea>
        <ArrowChevron />
      </BodyArea>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 20px;
  flex-direction: column;
  row-gap: 8px;
  position: absolute;
  bottom: 0;
  z-index: 999;
  border-radius: 8px 8px 0px 0px;
  background-color: ${color.white};
  box-shadow: 0px 0px 8px 0px #00000066;
  cursor: pointer;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const BodyArea = styled.div`
  display: flex;
  padding-top: 12px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${color.gray[3]};
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: 1 0 0;
`;

export const GatheringTagArea = styled.div<{ gap: number }>`
  display: flex;
  align-items: center;
  column-gap: ${({ gap }) => (gap === 8 ? `${gap}px` : `${gap}px`)};
`;

const GatheringDateTag = styled.div<{ border: string }>`
  padding: 5px 12px;
  border-radius: 70px;
  border: 1px solid ${({ border }) => (border === color.main[1] ? border : border)};
`;

const GatheringStatusTag = styled.div<{ background: string }>`
  padding: 5px 12px;
  border-radius: 70px;
  background-color: ${({ background }) =>
    background === color.complete ? background : background};
`;

export const GatheringPopularityTag = styled.div`
  padding: 5px 12px;
  border-radius: 70px;
  border: 1px solid ${color.gray[4]};
`;
