import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import fish from 'assets/images/어류.png';
import vege from 'assets/images/채소.png';
import grain from 'assets/images/곡류.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { typograpy } from 'styles/constants';

export default function SearchDetailPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const markerInfo = location.state.markerInfo;
  const address = location.state.address;

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const movePrevPage = () => {
    navigate(-1);
  };

  const movePaymentPage = () => {
    navigate('/payment', {
      state: {
        location,
      },
    });
  };

  return (
    <>
      <Header>
        <ArrowChevron className='back_button' onClick={movePrevPage} />
        <Typography variant='paragraph' size={1} color={color.gray[9]}>
          모임 신청하기
        </Typography>
        <div className='none' />
      </Header>
      <Main>
        <Typography
          variant='title'
          size={3}
          color={color.gray[9]}
          pt={10}
          pr={20}
          pb={10}
          pl={20}
          mb={-36}
        >
          어떤 모임인지 확인하세요.
        </Typography>
        <Section gap={'16'}>
          <Typography variant='title' size={5} color={color.gray[9]}>
            요리 정보
          </Typography>
          <MenuInfoArea>
            <MenuImg />
            <MenuDescription>
              <Typography variant='paragraph' size={1} color={color.gray[9]}>
                {markerInfo.markerMenuname}
              </Typography>
              <Typography variant='paragraph' size={6} color={color.gray[7]}>
                제주 연안에 서식하는 자리돔을 간장으로 조린 음식
              </Typography>
            </MenuDescription>
          </MenuInfoArea>
        </Section>
        <Divider />
        <Section gap={'16'}>
          <Typography variant='title' size={5} color={color.gray[9]}>
            모임 시간대
          </Typography>
          <GatheringTime>{markerInfo.markerTime} (12:00 ~ 14:00)</GatheringTime>
        </Section>
        <Divider />
        <Section gap={'24'}>
          <Typography variant='title' size={5} color={color.gray[9]}>
            개설자 정보
          </Typography>
          <HostInfoArea>
            <User1 />
            <HostDescription>
              <Typography variant='paragraph' size={3} color={color.gray[9]}>
                개설자 이름
              </Typography>
              <Typography variant='paragraph' size={2} color={color.gray[9]}>
                장소 이름
              </Typography>
              <Typography variant='caption' size={2} color={color.gray[6]}>
                {address}
              </Typography>
              <GatheringPopularityTagArea>
                <GatheringPopularityTag color={color.main[1]}>최고에요 37</GatheringPopularityTag>
                <GatheringPopularityTag color={color.main[2]}>좋아요 15</GatheringPopularityTag>
              </GatheringPopularityTagArea>
            </HostDescription>
          </HostInfoArea>
        </Section>
        <Divider />
        <Section gap={'16'}>
          <IngredientInfoTitleArea>
            <Typography variant='title' size={5} color={color.gray[9]}>
              재료 시세 정보
            </Typography>
            <PriceInfoIcon>
              <Info className='info_icon' onClick={openHandler} />
              {isOpen && (
                <PriceInfoDescription>
                  가격 측정 기준 해양 수산부의&nbsp;
                  <Link
                    to='https://www.fishtrace.go.kr/home/mpInfo/actionFishPrice.do'
                    target='_blank'
                  >
                    수산물이력제
                  </Link>
                  를 기반으로 작성되었습니다.
                </PriceInfoDescription>
              )}
            </PriceInfoIcon>
          </IngredientInfoTitleArea>
          <IngredientInfoList>
            <IngredientInfoItem>
              <IngredientImg src={fish} />
              <IngredientDescription>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  갈치
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 9,000원
                </Typography>
              </IngredientDescription>
            </IngredientInfoItem>
            <IngredientInfoItem>
              <IngredientImg src={vege} />
              <IngredientDescription>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  무
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 3,000원
                </Typography>
              </IngredientDescription>
            </IngredientInfoItem>
            <IngredientInfoItem>
              <IngredientImg src={grain} />
              <IngredientDescription>
                <Typography variant='title' size={5} color={color.gray[9]}>
                  흰쌀밥 (200g)
                </Typography>
                <Typography variant='paragraph' size={2} color={color.gray[9]}>
                  평균 2,000원
                </Typography>
              </IngredientDescription>
            </IngredientInfoItem>
          </IngredientInfoList>
        </Section>
      </Main>
      <Footer>
        <PayBtn onClick={movePaymentPage}>
          <Typography variant='title' size={4} color={color.white}>
            모임 신청하기
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
  row-gap: 36px;
`;

const Section = styled.section<{ gap: string }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: ${({ gap }) => (gap === '16' ? `${gap}px` : `${gap}px`)};
  padding: 0 20px;
`;

const MenuInfoArea = styled.div`
  display: flex;
  gap: 12px;
`;

const MenuImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 4px;
  background-color: peachpuff;
`;

const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc(100% - 12px - 144px);
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: ${color.gray[2]};
`;

const GatheringTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px 20px;
  border-radius: 8px;
  border: 1px solid ${color.gray[4]};
  background-color: ${color.gray[2]};

  font-family: ${typograpy.title[6].fontFamily};
  font-weight: ${typograpy.title[6].fontWeight}px;
  font-size: ${typograpy.title[6].fontSize}px;
`;

const HostInfoArea = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  column-gap: 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray[4]};
`;

const HostDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24px - 81px);
  row-gap: 4px;
`;

const GatheringPopularityTagArea = styled.div`
  display: flex;
  column-gap: 4px;
`;

const GatheringPopularityTag = styled.div<{ color: string }>`
  padding: 4.5px 12px;
  border-radius: 70px;
  border: 1px solid ${color.gray[4]};

  font-family: ${typograpy.caption[4].fontFamily};
  font-weight: ${typograpy.caption[4].fontWeight}px;
  font-size: ${typograpy.caption[4].fontSize}px;
  color: ${({ color }) => (color === '#FF5C00' ? color : color)};
`;

const IngredientInfoTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceInfoIcon = styled.div`
  position: relative;

  > .info_icon {
    cursor: pointer;
  }
`;

const PriceInfoDescription = styled.div`
  position: absolute;
  width: 273px;
  top: 43px;
  right: -1px;
  padding: 12px;
  border-radius: 4px;
  background: ${color.gray[2]};
  box-shadow: 0px 0px 8px 0px #00000066;

  font-family: ${typograpy.paragraph[7].fontFamily};
  font-weight: ${typograpy.paragraph[7].fontWeight}px;
  font-size: ${typograpy.paragraph[7].fontSize}px;

  > a {
    text-decoration: underline;
  }

  &::before {
    position: absolute;
    content: '';
    border-top: 0px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${color.gray[2]};
    top: -10px;
    right: 5px;
  }
`;

const IngredientInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 85px;
`;

const IngredientInfoItem = styled.li`
  display: flex;
  gap: 8px;
`;

const IngredientImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: #aed8ff;
  border-radius: 4px;
`;

const IngredientDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px - 8px);
  row-gap: 4px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  padding: 12px 20px 8px 20px;
  border-top: 1px solid ${color.gray[4]};
  background-color: ${color.white};
`;

const PayBtn = styled.button`
  width: 100%;
  padding: 11.5px 20px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${color.main[2]};
  border-radius: 8px;
`;
