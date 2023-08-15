import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import fish from 'assets/images/어류.png';
import vege from 'assets/images/채소.png';
import grain from 'assets/images/곡류.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ApplyHeader from 'components/ApplyHeader';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function GatheringApplyPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const markerInfo = location.state.markerInfo;
  const address = location.state.address;

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const moveMapPage = () => {
    navigate(-1);
  };

  const movePaymentPage = () => {
    navigate('/payment', {
      state: {
        location,
      },
    });
  };

  return (
    <>
      <ApplyHeader title={'참가비 결제'} movePageHandler={moveMapPage} />
      <Typography variant='title' size={3} color={color.gray[9]} pt={10} pr={20} pb={10} pl={20}>
        어떤 모임인지 확인하세요.
      </Typography>
      <ApplyInfoContainer>
        <ApplyItem>
          <Typography variant='title' size={5} color={color.gray[9]}>
            요리 정보
          </Typography>
          <ApplyMenuItemContent>
            <img className='menu_image' />
            <MenuItemTextArea>
              <Typography variant='paragraph' size={1} color={color.gray[9]}>
                {markerInfo.markerMenuname}
              </Typography>
              <div className='menu_text-content'>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </div>
            </MenuItemTextArea>
          </ApplyMenuItemContent>
        </ApplyItem>
        <Divider />
        <ApplyItem>
          <Typography variant='title' size={5} color={color.gray[9]}>
            모임 시간대
          </Typography>
          <ReservationTime>{markerInfo.markerTime} (12:00 ~ 14:00)</ReservationTime>
        </ApplyItem>
        <Divider />
        <HostInfo>
          <Typography variant='title' size={5} color={color.gray[9]}>
            개설자 정보
          </Typography>
          <ApplyHostItemContent>
            <User1 />
            <ApplyHostItemDetailContent>
              <div className='name'>개설자 이름</div>
              <Typography variant='paragraph' size={2} color={color.gray[9]}>
                장소 이름
              </Typography>
              <Typography variant='caption' size={2} color={color.gray[6]}>
                {address}
              </Typography>
              <TagArea>
                <div className='ex'>최고에요 37</div>
                <div className='good'>좋아요 15</div>
              </TagArea>
            </ApplyHostItemDetailContent>
          </ApplyHostItemContent>
        </HostInfo>
        <Divider />
        <ApplyItem>
          <ApplyIngredientTitle>
            <Typography variant='title' size={5} color={color.gray[9]}>
              재료 시세 정보
            </Typography>
            <PriceAlert>
              <Info className='info_icon' onClick={openHandler} />
              {isOpen && (
                <div className='price_alert-text'>
                  가격 측정 기준 해양 수산부의&nbsp;
                  <Link
                    to='https://www.fishtrace.go.kr/home/mpInfo/actionFishPrice.do'
                    target='_blank'
                  >
                    수산물이력제
                  </Link>
                  를 기반으로 작성되었습니다.
                </div>
              )}
            </PriceAlert>
          </ApplyIngredientTitle>
          <ApplyIngredientItemContent>
            <IngredientItem>
              <img className='profile' src={fish} />
              <PriceInfo>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  갈치
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 9,000원
                </Typography>
              </PriceInfo>
            </IngredientItem>
            <IngredientItem>
              <img className='profile' src={vege} />
              <PriceInfo>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  무
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 3,000원
                </Typography>
              </PriceInfo>
            </IngredientItem>
            <IngredientItem>
              <img className='profile' src={grain} />
              <PriceInfo>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  흰쌀밥 (200g)
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 2,000원
                </Typography>
              </PriceInfo>
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

const ApplyMenuItemContent = styled.div`
  display: flex;
  gap: 12px;

  > .menu_image {
    width: 144px;
    height: 144px;
    border-radius: 4px;
    background-color: peachpuff;
  }
`;

const MenuItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc(100% - 12px - 144px);

  > .menu_text-content {
    font-size: 14px;
    font-weight: 400;
    color: #6f6f6f;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: #f5f4f3;
`;

const ReservationTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const TagArea = styled.div`
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
`;

const ApplyIngredientTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceAlert = styled.div`
  position: relative;

  > .info_icon {
    cursor: pointer;
  }

  > .price_alert-text {
    position: absolute;
    width: 273px;
    font-size: 14px;
    font-weight: 400;
    top: 43px;
    right: -1px;
    padding: 12px;
    border-radius: 4px;
    background: #f5f4f3;
    box-shadow: 0px 0px 8px 0px #00000066;

    > a {
      text-decoration: underline;
    }

    &::before {
      position: absolute;
      content: '';
      border-top: 0px solid transparent;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid #f5f4f3;
      top: -10px;
      right: 5px;
    }
  }
`;

const ApplyIngredientItemContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 85px;
`;

const IngredientItem = styled.li`
  display: flex;
  gap: 8px;

  > .profile {
    width: 80px;
    height: 80px;
    background-color: #aed8ff;
    border-radius: 4px;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px - 8px);
  gap: 4px;
`;

const PaymentBtnArea = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  padding: 12px 20px 8px 20px;
  border-top: 1px solid #c1c1c1;
  background-color: white;
`;

const PayBtn = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #ff5c00;
  border-radius: 8px;
`;
