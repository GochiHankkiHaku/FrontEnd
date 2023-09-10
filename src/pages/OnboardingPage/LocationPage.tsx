import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import Input from '../../components/Input';
import { usePage } from './hooks/usePage';
import Footer from './components/Footer';
import Location from './components/Location';
import CustomToast from 'components/CustomToast';
import { DEFAULT_ADDRESS, useApplyForm, useFormActions } from './store/formStore';

export default function LocationPage() {
  const { goNextPage } = usePage();

  const { businessNumber, address, detailAddress } = useApplyForm();
  const { setBusinessNumber } = useFormActions();

  const handleChangeBusinessNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessNumber(e.currentTarget.value);
  };

  const isBtnDisabled =
    businessNumber.length === 0 || address === DEFAULT_ADDRESS || detailAddress.length === 0;

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
      <Footer isDisabled={isBtnDisabled} onClick={goNextPage} />
      <CustomToast hideProggressBar={false} />
    </>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
  padding-top: 30px;
`;
