import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as PayUser } from 'assets/icons/payUser.svg';
import { ReactComponent as Kakaopay } from 'assets/icons/kakaopay.svg';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import fish from 'assets/images/어류.png';
import ApplyHeader from 'components/ApplyHeader';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const markerInfo = location.state.location.state.markerInfo;
  const address = location.state.location.state.address;

  const moveDetailPage = () => {
    navigate(-1);
  };

  return (
    <>
      <ApplyHeader title={'참가비 결제'} movePageHandler={moveDetailPage} />
      <Typography
        variant='title'
        size={3}
        color={color.gray[9]}
        mb={20}
        pt={10}
        pr={20}
        pb={10}
        pl={20}
      >
        결제 정보
      </Typography>
      <PaymentInfoContainer>
        <MenuArea>
          <Typography variant='paragraph' size={2} color={color.gray[9]}>
            2023. 07. 07
          </Typography>
          <Line />
          <MenuInfoContent>
            <img className='menu_image' src={fish} />
            <MenuInfoTextArea>
              <Typography variant='paragraph' size={1} color={color.gray[9]}>
                {markerInfo.markerMenuname}
              </Typography>
              <div className='menu_text-content'>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </div>
            </MenuInfoTextArea>
          </MenuInfoContent>
        </MenuArea>
        <HostArea>
          <HostInfoContent>
            <PayUser />
            <HostDetailInfo>
              <div className='name'>개설자 이름</div>
              <Typography variant='paragraph' size={4} color={color.gray[9]}>
                장소 이름
              </Typography>
              <Typography variant='caption' size={2} color={color.gray[6]}>
                {address}
              </Typography>
            </HostDetailInfo>
          </HostInfoContent>
          <Line />
          <TotalPayArea>
            <Typography variant='paragraph' size={2} color={color.gray[11]}>
              모임 비용
            </Typography>
            <Typography variant='title' size={1} color={color.main[1]}>
              {markerInfo.markerMoney}원
            </Typography>
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

const MenuInfoContent = styled.div`
  display: flex;
  gap: 12px;

  > .menu_image {
    width: 144px;
    height: 144px;
    border-radius: 4px;
    background-color: peachpuff;
  }
`;

const MenuInfoTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 12px - 144px);

  > .menu_text-content {
    font-size: 14px;
    font-weight: 400;
    color: #6f6f6f;
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
  gap: 16px;
  padding: 14px 0;
`;

const HostDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px - 16px);
  gap: 4px;

  > .name {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }
`;

const TotalPayArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BtnArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
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
