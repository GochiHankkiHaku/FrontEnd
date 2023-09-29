import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as Kakaopay } from 'assets/icons/kakaopay.svg';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { useParams } from 'react-router-dom';
import { useGetPostDetail } from './hooks/useGetPostDetail';
import MenuInfo from './components/MenuInfo';
import FounderInfo from './components/FounderInfo';
import { Spinner } from 'components/Spinner';
import { axiosClient } from 'apis/apiClient';
import { changeFormatDate } from './utils/changeFormatDate';
import { toast } from 'react-toastify';

export default function PaymentPage() {
  const { post_idx } = useParams();
  const postDetail = useGetPostDetail(post_idx as string);
  const navigate = useNavigate();
  const location = useLocation();

  const contact = location.state;
  const user_idx = localStorage.getItem('user_idx');

  const movePrevPage = () => {
    navigate(-1);
  };

  const reqGathering = async () => {
    try {
      await axiosClient.post(`matching/save/${post_idx}/${user_idx}?contact=${contact}`);
      navigate('/main');
      toast.success('모임 신청 및 결제가 완료 되었어요!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header>
        <ArrowChevron className='back_button' onClick={movePrevPage} />
        <Typography variant='paragraph' size={1} color={color.gray[9]}>
          참가비 결제
        </Typography>
        <div className='none' />
      </Header>
      {postDetail === undefined ? (
        <Spinner />
      ) : (
        <Main>
          <Typography variant='title' size={3} color={color.gray[9]} mb={1} pt={10} pb={10}>
            결제 정보
          </Typography>
          <Section>
            <Typography variant='paragraph' size={2} color={color.gray[9]}>
              {changeFormatDate(postDetail.realdate)}
            </Typography>
            <Line />
            <MenuInfo
              img={postDetail.menuimg}
              menuname={postDetail.menuname}
              menuContent={postDetail.menucontent}
            />
            <Line />
          </Section>
          <Section>
            <FounderInfo
              founder={postDetail.writer}
              address={postDetail.address}
              great={postDetail.great}
              good={postDetail.good}
              founderInfoBorder={'payment'}
            />
            <GatheringPayArea>
              <Typography variant='paragraph' size={2} color={color.gray[11]}>
                모임 비용
              </Typography>
              <Typography variant='title' size={1} color={color.main[1]}>
                {postDetail.money.toLocaleString()}원
              </Typography>
            </GatheringPayArea>
          </Section>
        </Main>
      )}
      <Footer>
        <PayBtn onClick={reqGathering}>
          <Kakaopay />
          <Typography variant='title' size={4} color={color.gray[9]}>
            pay 결제
          </Typography>
        </PayBtn>
      </Footer>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid ${color.gray[4]};

  > .back_button {
    cursor: pointer;
  }

  > .none {
    width: 24px;
    height: 24px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 0 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${color.gray[3]};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 19px;
`;

const GatheringPayArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  padding: 0 20px 32px 20px;
`;

const PayBtn = styled.button`
  display: flex;
  width: 100%;
  padding: 11.5px 20px;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  border-radius: 8px;
  background-color: #ffed00;

  &:hover {
    filter: brightness(95%);
  }
`;
