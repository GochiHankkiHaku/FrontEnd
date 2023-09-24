import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { Typography } from 'components/Typography';
import { useNavigate } from 'react-router-dom';
import { color } from 'styles/constants';
import { SelectBox } from 'components/SelectBox';
import HelperText from 'components/HelperText';
import Input from 'components/Input';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const options = ['카카오톡 ID', '전화번호'];

export default function SelectContactPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [contact, setContact] = useState<string>('');

  const isBtnDisabled = selectedOption === null || contact === '';

  const { post_idx } = useParams();
  const navigate = useNavigate();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleChangeContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(event.currentTarget.value);
  };

  const movePrevPage = () => {
    navigate(-1);
  };

  const movePaymentPage = () => {
    if (isBtnDisabled) {
      toast.error('연락 수단을 입려해주세요.');
    } else {
      navigate(`/payment/${post_idx}`, {
        state: contact,
      });
    }
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
          onSelectOption={handleSelectOption}
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

  &:hover {
    filter: brightness(95%);
  }
`;
