import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { Typography } from 'components/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
import { color } from 'styles/constants';
import { SelectBox } from 'components/SelectBox';
import HelperText from 'components/HelperText';
import Input from 'components/Input';
import { useState } from 'react';

const options = ['카카오톡 ID', '전화번호'];

export default function SelectContactPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [contact, setContact] = useState('');

  const handleChangeContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(event.currentTarget.value);
  };

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
      <Main>
        <Typography variant='title' size={3} color={color.gray[9]}>
          연락 수단 설정
        </Typography>
        <Typography variant='paragraph' size={5} color={color.gray[6]} mb={30}>
          모임 연락을 받을 카카오톡 ID / 전화번호를 입력해주세요.
        </Typography>
        <SelectBox
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <InputWrap>
          <Input value={contact} onChange={handleChangeContact} placeholder={`연락처 입력`} />
        </InputWrap>
        <HelperText>연락처 오류 시, 모임 참여에 불이익이 발생할 수 있습니다.</HelperText>
      </Main>
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

const Main = styled.main`
  padding: 10px 20px;
`;

const InputWrap = styled.div`
  margin: 12px 0 30px 0;
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
