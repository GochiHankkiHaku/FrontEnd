import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import Input from '../../components/Input';
import { usePage } from './hooks/usePage';
import Footer from './components/Footer';
import Location from './components/Location';
import { toast } from 'react-toastify';
import CustomToast from 'components/CustomToast';
import { DEFAULT_ADDRESS, useApplyForm, useFormActions } from './store/formStore';

export default function LocationPage() {
  const { goNextPage } = usePage();

  const { businessNumber, address, detailAddress } = useApplyForm();
  const { setBusinessNumber } = useFormActions();

  const handleChangeBusinessNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessNumber(e.currentTarget.value);
  };

  const error = {
    businessNumber: businessNumber.length === 0 && '사업자 등록 번호를 입력해주세요',
    address: address === DEFAULT_ADDRESS && '주소를 선택해주세요',
    detailAddress: detailAddress.length === 0 && '상세주소를 입력해주세요',
  };

  const notify = () => {
    toast.error(error.businessNumber || error.address || error.detailAddress, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

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
      <Footer
        saveLater
        onClick={() => {
          console.log('error :>> ', error);
          if (Object.values(error).every((value) => !value)) {
            goNextPage();
            return;
          }
          notify();
        }}
      />
      <CustomToast hideProggressBar={false} />
    </>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
  padding-top: 30px;
`;
