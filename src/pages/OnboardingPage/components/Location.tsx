import { useState } from 'react';
import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { useInput } from 'common/hooks/useInput';
import { useAddress } from '../hooks/useAddress';
import { Address } from 'react-daum-postcode';
import { ReactComponent as GeolocationIcon } from 'assets/icons/geolocation.svg';
import Input from '../../../components/Input';
import { GrayBorderBtnStyle } from '../utils/mixins';
import { useFormStore } from '../store/formStore';

export default function Location() {
  const { open, handleComplete } = useAddress();
  const address = useFormStore((state) => state.address);
  const setAddress = useFormStore((state) => state.setAddress);
  const detailAddress = useFormStore((state) => state.detailAddress);
  const setDetailAddress = useFormStore((state) => state.setDetailAddress);

  const handleChangeDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.currentTarget.value);
  };

  const handleFindLocation = () => {
    open({
      onComplete: (address: Address) => {
        handleComplete(address, setAddress);
      },
    });
  };

  return (
    <>
      <LocationBtn onClick={handleFindLocation}>
        <GeolocationIcon />
        <Typography
          variant='paragraph'
          size={3}
          style={{
            flex: 1,
            textAlign: 'left',
            height: '24px',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
          }}
        >
          {address}
        </Typography>
      </LocationBtn>
      <Input value={detailAddress} onChange={handleChangeDetailAddress} placeholder='상세 장소' />
    </>
  );
}

const LocationBtn = styled.button`
  margin: 12px 0;

  display: flex;
  gap: 10px;

  ${GrayBorderBtnStyle()}

  &:hover {
    filter: brightness(95%);
  }

  // 스크롤바 숨기기
  & ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* 파이어폭스 */
`;
