import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { useParams, useLocation } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import SearchHeader from 'components/SearchHeader';
import { Divider } from 'components/Divider';
import { useGetMatching } from './hooks/useGetMatching';
import MenuInfo from 'components/MenuInfo';
import ContactFounderInfo from './components/ContactFounderInfo';
import IngredientInfo from 'components/IngredientInfo';
import PriceInfoDesc from 'components/PriceInfoDesc';
import {
  IngredientInfoTitleArea,
  PriceInfoIcon,
  IngredientInfoList,
} from 'pages/SearchPage/SearchDetailPage';
import { Spinner } from 'components/Spinner';

export default function GatheringDetailPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const { post_idx } = useParams();
  const matchingDetailData = useGetMatching(post_idx as string);
  const user_idx = localStorage.getItem('user_idx');

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SearchHeader title={'모임 정보'} underbarColor={color.white} />
      {matchingDetailData === undefined ? (
        <Spinner />
      ) : (
        <Main>
          <Section gap={24}>
            <MenuInfoTitle>
              <Typography variant='paragraph' size={2} color={color.gray[9]}>
                {location.state}
              </Typography>
              <Typography variant='title' size={1} color={color.gray[9]}>
                {matchingDetailData.menuname} 요리 모집
              </Typography>
            </MenuInfoTitle>
            <MenuInfo
              img={matchingDetailData.menuimg}
              menuname={matchingDetailData.menuname}
              menuContent={matchingDetailData.menucontent}
            />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={24}>
            {user_idx === '1' ? (
              <FounderTitleArea>
                <Typography variant='title' size={4} color={color.gray[9]}>
                  신청자 정보
                </Typography>
                <button>
                  <Typography variant='paragraph' size={4} color={color.alert}>
                    거절하기
                  </Typography>
                </button>
              </FounderTitleArea>
            ) : (
              <Typography variant='title' size={4} color={color.gray[9]}>
                개최자 정보
              </Typography>
            )}
            <ContactFounderInfo
              founder={matchingDetailData.writer}
              address={matchingDetailData.address}
              great={matchingDetailData.great}
              good={matchingDetailData.good}
              contact={matchingDetailData?.matchingUsers[0].contactMethod}
              contactNum={matchingDetailData?.matchingUsers.length}
            />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={16}>
            <IngredientInfoTitleArea>
              <Typography variant='title' size={5} color={color.gray[9]}>
                가격 측정 정보
              </Typography>
              <PriceInfoIcon>
                <Info className='info_icon' onClick={openHandler} />
                {isOpen && <PriceInfoDesc />}
              </PriceInfoIcon>
            </IngredientInfoTitleArea>
            <IngredientInfoList>
              {matchingDetailData.item.map((ingredient: any) => {
                return (
                  <IngredientInfo
                    key={ingredient.idx}
                    img={ingredient.url}
                    ingredient={ingredient.ingredient}
                    price={ingredient.price}
                  />
                );
              })}
            </IngredientInfoList>
          </Section>
        </Main>
      )}
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  padding: 20px 0;
`;

const Section = styled.section<{ gap: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({ gap }) => (gap === 24 ? `${gap}px` : `${gap}px`)};
  padding: 0 20px;
`;

const MenuInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 0 0 12px 0;
  border-bottom: 1px solid ${color.gray[4]};
`;

const FounderTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
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
