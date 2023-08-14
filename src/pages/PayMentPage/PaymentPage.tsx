import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { ReactComponent as PayUser } from 'assets/icons/payUser.svg';
import { ReactComponent as Kakaopay } from 'assets/icons/kakaopay.svg';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import fish from 'assets/images/어류.png';

export default function PaymentPage() {
  return (
    <>
      <PaymentHeader>
        <ArrowChevron />
        <div className='payment_header-text'>참가비 결제</div>
        <div className='none' />
      </PaymentHeader>
      <PaymentCheckText>결제 정보</PaymentCheckText>
      <PaymentInfoContainer>
        <MenuArea>
          <MenuInfoDate>2023. 07. 07</MenuInfoDate>
          <Line />
          <MenuInfoContent>
            <img className='menu_image' src={fish} />
            <div className='menu_text'>
              <div className='menu_text-title'>자리돔 조림</div>
              <div className='menu_text-content'>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </div>
            </div>
          </MenuInfoContent>
        </MenuArea>

        <HostArea>
          <HostInfoContent>
            <PayUser />
            <div className='host_detail-info'>
              <div className='name'>개설자 이름</div>
              <div className='position_name'>장소 이름</div>
              <div className='address'>제주 서귀포시 성산읍 고성리 296-8</div>
            </div>
          </HostInfoContent>
          <Line />
          <TotalPayArea>
            <div className='total_text'> 모임 비용</div>
            <div className='total_cost'>20,000원</div>
          </TotalPayArea>
        </HostArea>
      </PaymentInfoContainer>
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

const PaymentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 44px;
  border-bottom: 1px solid #dfdfdf;

  > .payment_header-text {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }

  > .none {
    width: 24px;
    height: 24px;
  }
`;

const PaymentCheckText = styled.div`
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
`;

const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  padding: 0 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dfdfdf;
`;

const MenuArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 19px;
`;

const MenuInfoDate = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
`;

const MenuInfoContent = styled.div`
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
    gap: 10px;
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

const HostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 19px;
`;

const HostInfoContent = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 0;

  > .host_detail-info {
    display: flex;
    flex-direction: column;
    width: calc(100% - 60px - 16px);
    gap: 4px;

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

const TotalPayArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

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
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  gap: 12px;
  padding: 0 20px 32px 20px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-size: 18px;
    padding: 12px 20px;
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
