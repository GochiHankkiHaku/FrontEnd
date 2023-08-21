import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as User1 } from 'assets/icons/user1.svg';
import fish from 'assets/images/어류.png';
import vege from 'assets/images/채소.png';
import grain from 'assets/images/곡류.png';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { typograpy } from 'styles/constants';

export default function GatheringDetailPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const detailInfo = location.state.list;

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header>
        <Typography variant='title' size={2} color={color.gray[9]}>
          모임 정보
        </Typography>
      </Header>
      <Main>
        <Section gap={'24'}>
          <MenuInfoTitle>
            <Typography variant='paragraph' size={2} color={color.gray[9]}>
              {detailInfo.gathering_date}
            </Typography>
            <Typography variant='title' size={1} color={color.gray[9]}>
              {detailInfo.menuname} 요리 모집
            </Typography>
          </MenuInfoTitle>
          <MenuInfoArea>
            <DetailMenuItemImg src={fish} />
            <MenuInfoDescription>
              <Typography variant='paragraph' size={1} color={color.gray[9]}>
                {detailInfo.menuname}
              </Typography>
              <Typography variant='paragraph' size={6} color={color.gray[7]}>
                제주 연안에 서식하는 자리돔을 간장으로 졸인 음식
              </Typography>
            </MenuInfoDescription>
          </MenuInfoArea>
        </Section>
        <Divider />
        <Section gap={'24'}>
          <Typography variant='title' size={4} color={color.gray[9]}>
            개최자 정보
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
                주소
              </Typography>
              <GatheringPopularityTagArea>
                <GatheringPopularityTag color={color.main[1]}>최고에요 37</GatheringPopularityTag>
                <GatheringPopularityTag color={color.main[2]}>좋아요 15</GatheringPopularityTag>
              </GatheringPopularityTagArea>
            </HostDescription>
          </HostInfoArea>
        </Section>
        <Divider />
        <Section gap={'24'}>
          <Typography variant='title' size={4} color={color.gray[9]}>
            참여자 정보
          </Typography>
          <ParticipantInfoArea>
            <UserInfo>
              <User1 />
              <Typography variant='paragraph' size={6} color={color.gray[9]}>
                유저 네임외 3명
              </Typography>
            </UserInfo>
          </ParticipantInfoArea>
        </Section>
        <Divider />
        <Section gap={'16'}>
          <IngredientInfoTitleArea>
            <Typography variant='title' size={4} color={color.gray[9]}>
              가격 측정 정보
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
                  평균 시세 9,000원
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
                  평균 시세 3,000원
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
                  평균 시세 2,000원
                </Typography>
              </IngredientDescription>
            </IngredientInfoItem>
          </IngredientInfoList>
        </Section>
      </Main>
      <GatheredBtnArea>
        <GatheredBtn>
          <Typography variant='paragraph' size={2} color={color.white}>
            모임 완료
          </Typography>
        </GatheredBtn>
      </GatheredBtnArea>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  border-bottom: 1px solid #c1c1c1;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding: 20px 0;
`;

const Section = styled.section<{ gap: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({ gap }) => (gap === '24' ? `${gap}px` : `${gap}px`)};
  padding: 0 20px;
`;

const MenuInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0 0 12px 0;
`;

const MenuInfoArea = styled.div`
  display: flex;
  gap: 12px;
`;

const DetailMenuItemImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 4px;
  background-color: peachpuff;
`;

const MenuInfoDescription = styled.div`
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

const HostInfoArea = styled.div`
  display: flex;
  gap: 12px;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid ${color.gray[4]};
`;

const HostDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24px - 81px);
  gap: 4px;
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
  font-weight: ${typograpy.caption[4].fontWeight};
  font-size: ${typograpy.caption[4].fontSize}px;
  color: ${({ color }) => (color === '#FF5C00' ? color : color)};
`;

const ParticipantInfoArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
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
  gap: 4px;
`;

const GatheredBtnArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  position: fixed;
  bottom: 0;
  padding: 16px 20px 24px 20px;
  margin-bottom: 70px;
`;

const GatheredBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 13px 16px;
  color: white;
  background-color: ${color.main[1]};
  border-radius: 50px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
`;
