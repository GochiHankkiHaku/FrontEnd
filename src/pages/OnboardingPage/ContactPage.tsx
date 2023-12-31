import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'common/constants';
import Footer from './components/Footer';
import Input from 'components/Input';
import HelperText from 'components/HelperText';
import { SelectBox } from 'components/SelectBox';
import React from 'react';
import { ContactType, useFormActions, useApplyForm } from './store/formStore';

const options = ['카카오톡 ID', '오픈 채팅방 링크', '전화번호'];

export default function ContactPage() {
  const navigate = useNavigate();

  const { contactOption, contact } = useApplyForm();
  const { setContactOption, setContact } = useFormActions();

  const isBtnDisabled = contactOption == null || contact === '';

  const handleSelectOption = (option: string) => {
    setContactOption(option as ContactType);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(event.currentTarget.value);
  };

  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          연락처를 작성해주세요.
        </Typography>
        <Typography variant='paragraph' size={5} color={color.gray[6]} mb={30}>
          참가자들에게 연락을 받을 수 있는
          <br /> 카카오톡 ID / 오픈 채팅방/ 전화번호 중 하나를 작성해주세요.
        </Typography>
        <SelectBox
          options={options}
          selectedOption={contactOption}
          onSelectOption={handleSelectOption}
        />
        <InputWrap>
          <Input value={contact} onChange={handleChangeInput} placeholder={`연락처 입력`} />
        </InputWrap>
        <HelperText>연락처 오류 시, 모임 참여에 불이익이 발생할 수 있습니다.</HelperText>
      </Wrap>
      <Footer
        btnText='완료하기'
        isDisabled={isBtnDisabled}
        onClick={() => {
          navigate(`/${PATH.recheck}`);
        }}
      />
    </>
  );
}

const Wrap = styled.div`
  position: relative;

  padding: 30px 20px 100px 20px;
  display: flex;
  flex-direction: column;

  flex: 1;
`;

const InputWrap = styled.div`
  margin: 12px 0 30px 0;
`;
