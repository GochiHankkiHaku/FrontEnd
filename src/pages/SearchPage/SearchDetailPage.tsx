import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';
import { Divider } from 'components/Divider';
import { useParams } from 'react-router-dom';
import { useGetPost } from './hooks/useGetPost';
import { Spinner } from 'components/Spinner';
import MenuInfo from '../../components/MenuInfo';
import GatheringTime from './components/GatheringTime';
import FounderInfo from './components/FounderInfo';
import IngredientInfo from '../../components/IngredientInfo';
import PriceInfoDesc from '../../components/PriceInfoDesc';
import { useGetMatchings } from 'pages/GatheringPage/hooks/useGetMatchings';
import { toast } from 'react-toastify';

export default function SearchDetailPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { post_idx } = useParams();
  const gatheringDetailData = useGetPost(post_idx as string);

  const matchingData = useGetMatchings();
  const checkSameGathering = matchingData.filter((data: any) => {
    return data.postIdx === Number(post_idx);
  });

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const movePrevPage = () => {
    navigate(-1);
  };

  const moveSelectContactPage = () => {
    if (checkSameGathering.length === 0) {
      navigate(`/select/${post_idx}`);
    } else {
      toast.error('이미 신청하신 모임입니다.');
    }
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
      {gatheringDetailData === undefined ? (
        <Spinner />
      ) : (
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
          <Section gap={16}>
            <Typography variant='title' size={5} color={color.gray[9]}>
              요리 정보
            </Typography>
            <MenuInfo
              img={gatheringDetailData.menuimg}
              menuname={gatheringDetailData.menuname}
              menuContent={gatheringDetailData.menucontent}
            />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={16}>
            <Typography variant='title' size={5} color={color.gray[9]}>
              모임 시간대
            </Typography>
            <GatheringTime time={gatheringDetailData.time} />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={24}>
            <Typography variant='title' size={5} color={color.gray[9]}>
              개설자 정보
            </Typography>
            <FounderInfo
              founder={gatheringDetailData.writer}
              address={gatheringDetailData.address}
              great={gatheringDetailData.great}
              good={gatheringDetailData.good}
              founderInfoBorder={'detail'}
            />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={16}>
            <IngredientInfoTitleArea>
              <Typography variant='title' size={5} color={color.gray[9]}>
                재료 시세 정보
              </Typography>
              <PriceInfoIcon>
                <Info className='info_icon' onClick={openHandler} />
                {isOpen && <PriceInfoDesc />}
              </PriceInfoIcon>
            </IngredientInfoTitleArea>
            <IngredientInfoList>
              {gatheringDetailData.item.map((ingredient: any) => {
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
      <Footer>
        <PayBtn onClick={moveSelectContactPage}>
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

const Section = styled.section<{ gap: number }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: ${({ gap }) => (gap === 16 ? `${gap}px` : `${gap}px`)};
  padding: 0 20px;
`;

export const IngredientInfoTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceInfoIcon = styled.div`
  position: relative;

  > .info_icon {
    cursor: pointer;
  }
`;

export const IngredientInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 85px;
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

  &:hover {
    filter: brightness(95%);
  }
`;
