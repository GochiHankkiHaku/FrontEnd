import { Typography } from 'components/Typography';
import React from 'react';
import styled from 'styled-components';
import { color, radius } from 'styles/constants';

interface ContentsWrapProps {
  thumbnail: string;
  title: string;
  address: string;
  recruitedCnt: number;
  totalCnt: number;
}
export default function GatheringInfo({ thumbnail, title, address, recruitedCnt, totalCnt }: ContentsWrapProps) {
  return (
    <Wrap>
      <Img src={thumbnail} alt='음식 썸네일' />
      <div>
        <Typography variant='paragraph' size={2} color={color.gray[9]}>
          {title}
        </Typography>
        <Typography variant='caption' size={2} color={color.gray[6]} mt={6} mb={8}>
          {address}
        </Typography>
        <Typography variant='caption' size={1} color={color.gray[9]} pb={8}>
          {`${recruitedCnt}/${totalCnt} 모집 완료`}
        </Typography>
        <IngredientsWrap>
          <Typography variant='paragraph' size={6} color={color.gray[9]}>
            필요 재료
          </Typography>
        </IngredientsWrap>
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

const Img = styled.img`
  width: 116px;
  height: 116px;
  border-radius: ${radius[4]}px;
  margin-right: 16px;
`;

const IngredientsWrap = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  background-color: yellow;
`;
