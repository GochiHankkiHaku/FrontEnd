import styled from 'styled-components';
import landingImg from 'assets/imgs/landingImg.png';
import CustomToast from 'components/CustomToast';
import { Button } from 'components/Button';
import { color } from 'styles/constants';

export default function LandingPage() {
  return (
    <Wrap>
      <Title>
        {/* <BackGround>고치 한 끼<br /></BackG> */}
        하쿠과?
      </Title>
      <CustomToast />
      <Button
        bgCol={color.main[2]}
        col={color.white}
        // css 커스텀 가능
        // style={{
        //   position: 'absolute',
        //   bottom: 0,
        // }}
      >
        모임을 주최?
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${landingImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.div`
  font-family: 'EF_jejudoldam';
  font-size: 40px;
  font-weight: 400;
  line-height: 165%;
  color: #333;
`;
