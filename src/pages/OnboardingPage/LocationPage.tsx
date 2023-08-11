import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useInput } from 'common/hooks/useInput';
import Input from './components/Input';
import { GrayBorderBtnStyle } from './utils/mixins';
import { usePage } from './hooks/usePage';
import Footer from './components/Footer';

export default function LocationPage() {
  const { goNextPage } = usePage();

  const { input, handleChangeInput } = useInput();
  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={24}>
          어디서 식사하나요?
        </Typography>
        <Input value={input} onChange={handleChangeInput} placeholder='사업자 번호 입력' />
        <LocationBtn>
          <Typography variant='paragraph' size={3}>
            장소 정보 내용
          </Typography>
        </LocationBtn>
      </Wrap>
      <Footer onClick={() => goNextPage()} />
    </>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
  padding-top: 30px;
`;

const LocationBtn = styled.button`
  margin-top: 12px;

  ${GrayBorderBtnStyle()}
`;
