import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import fish from 'assets/images/어류.png';
import vege from 'assets/images/채소.png';
import grain from 'assets/images/곡류.png';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function GatheringDetailPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const detailInfo = location.state.list;

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DetailHeader>
        <Typography variant='title' size={2} color={color.gray[9]}>
          모임 정보
        </Typography>
      </DetailHeader>
      <DetailInfoContainer>
        <DetailItem>
          <MenuInfoHeader>
            <Typography variant='paragraph' size={2} color={color.gray[9]}>
              {detailInfo.gathering_date}
            </Typography>
            <Typography variant='title' size={1} color={color.gray[9]}>
              {detailInfo.menuname} 요리 모집
            </Typography>
          </MenuInfoHeader>
          <DetailMenuItemContent>
            <DetailMenuItemImg src={fish} />
            <MenuItemTextArea>
              <Typography variant='paragraph' size={1} color={color.gray[9]}>
                {detailInfo.menuname}
              </Typography>
              <Typography variant='paragraph' size={6} color={color.gray[7]}>
                제주 연안에 서식하는 자리돔을 간장으로 졸인 음식
              </Typography>
            </MenuItemTextArea>
          </DetailMenuItemContent>
        </DetailItem>
        <Divider />
        <DetailItem>
          <Typography variant='title' size={4} color={color.gray[9]}>
            개최자 정보
          </Typography>
          <ApplyHostItemContent>
            <User1 />
            <ApplyHostItemDetailContent>
              <Typography variant='paragraph' size={3} color={color.gray[9]}>
                개설자 이름
              </Typography>
              <Typography variant='paragraph' size={2} color={color.gray[9]}>
                장소 이름
              </Typography>
              <Typography variant='caption' size={2} color={color.gray[6]}>
                주소
              </Typography>
              <TagArea>
                <div className='ex'>최고에요 37</div>
                <div className='good'>좋아요 15</div>
              </TagArea>
            </ApplyHostItemDetailContent>
          </ApplyHostItemContent>
        </DetailItem>
        <Divider />
        <DetailItem>
          <Typography variant='title' size={4} color={color.gray[9]}>
            참여자 정보
          </Typography>
          <ParticipantsImages>
            <UserInfo>
              <User1 />
              <Typography variant='paragraph' size={6} color={color.gray[9]}>
                유저 네임외 3명
              </Typography>
            </UserInfo>
          </ParticipantsImages>
        </DetailItem>
        <Divider />
        <ApplyItem>
          <ApplyIngredientTitle>
            <Typography variant='title' size={4} color={color.gray[9]}>
              가격 측정 정보
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
              <MenuImg src={fish} />
              <PriceInfo>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  갈치
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 시세 9,000원
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
                  평균 시세 3,000원
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
                  평균 시세 2,000원
                </Typography>
              </PriceInfo>
            </IngredientItem>
          </ApplyIngredientItemContent>
        </ApplyItem>
      </DetailInfoContainer>
      <Center>
        <PaymentBtnArea>
          <PayBtn>모임 완료</PayBtn>
        </PaymentBtnArea>
      </Center>
    </>
  );
}

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  border-bottom: 1px solid #c1c1c1;
`;

const DetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding: 20px 0;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 24px;
  padding: 0 20px;
`;

const MenuInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0 0 12px 0;
`;

const DetailMenuItemContent = styled.div`
  display: flex;
  gap: 12px;
`;

const DetailMenuItemImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 4px;
  background-color: peachpuff;
`;

const MenuItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc(100% - 12px - 144px);
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: #f5f4f3;
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

const ParticipantsImages = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

const ApplyItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
  padding: 0 20px;
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
`;

const MenuImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: #aed8ff;
  border-radius: 4px;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px - 8px);
  gap: 4px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const PaymentBtnArea = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: 16px 20px 24px 20px;
  margin-bottom: 70px;
`;

const PayBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 13px 10px;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #ff5c00;
  border-radius: 50px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
`;
