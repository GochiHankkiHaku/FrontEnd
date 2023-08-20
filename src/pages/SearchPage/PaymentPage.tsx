import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as PayUser } from 'assets/icons/payUser.svg';
import { ReactComponent as Kakaopay } from 'assets/icons/kakaopay.svg';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import fish from 'assets/images/어류.png';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const markerInfo = location.state.location.state.markerInfo;
  const address = location.state.location.state.address;

  const movePrevPage = () => {
    navigate(-1);
  };

  const moveMainPage = () => {
    navigate('/main');
  };

  return (
    <>
      <Header>
        <ArrowChevron className='back_button' onClick={movePrevPage} />
        <Typography variant='paragraph' size={1} color={color.gray[9]}>
          참가비 결제
        </Typography>
        <div className='none' />
      </Header>
      <Main>
        <Typography variant='title' size={3} color={color.gray[9]} mb={1} pt={10} pb={10}>
          결제 정보
        </Typography>
        <Section>
          <Typography variant='paragraph' size={2} color={color.gray[9]}>
            2023. 07. 07
          </Typography>
          <Line />
          <MenuInfoArea>
            <MenuImg src={fish} />
            <MenuDescription>
              <Typography variant='paragraph' size={1} color={color.gray[9]}>
                {markerInfo.markerMenuname}
              </Typography>
              <Typography variant='paragraph' size={7} color={color.gray[7]}>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </Typography>
            </MenuDescription>
          </MenuInfoArea>
        </Section>
        <Section>
          <HostInfoArea>
            <PayUser />
            <HostDescription>
              <Typography variant='paragraph' size={3} color={color.gray[9]}>
                개설자 이름
              </Typography>
              <Typography variant='paragraph' size={4} color={color.gray[9]}>
                장소 이름
              </Typography>
              <Typography variant='caption' size={2} color={color.gray[6]}>
                {address}
              </Typography>
            </HostDescription>
          </HostInfoArea>
          <Line />
          <GatheringPayArea>
            <Typography variant='paragraph' size={2} color={color.gray[11]}>
              모임 비용
            </Typography>
            <Typography variant='title' size={1} color={color.main[1]}>
              {markerInfo.markerMoney}원
            </Typography>
          </GatheringPayArea>
        </Section>
      </Main>
      <Footer>
        <PayBtn onClick={moveMainPage} background={'#FFED00'}>
          <Kakaopay />
          <Typography variant='title' size={4} color={color.gray[9]}>
            pay 결제
          </Typography>
        </PayBtn>
        <PayBtn border={'#8B8B8B'}>
          <Copy />
          <Typography variant='title' size={6} color={color.gray[8]}>
            가상계좌 복사
          </Typography>
        </PayBtn>
      </Footer>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid ${color.gray[4]};

  > .back_button {
    cursor: pointer;
  }

  > .none {
    width: 24px;
    height: 24px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 0 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${color.gray[3]};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 19px;
`;

const MenuInfoArea = styled.div`
  display: flex;
  gap: 12px;
`;

const MenuImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 4px;
  background-color: peachpuff;
`;

const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 12px - 144px);
`;

const HostInfoArea = styled.div`
  display: flex;
  gap: 16px;
  padding: 14px 0;
`;

const HostDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px - 16px);
  gap: 4px;
`;

const GatheringPayArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  gap: 12px;
  padding: 0 20px 32px 20px;
`;

const PayBtn = styled.button<{ background?: string; border?: string }>`
  display: flex;
  width: 100%;
  padding: 11.5px 20px;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  border-radius: 8px;
  background-color: ${({ background }) =>
    background === '#FFED00' ? `${background}` : `${background}`};
  border: 1px solid ${({ border }) => (border === '#8B8B8B' ? `${border}` : `${border}`)};
`;
