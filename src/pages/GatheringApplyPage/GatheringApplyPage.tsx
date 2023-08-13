import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import fish from 'assets/images/어류.png';
import vege from 'assets/images/채소.png';
import grain from 'assets/images/곡류.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function GatheringApplyPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const movePaymentPage = () => {
    navigate('/payment');
  };

  return (
    <>
      <ApplyHeader>
        <ArrowChevron />
        <div className='apply_header-text'>모임 신청하기</div>
        <div className='none'></div>
      </ApplyHeader>
      <ApplyCheckText>어떤 모임인지 확인하세요.</ApplyCheckText>
      <ApplyInfoContainer>
        <ApplyItem>
          <ApplyItemTitle>요리 정보</ApplyItemTitle>
          <ApplyMenuItemContent>
            <img className='menu_image' />
            <div className='menu_text'>
              <div className='menu_text-title'>{location.state.markerInfo.markerMenuname}</div>
              <div className='menu_text-content'>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </div>
            </div>
          </ApplyMenuItemContent>
        </ApplyItem>
        <Divider></Divider>
        <ApplyItem>
          <ApplyItemTitle>모임 시간대</ApplyItemTitle>
          <ReservationTime>점심 (12:00 ~ 14:00)</ReservationTime>
        </ApplyItem>
        <Divider></Divider>
        <HostInfo>
          <ApplyItemTitle>개설자 정보</ApplyItemTitle>
          <ApplyHostItemContent>
            <User1 />
            <ApplyHostItemDetailContent>
              <div className='name'>개설자 이름</div>
              <div className='position_name'>장소 이름</div>
              <div className='address'>{location.state.address}</div>
              <div className='host_btn'>
                <div className='ex'>최고에요 37</div>
                <div className='good'>좋아요 15</div>
              </div>
            </ApplyHostItemDetailContent>
          </ApplyHostItemContent>
        </HostInfo>
        <Divider></Divider>
        <ApplyItem>
          <ApplyIngredientTitle>
            <div className='price_text'>재료 시세 정보</div>
            <Info onClick={openHandler} />
            {isOpen && <p>가격 측정 기준 해양 수산부의 수산물이력제를 기반으로 작성되었습니다.</p>}
          </ApplyIngredientTitle>
          <ApplyIngredientItemContent>
            <IngredientItem>
              <img className='profile' src={fish} />
              <div className='price_info'>
                <div className='price_info-menuname'>갈치</div>
                <div className='price_info-cost'>평균 9,000원</div>
              </div>
            </IngredientItem>
            <IngredientItem>
              <img className='profile' src={vege} />
              <div className='price_info'>
                <div className='price_info-menuname'>무</div>
                <div className='price_info-cost'>평균 3,000원</div>
              </div>
            </IngredientItem>
            <IngredientItem>
              <img className='profile' src={grain} />
              <div className='price_info'>
                <div className='price_info-menuname'>흰쌀밥 (200g)</div>
                <div className='price_info-cost'>평균 2,000원</div>
              </div>
            </IngredientItem>
          </ApplyIngredientItemContent>
        </ApplyItem>
      </ApplyInfoContainer>
      <PaymentBtnArea>
        <PayBtn onClick={movePaymentPage}>참가비 결제</PayBtn>
      </PaymentBtnArea>
    </>
  );
}

const ApplyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 44px;
  border-bottom: 1px solid #dfdfdf;

  > .apply_header-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }

  > .none {
    width: 24px;
    height: 24px;
  }
`;

const ApplyCheckText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
`;

const ApplyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
`;

const ApplyItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
  padding: 10px 19.5px;
`;

const ApplyItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
`;

const ApplyMenuItemContent = styled.div`
  display: flex;
  gap: 12px;

  > .menu_image {
    width: 144px;
    height: 144px;
    border-radius: 4px;
    background-color: peachpuff;
  }

  > .menu_text {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: calc(100% - 12px - 144px);

    > .menu_text-title {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }

    > .menu_text-content {
      font-size: 14px;
      font-weight: 400;
      color: #6f6f6f;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: #f5f4f3;
`;

const ReservationTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 20px;
  color: #333333;
  border-radius: 8px;
  border: 1px solid #c1c1c1;
  background-color: #f5f4f3;
`;

const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 10px 19.5px;
`;

const ApplyHostItemContent = styled.div`
  display: flex;
  gap: 12px;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #c1c1c1;
`;

const ApplyHostItemDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24px - 81px);
  gap: 4px;

  > .name {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }

  > .position_name {
    font-size: 16px;
    font-weight: 500;
    color: #333333;
  }

  > .address {
    font-size: 12px;
    font-weight: 500;
    color: #8b8b8b;
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

const ApplyIngredientTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .price_text {
    color: #333333;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    width: 280px;
    position: absolute;
    padding: 12px;
    right: 15px;
    bottom: -343px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    background-color: #f5f4f3;
    box-shadow: 0px 0px 8px 0px #00000066;

    &::before {
      position: absolute;
      content: '';
      border: 10px solid transparent;
      border-bottom: 13px solid #f5f4f3;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -20px;
      right: 8px;
    }
  }
`;

const ApplyIngredientItemContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 80px;
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  > .profile {
    width: 80px;
    height: 80px;
    background-color: #aed8ff;
    border-radius: 4px;
  }

  > .price_info {
    display: flex;
    flex-direction: column;
    width: calc(100% - 80px - 8px);
    gap: 4px;

    > .price_info-menuname {
      font-size: 18px;
      font-weight: 600;
      color: #333333;
    }

    > .price_info-cost {
      font-size: 16px;
      font-weight: 500;
      color: #333333;
    }
  }
`;

const PaymentBtnArea = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  padding: 12px 20px 8px 20px;
  border-top: 1px solid #c1c1c1;
  background-color: white;
`;

const PayBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #ff5c00;
  border-radius: 8px;
`;
