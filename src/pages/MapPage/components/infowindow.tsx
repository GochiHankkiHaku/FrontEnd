import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { InfowindowProps } from '../utils/interface';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-backward.svg';

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
    <UnderBar ref={infoRef} onClick={moveDetailPage}>
      <TitleArea>
        <div className='title'>{markerInfo.markerMenuname} 요리 모임 합니다.</div>
        <div className='title_state'>
          <div className='title_state-text'>{markerInfo.markerDate} 모집</div>
        </div>
      </TitleArea>
      <InfoArea>
        <Info>
          <div className='address'>{address}</div>
          <div className='distance'>
            <div className='text'>
              {markerInfo.markerApplication}/{markerInfo.markerNumber} 모집 완료
            </div>
            <div className='meter'>{markerInfo.markerDistance}m</div>
          </div>
          <div className='host_btn'>
            <div className='ex'>최고에요 37</div>
            <div className='good'>좋아요 15</div>
          </div>
        </Info>
        <Arrow>
          <ArrowChevron />
        </Arrow>
      </InfoArea>
    </UnderBar>
  );
}

const UnderBar = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 164px;
  font-size: 20px;
  background-color: white;
  padding: 16px 20px 16px 20px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 0px 8px 0px #00000066;
  gap: 8px;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  height: 27px;
  gap: 8px;

  > .title {
    font-weight: 700;
    font-size: 18px;
  }

  > .title_state {
    display: flex;
    align-items: center;
    width: 62px;
    height: 24px;
    padding: 5px 12px 5px 12px;
    border-radius: 70px;
    border: 1px;
    gap: 10px;
    color: #ff5325;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    border: 1px solid #ff5325;

    > .title_state-text {
      width: 38px;
    }
  }
`;

const InfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  padding: 12px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  border-top: 1px solid #dfdfdf;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 322px;

  > .address {
    height: 18px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #8b8b8b;
  }

  > .distance {
    display: flex;
    gap: 8px;

    > .text {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;
    }

    > .meter {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #128fe9;
    }
  }

  > .ingredient {
    display: flex;
    align-items: center;
    width: 205px;
    height: 30px;
    gap: 8px;

    > .ingredient_title {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #333333;
    }

    > .ingredient_list {
      display: flex;
      gap: 8px;

      > .ingredient_item {
        width: 30px;
        height: 30px;
        background-color: #d9d9d9;
      }
    }
  }

  > .host_btn {
    display: flex;
    gap: 5px;

    > .ex {
      font-size: 10px;
      font-weight: 600;
      color: #ff5c00;
      padding: 4.5px 12px;
      border-radius: 70px;
      border: 1px solid #c1c1c1;
    }

    > .good {
      font-size: 10px;
      font-weight: 600;
      color: #ffa51f;
      padding: 4.5px 12px;
      border-radius: 70px;
      border: 1px solid #c1c1c1;
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
`;
