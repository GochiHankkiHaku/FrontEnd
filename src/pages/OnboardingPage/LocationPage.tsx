import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useInput } from 'common/hooks/useInput';
import Input from './components/Input';
import { GrayBorderBtnStyle } from './utils/mixins';
import { usePage } from './hooks/usePage';
import Footer from './components/Footer';
import { ReactComponent as GeolocationIcon } from 'assets/icons/geolocation.svg';
import { useAddress } from './hooks/useAddress';
import { Address } from 'react-daum-postcode';
import { useState } from 'react';

export default function LocationPage() {
  const { goNextPage } = usePage();
  const { open, handleComplete } = useAddress();
  const [address, setAddress] = useState('장소 정보 내용');

  const { input: businessNumber, handleChangeInput: handleChangeBusinessNumber } = useInput();
  const { input: detailAddress, handleChangeInput: handleChangeDetailAddress } = useInput();

  const handleFindLocation = () => {
    open({
      onComplete: (address: Address) => {
        handleComplete(address, setAddress);
      },
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
        <LocationBtn onClick={handleFindLocation}>
          <GeolocationIcon />
          <Typography variant='paragraph' size={3}>
            {address}
          </Typography>
        </LocationBtn>
        <Input value={detailAddress} onChange={handleChangeDetailAddress} placeholder='상세 장소' />
      </Wrap>
      <Footer saveLater onClick={() => goNextPage()} />
    </>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
  padding-top: 30px;
`;

const LocationBtn = styled.button`
  margin: 12px 0;

  display: flex;
  gap: 10px;

  ${GrayBorderBtnStyle()}

  &:hover {
    filter: brightness(95%);
  }
`;
