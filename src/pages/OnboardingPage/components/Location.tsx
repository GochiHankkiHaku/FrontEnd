import { useState } from 'react';
import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { useInput } from 'common/hooks/useInput';
import { useAddress } from '../hooks/useAddress';
import { Address } from 'react-daum-postcode';
import { ReactComponent as GeolocationIcon } from 'assets/icons/geolocation.svg';
import Input from './Input';
import { GrayBorderBtnStyle } from '../utils/mixins';

export default function Location() {
  const { open, handleComplete } = useAddress();
  const [address, setAddress] = useState('장소 정보 내용');
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
