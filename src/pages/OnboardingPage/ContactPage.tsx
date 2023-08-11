import styled from 'styled-components/macro';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'common/constants';
import Footer from './components/Footer';

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <>
      <Wrap>
        <Typography variant='title' size={3} color={color.gray[9]} mb={3}>
          연락처를 작성해주세요.
        </Typography>
        <Typography variant='paragraph' size={6} color={color.gray[6]}>
          참가자들에게 연락을 받을 수 있는
          <br /> 카카오톡 ID / 오픈 채팅방/ 전화번호 중 하나를 작성해주세요.
        </Typography>
      </Wrap>
      <Footer
        btnText='완료하기'
        onClick={() => {
          navigate(`/${PATH.main}`);
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
