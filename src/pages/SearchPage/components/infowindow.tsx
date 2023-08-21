import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { InfowindowProps } from '../utils/interface';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-backward.svg';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { typograpy } from 'styles/constants';

export default function Infowindow({ infoRef, markerInfo, address }: InfowindowProps) {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(`/detail/${markerInfo.markerId}`, {
      state: {
        markerInfo,
        address,
      },
    });
  };

  return (
    <Wrap ref={infoRef} onClick={moveDetailPage}>
      <TitleArea>
        <Typography variant='title' size={4} color={color.gray[9]}>
          {markerInfo.markerMenuname} 요리 모임 합니다.
        </Typography>
        <GatheringDateTag>
          <Typography variant='caption' size={4} color={color.main[6]}>
            {markerInfo.markerDate} 모집
          </Typography>
        </GatheringDateTag>
      </TitleArea>
      <BodyArea>
        <ContentArea>
          <Typography variant='caption' size={2} color={color.gray[6]}>
            {address}
          </Typography>
          <GatheringDistanceArea>
            <Typography variant='paragraph' size={4} color={color.gray[9]}>
              {markerInfo.markerApplication}/{markerInfo.markerNumber} 모집 완료
            </Typography>
            <Typography variant='paragraph' size={7} color={color.active}>
              {markerInfo.markerDistance}m
            </Typography>
          </GatheringDistanceArea>
          <GatheringPopularityTagArea>
            <GatheringPopularityTag color={color.main[1]}>최고에요 37</GatheringPopularityTag>
            <GatheringPopularityTag color={color.main[2]}>좋아요 15</GatheringPopularityTag>
          </GatheringPopularityTagArea>
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

const GatheringDateTag = styled.div`
  padding: 4.5px 12px;
  border-radius: 70px;
  border: 1px solid ${color.main[6]};
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

const GatheringDistanceArea = styled.div`
  display: flex;
  column-gap: 8px;
`;

const GatheringPopularityTagArea = styled.div`
  display: flex;
  column-gap: 4px;
`;

const GatheringPopularityTag = styled.div<{ color: string }>`
  padding: 4.5px 12px;
  border-radius: 70px;
  border: 1px solid ${color.gray[4]};

  font-family: ${typograpy.caption[4].fontFamily};
  font-weight: ${typograpy.caption[4].fontWeight}px;
  font-size: ${typograpy.caption[4].fontSize}px;
  color: ${({ color }) => (color === '#FF5C00' ? color : color)};
`;
