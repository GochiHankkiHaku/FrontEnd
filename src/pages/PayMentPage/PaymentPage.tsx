import styled from 'styled-components';
import { ReactComponent as PayUser } from 'assets/icons/payUser.svg';
import { ReactComponent as Kakaopay } from 'assets/icons/kakaopay.svg';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import fish from 'assets/icons/images/어류.png';

const DetailHeader = styled.div`
  display: flex;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  gap: 8px;
  color: #333333;
  border-bottom: 1px solid #dfdfdf;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding: 20px 0 20px 0;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 350px;
`;

const MenuInfoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333333;

  > .num {
    color: #128fe9;
  }
`;

const MenuInfoDate = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
`;

const MenuInfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 350px;
  padding-top: 19px;
  border-top: 1px solid #dfdfdf;
  /* border: 1px solid red; */

  > .test {
    width: 60px;
  }

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
  /* border-radius: 8px; */
  padding: 12px 12px 19px 12px;
  border-bottom: 1px solid #dfdfdf;

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
      font-size: 14px;
      font-weight: 600;
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
    }
  }
`;

const TotalPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 170px;
  padding: 0 20px 0 20px;

  > .total_text {
    font-size: 16px;
    font-weight: 500;
    color: #242424;
  }

  > .total_cost {
    font-size: 20px;
    font-weight: 700;
    color: #ff5c00;
  }
`;

const BtnArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    padding: 11.5px 20px;
    width: 350px;
    border-radius: 8px;
  }

  > .pay {
    font-weight: 700;
    background-color: #ffed00;
  }

  > .copy {
    font-weight: 500;
    color: #333333;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #8b8b8b;
  }
`;

function DetailListPage() {
  return (
    <>
      <DetailHeader>
        <div className='detail_header-text'>참가비 결제</div>
      </DetailHeader>
      <DetailInfo>
        <MenuInfo>
          <MenuInfoTitle>모임 정보</MenuInfoTitle>
          <MenuInfoDate>2023. 07. 07</MenuInfoDate>
          <MenuInfoContent>
            <img className='menu_image' src={fish} />
            <div className='menu_text'>
              <div className='menu_text-title'>자리돔 조림</div>
              <div className='menu_text-content'>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </div>
              <div className='menu_text-number'>2명이 만들었어요.</div>
            </div>
          </MenuInfoContent>
        </MenuInfo>
        <HostInfo>
          <HostInfoContent>
            <PayUser className='test' />
            <div className='host_detail-info'>
              <div className='name'>개설자 이름</div>
              <div className='position_name'>장소 이름</div>
              <div className='address'>제주 서귀포시 성산읍 고성리 296-8</div>
            </div>
          </HostInfoContent>
        </HostInfo>
      </DetailInfo>
      <TotalPay>
        <div className='total_text'> 모임 비용</div>
        <div className='total_cost'>20,000원</div>
      </TotalPay>
      <BtnArea>
        <button className='pay'>
          <Kakaopay />
          <div>pay 결제</div>
        </button>
        <button className='copy'>
          <Copy />
          <div>가상계좌 복사</div>
        </button>
      </BtnArea>
    </>
  );
}

export default DetailListPage;
