import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import { ReactComponent as User2 } from 'assets/icons/user2.svg';
import { ReactComponent as User3 } from 'assets/icons/user3.svg';
import fish from 'assets/images/어류.png';
import vege from 'assets/images/채소.png';
import grain from 'assets/images/곡류.png';
import { Link } from 'react-router-dom';

export default function GatheringDetail({ list }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DetailContainer>
      <DetailHeader>모임 정보</DetailHeader>
      <DetailInfo>
        <MenuInfo>
          <GatheringDate>2023. 07. 07</GatheringDate>
          <GatheringTitle>{list.menuname} 요리 모집</GatheringTitle>
          <MenuInfoContent>
            <img className='menu_image' src={fish} />
            <div className='menu_text'>
              <div className='menu_text-title'>자라돔조림</div>
              <div>
                제주 연안에 서식하는 자리돔을 간장
                <br />
                으로 졸인 음식
              </div>
            </div>
          </MenuInfoContent>
        </MenuInfo>
        <Divider></Divider>
        <HostInfo>
          <MenuInfoTitle>개설자 정보</MenuInfoTitle>
          <HostInfoContent>
            <User1 />
            <div className='host_detail-info'>
              <div className='name'>개설자 이름</div>
              <div className='position_name'>장소 이름</div>
              <div className='address'>제주 서귀포시 성산읍 고성리 296-8</div>
              <div className='host_btn'>
                <div className='ex'>최고에요 37</div>
                <div className='good'>좋아요 15</div>
              </div>
            </div>
          </HostInfoContent>
        </HostInfo>
        <Divider></Divider>
        <HostInfo>
          <MenuInfoTitle>
            참여자 <span className='num'>3명</span>
          </MenuInfoTitle>
          <ParticipantsImages>
            <li>
              <User1 />
              <div className='username'>유저 네임</div>
            </li>
            <li>
              <User2 />
              <div className='username'>유저 네임</div>
            </li>
            <li>
              <User3 />
              <div className='username'>유저 네임</div>
            </li>
          </ParticipantsImages>
        </HostInfo>
        <Divider></Divider>
        <PriceInfo>
          <PriceInfoTitleArea>
            <div className='price_text'>시세 정보</div>
            <Info onClick={openHandler} />
            {isOpen && <p>가격 측정 기준 해양 수산부의 수산물이력제를 기반으로 작성되었습니다.</p>}
          </PriceInfoTitleArea>
          <PriceInfoList>
            <li>
              <img className='profile' src={fish} />
              <div className='price_info'>
                <div className='price_info-menuname'>갈치</div>
                <div className='price_info-cost'>평균 9,000원</div>
              </div>
            </li>
            <li>
              <img className='profile2' src={vege} />
              <div className='price_info'>
                <div className='price_info-menuname'>무</div>
                <div className='price_info-cost'>평균 3,000원</div>
              </div>
            </li>
            <li>
              <img className='profile3' src={grain} />
              <div className='price_info'>
                <div className='price_info-menuname'>흰쌀밥 (200g)</div>
                <div className='price_info-cost'>평균 2,000원</div>
              </div>
            </li>
          </PriceInfoList>
        </PriceInfo>
      </DetailInfo>
      <Center>
        <PaymentBtnArea>
          <Link to={'/payment'}>
            <PayBtn>모임 끝내기</PayBtn>
          </Link>
        </PaymentBtnArea>
      </Center>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  margin-bottom: 25px;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #333333;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 350px;
  /* border: 1px solid red; */
`;

const GatheringDate = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
`;

const GatheringTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: -15px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  width: 350px;
  border-bottom: 1px solid #dfdfdf;
`;

const MenuInfoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333333;

  > .num {
    color: #128fe9;
  }
`;

const MenuInfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 350px;
  font-size: 14px;
  font-weight: 400;
  color: #6f6f6f;
  /* border: 1px solid red; */

  > .menu_image {
    width: 144px;
    height: 144px;
    border-radius: 4px;
    background-color: peachpuff;
  }

  > .menu_text {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > .menu_text-title {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }

    > .menu_text-content {
      width: 190px;
      font-size: 14px;
      color: #6f6f6f;
      /* border: 1px solid red; */
    }

    > .menu_text-number {
      width: 100%;
      font-size: 12px;
      font-weight: 400;
      padding: 4px 10px;
      background-color: #f5f4f3;
      border-radius: 22px;
      color: #128fe9;
    }
  }
`;

const Divider = styled.div`
  width: 100vw;
  height: 14px;
  background-color: #f5f4f3;
`;

const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 350px;
  /* border: 1px solid red; */
`;

const HostInfoContent = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #c1c1c1;

  > .host_detail-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;

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
  }
`;

const ParticipantsImages = styled.ul`
  display: flex;
  gap: 10px;
  width: 350px;

  > li {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > .username {
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      text-align: center;
    }
  }
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 350px;
  /* width: 350px; */
`;

const PriceInfoTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;

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
    bottom: -165px;
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

const PriceInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 120px;

  > li {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > .profile {
      width: 80px;
      height: 80px;
      background-color: #aed8ff;
      border-radius: 4px;
    }

    > .profile2 {
      width: 80px;
      height: 80px;
      background-color: #a2f5e6;
      border-radius: 4px;
    }

    > .profile3 {
      width: 80px;
      height: 80px;
      background-color: #dbfbff;
      border-radius: 4px;
    }

    > .price_info {
      display: flex;
      flex-direction: column;
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
  }
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

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
