import styled from 'styled-components';
import landingImg from 'assets/images/landingImg.png';
import CustomToast from 'components/CustomToast';
import { Button } from 'components/Button';
import { color } from 'styles/constants';
import { Typography } from 'components/Typography';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <TextWrap>
        <Typography variant='caption' size={1} color={color.main[4]}>
          푸드 쉐어링 O2O 모임서비스
        </Typography>
        <Title style={{ fontFamily: 'EF_jejudoldam' }}>한끼 하쿠</Title>
        <Typography variant='paragraph' size={4} color={color.main[4]}>
          제주 어르신과의 새로운 경험을
          <br />
          만들어 나가는 푸드 쉐어링 서비스
        </Typography>
      </TextWrap>

      <CustomToast />
      <Button
        bgCol={color.main[1]}
        col={color.white}
        style={{
          marginBottom: '8px',
        }}
        onClick={() => {
          navigate('/onboarding/time');
        }}
      >
        모임을 주최하나요?
      </Button>
      <Button
        bgCol={color.gray[2]}
        col={color.black}
        borderCol={color.gray[4]}
        // css 커스텀 가능
        style={
          {
            // width: '80%',
            // margin: '0 20px',
            // position: 'absolute',
            // bottom: 0,
            // left: 0,
          }
        }
        onClick={() => {
          navigate('/main');
        }}
      >
        식사에 참여하나요?
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 85px 20px 30px 20px;
  width: 100%;
  height: 100%;
  background-image: url(${landingImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  fill: linear-gradient(
    180deg,
    #fff 0%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const TextWrap = styled.div`
  /* padding-top: 85px;
  padding-left: 20px; */
  flex: 1;
`;
const Title = styled.div`
  color: ${color.main[1]};
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
`;
