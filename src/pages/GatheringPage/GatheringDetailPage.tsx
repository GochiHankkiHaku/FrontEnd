import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { color } from 'styles/constants';
import SearchHeader from 'components/SearchHeader';
import { Divider } from 'components/Divider';
import { useGetMatchingDetail } from './hooks/useGetMatchingDetail';
import MenuInfo from 'pages/SearchPage/components/MenuInfo';
import ContactInfo from './components/ContactInfo';
import IngredientInfo from 'pages/SearchPage/components/IngredientItem';
import PriceInfoDesc from 'pages/SearchPage/components/PriceInfoDesc';
import {
  IngredientInfoTitleArea,
  PriceInfoIcon,
  IngredientInfoList,
} from 'pages/SearchPage/SearchDetailPage';
import { Spinner } from 'components/Spinner';
import RejectModal from './components/RejectModal';
import { axiosClient } from 'apis/apiClient';
import { changeFormatDate } from 'pages/SearchPage/utils/changeFormatDate';
import { toast } from 'react-toastify';

export default function GatheringDetailPage() {
  const [isIngredientDescOpen, setIsIngredientDescOpen] = useState<boolean>(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { post_idx } = useParams();
  const { matchingDetail, getMatchingDetail } = useGetMatchingDetail(post_idx as string);
  const user_idx = localStorage.getItem('user_idx');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openIngredientDescHandler = () => {
    setIsIngredientDescOpen(!isIngredientDescOpen);
  };

  const openRejectModalHandler = () => {
    setIsRejectModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const gatheringCompletedHandler = async () => {
    try {
      await axiosClient.put(`post/complete/${post_idx}`);
      navigate('/gathering');
      toast.success('모임은 어떠셨나요? 리뷰를 남겨보세요.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <SearchHeader title={'모임 정보'} underbarColor={color.white} />
      {matchingDetail === undefined ? (
        <Spinner />
      ) : (
        <Main>
          <Section gap={24}>
            <MenuInfoTitle>
              <Typography variant='paragraph' size={2} color={color.gray[9]}>
                {changeFormatDate(location.state.postDate)}
              </Typography>
              <MenuInfoTagTitleArea>
                <Typography variant='title' size={1} color={color.gray[9]}>
                  {matchingDetail.menuname} 요리 모집
                </Typography>
                {location.state.postStatus === 'N' && (
                  <StatusTag>
                    <Typography variant='caption' size={4} color={color.white}>
                      진행중
                    </Typography>
                  </StatusTag>
                )}
              </MenuInfoTagTitleArea>
            </MenuInfoTitle>
            <MenuInfo
              img={matchingDetail.menuimg}
              menuname={matchingDetail.menuname}
              menuContent={matchingDetail.menucontent}
            />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={24}>
            {user_idx === '1' ? (
              <FounderTitleArea>
                <Typography variant='title' size={4} color={color.gray[9]}>
                  신청자 정보
                </Typography>
                {location.state.postStatus === 'N' &&
                  matchingDetail?.matchingUsers[0]?.status === 'HOLDING' && (
                    <button onClick={openRejectModalHandler}>
                      <Typography variant='paragraph' size={4} color={color.alert}>
                        거절하기
                      </Typography>
                    </button>
                  )}
                {isRejectModalOpen && (
                  <RejectModal
                    contactName={matchingDetail.matchingUsers[0]?.username}
                    contactNum={matchingDetail?.matchingUsers.length}
                    setIsRejectModalOpen={setIsRejectModalOpen}
                    matchingIdx={matchingDetail?.matchingUsers[0].matchingIndex}
                    getMatchingDetail={getMatchingDetail}
                  />
                )}
              </FounderTitleArea>
            ) : (
              <Typography variant='title' size={4} color={color.gray[9]}>
                개최자 정보
              </Typography>
            )}
            <ContactInfo
              matchingDetail={matchingDetail}
              postStatus={location.state.postStatus}
              getMatchingDetail={getMatchingDetail}
            />
          </Section>
          <Divider height={14} backgroundColor={color.gray[2]} />
          <Section gap={16}>
            <IngredientInfoTitleArea>
              <Typography variant='title' size={5} color={color.gray[9]}>
                가격 측정 정보
              </Typography>
              <PriceInfoIcon>
                <Info className='info_icon' onClick={openIngredientDescHandler} />
                {isIngredientDescOpen && <PriceInfoDesc />}
              </PriceInfoIcon>
            </IngredientInfoTitleArea>
            <IngredientInfoList>
              {matchingDetail.item.map((ingredient: any) => {
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
        {location.state.postStatus === 'N' && matchingDetail?.matchingUsers[0]?.status === 'OK' && (
          <GatheredBtn onClick={gatheringCompletedHandler}>
            <Typography variant='paragraph' size={2} color={color.white}>
              모임 완료
            </Typography>
          </GatheredBtn>
        )}
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

const MenuInfoTagTitleArea = styled.div`
  display: flex;
  align-items: center;
  column-gap: 9px;
`;

const StatusTag = styled.div`
  padding: 4.5px 12px;
  border-radius: 70px;
  background-color: ${color.alert};
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

  &:hover {
    filter: brightness(95%);
  }
`;
