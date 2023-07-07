import { Typography } from 'components/Typography';
import React from 'react';
import styled from 'styled-components';
import { color, radius } from 'styles/constants';
import { ReactComponent as PeopleIcon } from 'assets/icons/people.svg';
import { flexSet } from 'styles/minxin';

const bgCols = ['#FFF2DE', '#DEFFF9', '#E8FFDD'];
interface ContentsWrapProps {
  thumbnail: string;
  title: string;
  address: string;
  recruitedCnt: number;
  totalCnt: number;
  idx: number;
}
export default function GatheringInfo({
  thumbnail,
  title,
  address,
  recruitedCnt,
  totalCnt,
  idx,
}: ContentsWrapProps) {
  return (
    <Wrap>
      <ImgWrap idx={idx}>
        <Img src={thumbnail} alt='음식 썸네일' />
      </ImgWrap>
      <div>
        <Typography variant='paragraph' size={2} color={color.gray[9]}>
          {title}
        </Typography>
        <Typography variant='caption' size={2} color={color.gray[6]} mt={6} mb={8}>
          {address}
        </Typography>
        <PeopleWrap>
          <PeopleIcon />
          <Text>{`${recruitedCnt}/${totalCnt} 모집 완료`}</Text>
        </PeopleWrap>
        <TagWrap>
          <Tag color={color.main[1]}>최고에요 37</Tag>
          <Tag color={color.main[2]}>좋아요 15</Tag>
        </TagWrap>
        {/* <IngredientsWrap>
          <Typography variant='paragraph' size={6} color={color.gray[9]}>
            필요 재료
          </Typography>
        </IngredientsWrap> */}
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  padding: 18px 17px 18px 0;
  background-color: white;
  display: flex;

  border-bottom: 1px solid ${color.gray[3]};
`;

const ImgWrap = styled.div<{ idx: number }>`
  width: 116px;
  height: 116px;
  border-radius: ${radius[4]}px;
  margin-right: 16px;

  background-color: ${({ idx }) => bgCols[idx % 3]};
`;
const Img = styled.img``;

const IngredientsWrap = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  background-color: yellow;
`;

const PeopleWrap = styled.div`
  display: flex;
  align-content: center;
`;

const Text = styled.p`
  margin-left: 6px;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;

  display: flex;
  align-items: center;
`;

const TagWrap = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 4px;
`;

const Tag = styled.div<{ color: string }>`
  ${flexSet()}
  padding: 0 8px;
  height: 24px;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  color: ${({ color }) => color};

  border-radius: 70px;
  border: 1px solid #c1c1c1;
`;
