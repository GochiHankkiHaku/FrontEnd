import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useInput } from 'common/hooks/useInput';
import Input from './components/Input';
import { GrayBorderBtnStyle } from './utils/mixins';
import { usePage } from './hooks/usePage';
import Footer from './components/Footer';
import Location from './components/Location';

export default function LocationPage() {
  const { goNextPage } = usePage();
  const { input: businessNumber, handleChangeInput: handleChangeBusinessNumber } = useInput();

  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24}>
          어디서 식사하나요?
        </Typography>
        <Input
          value={businessNumber}
          onChange={handleChangeBusinessNumber}
          placeholder='사업자 번호 입력'
        />
        <Location />
      </Wrap>
      <Footer saveLater onClick={() => goNextPage()} />
    </>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
  padding-top: 30px;
`;
