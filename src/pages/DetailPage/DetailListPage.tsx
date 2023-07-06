import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';

const DetailContainer = styled.div`
  margin-bottom: 80px;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  gap: 8px;
  color: #333333;
  border-bottom: 1px solid #dfdfdf;

  > .detail_header-text {
    width: 288px;
    text-align: center;
  }
`;

const DetailCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
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
  border: 1px solid red;
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
  /* border: 1px solid red; */

  > .menu_image {
    width: 144px;
    height: 144px;
    background-color: lightgray;
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
  width: 100%;
  height: 14px;
  background-color: #f5f4f3;
`;

const ReservationTiem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  padding: 11.5px 20px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #128fe9;
`;

const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 350px;
  border: 1px solid red;
`;

const HostInfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  > .host_image {
    width: 80px;
    height: 80px;
    border-radius: 109.091px;
    background: #8fcbdd;
  }

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

    > .meter {
      font-size: 14px;
      font-weight: 400;
      color: #128fe9;
    }
  }
`;

const ParticipantsCheck = styled.div`
  display: flex;
  gap: 5px;

  > .text {
    font-size: 14px;
    font-weight: 500;
    color: #333333;
  }
`;

const ParticipantsImages = styled.ul`
  display: flex;
  width: 350px;
  justify-content: space-between;

  > li {
    display: flex;
    flex-direction: column;
    gap: 1.818px;

    > .profile {
      width: 80px;
      height: 80px;
      background-color: red;
      border-radius: 109.091px;
    }

    > .username {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }
  }
`;

function DetailListPage({ detailData }: any) {
  return (
    <DetailContainer>
      <DetailHeader>
        <ArrowChevron />
        <div className='detail_header-text'>모임 신청하기</div>
      </DetailHeader>
      <DetailCheck>모임 정보를 확인해보세요.</DetailCheck>
      <DetailInfo>
        <MenuInfo>
          <MenuInfoTitle>요리 정보</MenuInfoTitle>
          <MenuInfoContent>
            <div className='menu_image'></div>
            <div className='menu_text'>
              <div className='menu_text-title'>자리돔조림</div>
              <div className='menu_text-content'>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </div>
              <div className='menu_text-number'>NN명이 만들었어요.</div>
            </div>
          </MenuInfoContent>
        </MenuInfo>
        <Divider></Divider>
        <MenuInfo>
          <MenuInfoTitle>모임 시간대</MenuInfoTitle>
          <ReservationTiem>저녁 (17:00 ~ 20:00)</ReservationTiem>
        </MenuInfo>
        <Divider></Divider>
        <HostInfo>
          <MenuInfoTitle>개설자 정보</MenuInfoTitle>
          <HostInfoContent>
            <div className='host_image'></div>
            <div className='host_detail-info'>
              <div className='name'>개설자 이름</div>
              <div className='position_name'>장소 이름</div>
              <div className='address'>제주 서귀포시 성산읍 고성리 296-8</div>
              <div className='meter'>246m</div>
            </div>
          </HostInfoContent>
        </HostInfo>
        <Divider></Divider>
        <HostInfo>
          <MenuInfoTitle>
            참여자 <span className='num'>3명</span>
          </MenuInfoTitle>
          <ParticipantsCheck>
            <input type='checkbox' />
            <div className='text'>일행입니다.</div>
          </ParticipantsCheck>
          <ParticipantsImages>
            <li>
              <div className='profile'></div>
              <div className='username'>유저 네임</div>
            </li>
            <li>
              <div className='profile'></div>
              <div className='username'>유저 네임</div>
            </li>
            <li>
              <div className='profile'></div>
              <div className='username'>유저 네임</div>
            </li>
            <li>
              <div className='profile'></div>
              <div className='username'>유저 네임</div>
            </li>
          </ParticipantsImages>
        </HostInfo>
      </DetailInfo>
    </DetailContainer>
  );
}

export default DetailListPage;
