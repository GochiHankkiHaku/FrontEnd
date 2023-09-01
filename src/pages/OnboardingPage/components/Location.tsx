import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { useAddress } from '../hooks/useAddress';
import { Address } from 'react-daum-postcode';
import geolocationIcon from 'assets/icons/geolocation.svg';
import Input from '../../../components/Input';
import { GrayBorderBtnStyle } from '../utils/mixins';
import { useFormActions, useApplyFormStore } from '../store/formStore';

export default function Location() {
  const { open, handleComplete } = useAddress();
  const address = useApplyFormStore((state) => state.address);
  const detailAddress = useApplyFormStore((state) => state.detailAddress);

  const { setAddress, setDetailAddress } = useFormActions();

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

  ::before {
    content: '';
    display: block;
    background-image: url(${geolocationIcon});
    background-size: cover;
    width: 24px;
    height: 24px;
  }
`;
