import { useDaumPostcodePopup } from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export const useAddress = () => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address, callback: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    callback(fullAddress);
    return fullAddress;
  };

  return { open, handleComplete };
};
