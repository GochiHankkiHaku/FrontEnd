import styled from 'styled-components';
import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import { Typography } from 'components/Typography';
import { color, radius, typograpy } from 'styles/constants';
import Footer from './components/Footer';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'common/constants';
import { useApplyForm } from './store/formStore';
import { flexSet, typoStyles } from 'styles/minxin';
import { GrayBorderBtnStyle } from './utils/mixins';
import geolocationIcon from 'assets/icons/geolocation.svg';
import MenuItem from './components/MenuItem';
import Ingredients from './components/Ingredients';

export default function RecheckPage() {
  const navigate = useNavigate();
  const notify = () => {
    const toastId = toast.success('모임이 개설 되었어요!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    console.log('toastId :>> ', toastId);
  };

  const applyForm = useApplyForm();
  console.log('applyForm :>> ', applyForm);
  return (
    <>
      <Wrap>
        <Header>
          <CancelRow>
            <BackIcon
              onClick={() => navigate(`/${PATH.onBoarding}/${PATH.contact}`)}
              style={{ cursor: 'pointer' }}
            />
          </CancelRow>
          <Typography variant='title' size={2} mt={20} mb={20}>
            지금까지 작성한 내용이에요.
          </Typography>
          <Typography variant='title' size={5}>
            장소
          </Typography>
          <LocationBox>
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
              {applyForm.address}
            </Typography>
          </LocationBox>
          <DetailAddressBox>{applyForm.detailAddress}</DetailAddressBox>
        </Header>
        <ContentWrap>
          <Typography variant='title' size={5} mb={16}>
            요리 정보
          </Typography>
          <MenuItem
            id={1}
            img={applyForm.menu?.img || ''}
            name={applyForm.menu?.name || ''}
            content={applyForm.menu?.content || ''}
          />
        </ContentWrap>
        <ContentWrap>
          <Typography variant='title' size={5} mb={24}>
            언제 먹을까요?
          </Typography>
          <Typography variant='paragraph' size={2} mb={24}>
            날짜
          </Typography>
          <OrangeBorderBox>{applyForm.day}</OrangeBorderBox>
          <Typography variant='paragraph' size={2} mt={24} mb={24}>
            식사 시간
          </Typography>
          <OrangeBorderBox>{applyForm.time}</OrangeBorderBox>
        </ContentWrap>
        <ContentWrap>
          <Typography variant='title' size={5} mb={3}>
            몇 명을 초대할까요?
          </Typography>
          <Typography variant='paragraph' size={6} color={color.gray[6]} mb={16}>
            최대 4명까지 선택 가능
            <br />
            그룹 단위로 방문
          </Typography>

          <StyledTypography variant='paragraph' size={2} $color={color.active}>
            <span className='color'>최대</span> 인원 선택
          </StyledTypography>
          <CounterContainer>
            <CountBtn>-</CountBtn>
            <CounterText $color={color.active}>{applyForm.memberCount.max} 명</CounterText>
            <CountBtn>+</CountBtn>
          </CounterContainer>
          <StyledTypography variant='paragraph' size={2} $color={color.alert} mt={16}>
            <span className='color'>최소</span> 인원 선택
          </StyledTypography>
          <CounterContainer>
            <CountBtn>-</CountBtn>
            <CounterText $color={color.alert}>{applyForm.memberCount.min} 명</CounterText>
            <CountBtn>+</CountBtn>
          </CounterContainer>
        </ContentWrap>
        <ContentWrap>
          <Typography variant='title' size={5} mb={3}>
            얼마로 할까요?
          </Typography>
          <Typography variant='paragraph' size={6} color={color.gray[6]} mb={16}>
            {applyForm.menu?.name}의 평균 가격은 1인당 {applyForm.menu?.total.toLocaleString()}
            원이에요.
          </Typography>
          <InputContainer>
            <CostText>{applyForm.cost.toLocaleString()}</CostText>
            <Text>원</Text>
          </InputContainer>
          <Typography variant='title' size={5} mb={24}>
            필수 재료 (1인분 기준)
          </Typography>
          <Ingredients ingredients={applyForm.menu?.item ?? []} />
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

  padding-bottom: 100px;
`;

const Header = styled.div`
  padding: 0 20px 36px 20px;
  background-color: white;
`;

const CancelRow = styled.div`
  margin: 12px 0;
`;

const ContentWrap = styled.div`
  padding: 36px 20px;
  background-color: white;
`;

const OrangeBorderBox = styled.div`
  ${flexSet()};

  padding: 11.5px 20px;

  border-radius: ${radius[8]}px;
  border: 1px solid ${color.main[1]};

  ${typoStyles(typograpy.paragraph[1])};
  color: ${color.main[1]};
`;

const LocationBox = styled.div`
  margin: 12px 0;

  display: flex;
  gap: 10px;

  ${GrayBorderBtnStyle()}

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

const DetailAddressBox = styled.div`
  padding: 11.5px 20px;

  border: 1px solid ${color.gray[5]};
  border-radius: 8px;

  ${typoStyles(typograpy.paragraph[3])}
`;
const InputContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;

  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid ${color.gray[4]};
  border-radius: 8px;
  padding: 11px 20px;

  background-color: white;
`;

const CostText = styled.div`
  font-size: 16px;
  margin-right: 5px;
`;

const Text = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${color.gray[9]};

  position: absolute;
  right: 20px;
`;

const CounterContainer = styled.div`
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const CountBtn = styled.div`
  ${flexSet()};
  width: 42px;
  height: 42px;

  font-size: 30px;
  color: ${color.gray[7]};

  background-color: white;
  border: 1px solid ${color.gray[4]};
  border-radius: 50%;
`;

const CounterText = styled.span<{ $color: string }>`
  min-width: 100px;
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${({ $color }) => $color};
`;

const StyledTypography = styled(Typography)<{ $color: string }>`
  .color {
    color: ${({ $color }) => $color};
  }
`;
