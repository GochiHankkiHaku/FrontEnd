import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { Typography } from 'components/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
import { color } from 'styles/constants';

export default function SelectContactPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const movePrevPage = () => {
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
      <Header>
        <ArrowChevron className='back_button' onClick={movePrevPage} />
        <Typography variant='paragraph' size={1} color={color.gray[9]}>
          모임 신청하기
        </Typography>
        <div className='none' />
      </Header>
      <Footer>
        <PayBtn onClick={movePaymentPage}>
          <Typography variant='title' size={4} color={color.white}>
            참여를 위해 결제하기
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

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  padding: 12px 20px 8px 20px;
  border-top: 1px solid ${color.gray[4]};
  background-color: ${color.white};
`;

const PayBtn = styled.button`
  width: 100%;
  padding: 11.5px 20px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${color.main[2]};
  border-radius: 8px;
`;
