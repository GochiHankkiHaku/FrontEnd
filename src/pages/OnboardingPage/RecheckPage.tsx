import styled from 'styled-components';
import { ReactComponent as XIcon } from 'assets/icons/xmark.svg';
import { Typography } from 'components/Typography';
import Location from './components/Location';
import { color } from 'styles/constants';
import Footer from './components/Footer';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'common/constants';

export default function RecheckPage() {
  const navigate = useNavigate();
  const notify = () => {
    const toastId = toast.success('모임이 개설 되었어요!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    console.log('toastId :>> ', toastId);
  };
  return (
    <>
      <Wrap>
        <Header>
          <CancelRow>
            <XIcon />
          </CancelRow>
          <Typography variant='title' size={2} mt={20} mb={20}>
            지금까지 작성한 내용이에요.
          </Typography>
          <Typography variant='title' size={5}>
            장소
          </Typography>
          <Location />
        </Header>
        <ContentWrap>
          <Typography variant='title' size={5}>
            요리 정보
          </Typography>
        </ContentWrap>
        <ContentWrap>
          <Typography variant='title' size={5}>
            언제 먹을까요?
          </Typography>
          <Typography variant='paragraph' size={2}>
            날짜
          </Typography>
          <Typography variant='paragraph' size={2}>
            식사 시간
          </Typography>
        </ContentWrap>
        <ContentWrap>
          <Typography variant='title' size={5} mb={3}>
            몇 명을 초대할까요?
          </Typography>
          <Typography variant='paragraph' size={6} color={color.gray[6]}>
            최대 4명까지 선택 가능
            <br />
            그룹 단위로 방문
          </Typography>
        </ContentWrap>
      </Wrap>
      <Footer
        btnText='모임 개설'
        btnColor={color.main[1]}
        onClick={() => {
          navigate(`/${PATH.main}`);
          notify();
        }}
      />
    </>
  );
}

const Wrap = styled.div`
  background-color: ${color.gray[2]};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Header = styled.div`
  padding: 0 20px 36px 20px;
  background-color: white;
`;

const CancelRow = styled.div`
  background-color: yellow;
  margin: 12px 0;
`;

const ContentWrap = styled.div`
  padding: 36px 20px;
  background-color: white;
`;
