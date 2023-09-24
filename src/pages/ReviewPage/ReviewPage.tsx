import { ReactComponent as XIcon } from 'assets/icons/xmark.svg';
import reviewGoodImg from 'assets/images/review-good.svg';
import reviewGoodActiveImg from 'assets/images/review-good-active.svg';
import reviewGreatImg from 'assets/images/review-great.svg';
import reviewGreatActiveImg from 'assets/images/review-great-active.svg';
import reviewNotGoodImg from 'assets/images/review-notgood.svg';
import reviewNotGoodActiveImg from 'assets/images/review-notgood-active.svg';
import { Header } from 'components/Header';
import { Typography } from 'components/Typography';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { color, typograpy } from 'styles/constants';
import { typoStyles } from 'styles/minxin';
import { Button } from 'components/Button';
import { MAXWIDTH } from 'common/constants';
import { UserApi } from 'apis/lib/users';
import ContactFounderInfo from 'pages/GatheringPage/components/ContactFounderInfo';

type ReviewType = 'good' | 'notgood' | 'great';

export default function ReviewPage() {
  const [review, setReview] = useState<ReviewType>('good');
  const location = useLocation();
  const { postIdx, gatheringInfo } = location.state;
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(-1);
  };

  const handleChangeReview = (review: ReviewType) => {
    setReview(review);
  };

  const handleCreateReview = async () => {
    await UserApi.createReview({ userIdx: 1, postIdx, reviewType: review });
    navigate(-1);
  };

  return (
    <Wrap>
      <Header>
        <XIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        <Typography variant='title' size={2} ml={16}>
          후기 남기기
        </Typography>
      </Header>
      <MenuInfoArea>
        <MenuImg src={gatheringInfo.menuimg} alt='메뉴 이미지' />
        <MenuInfo>
          <Typography variant='paragraph' size={1} color={color.gray[9]}>
            {gatheringInfo.menuname + '요리 모임'}
          </Typography>
          <Typography variant='caption' size={2} color={color.gray[6]}>
            {gatheringInfo.address}
          </Typography>
          <Typography variant='title' size={5} color={color.main[1]}>
            {gatheringInfo.price.toLocaleString()}원
          </Typography>
          <MoveDetailBtn onClick={moveDetailPage}>
            <Typography variant='caption' size={2} color={color.main[4]}>
              자세히 보기
            </Typography>
          </MoveDetailBtn>
        </MenuInfo>
      </MenuInfoArea>
      <Divider />
      <ReviewArea>
        <Typography variant='title' size={5} mb={24}>
          개설자 정보
        </Typography>
        <ContactFounderInfo
          founder={gatheringInfo.writer}
          address={gatheringInfo.address}
          great={gatheringInfo.great}
          good={gatheringInfo.good}
          contact={gatheringInfo.matchingUsers[0]?.contactMethod}
          contactNum={gatheringInfo.matchingUsers?.length}
          postStatus={'C'}
          isReviewWritten={true}
        />
        <Typography variant='title' size={5} mb={24} mt={36}>
          오늘 모임에 대한 평가를 해주세요.
        </Typography>
        <ReviewImgsWrap>
          <ReviewBtnNotGood
            active={review === 'notgood'}
            onClick={() => handleChangeReview('notgood')}
          >
            별로예요
          </ReviewBtnNotGood>
          <ReviewBtnGood active={review === 'good'} onClick={() => handleChangeReview('good')}>
            좋아요
          </ReviewBtnGood>
          <ReviewBtnGreat active={review === 'great'} onClick={() => handleChangeReview('great')}>
            최고예요
          </ReviewBtnGreat>
        </ReviewImgsWrap>
      </ReviewArea>
      <ButtonWrap>
        <Button bgCol={color.main[1]} onClick={handleCreateReview}>
          <Typography variant='title' size={4}>
            후기 작성 완료
          </Typography>
        </Button>
      </ButtonWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100%;
`;

const MenuInfoArea = styled.div`
  display: flex;
  column-gap: 12px;

  padding: 20px 20px 36px 20px;
`;

const MenuImg = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 3px;
  background-color: peachpuff;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 12px - 116px);
`;

const MoveDetailBtn = styled.button`
  width: 100%;
  padding: 5px 0;
  border-radius: 70px;
  border: 1px solid ${color.main[4]};
`;

const ReviewArea = styled.div`
  padding: 36px 20px;
  background-color: white;
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background-color: ${color.gray[2]};
`;

const ReviewImgsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewBtn = styled.button<{ active: boolean }>`
  ${typoStyles(typograpy.paragraph[3])}
  color: ${color.gray[5]};

  ${({ active }) =>
    active &&
    css`
      ${typoStyles(typograpy.paragraph[1])}
    `}

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background-image: url(${reviewGoodImg});
    margin-bottom: 4px;
  }
`;

const ReviewBtnGood = styled(ReviewBtn)<{ active: boolean }>`
  &::before {
    background-image: url(${({ active }) => (active ? reviewGoodActiveImg : reviewGoodImg)});
  }
  ${({ active }) =>
    active &&
    css`
      color: ${color.main[2]};
    `}
`;
const ReviewBtnGreat = styled(ReviewBtn)<{ active: boolean }>`
  &::before {
    background-image: url(${({ active }) => (active ? reviewGreatActiveImg : reviewGreatImg)});
  }
  ${({ active }) =>
    active &&
    css`
      color: ${color.main[1]};
    `}
`;
const ReviewBtnNotGood = styled(ReviewBtn)<{ active: boolean }>`
  &::before {
    background-image: url(${({ active }) => (active ? reviewNotGoodActiveImg : reviewNotGoodImg)});
  }
  ${({ active }) =>
    active &&
    css`
      color: ${color.gray[7]};
    `}
`;

const ButtonWrap = styled.div`
  position: absolute;
  padding: 12px 20px;
  border-top: 1px solid ${color.gray[4]};
  max-width: ${MAXWIDTH}px;
  width: 100%;
  height: fit-content;
  bottom: 0;
`;
