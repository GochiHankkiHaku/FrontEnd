import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color, radius } from 'styles/constants';
import { ReactComponent as PeopleIcon } from 'assets/icons/people.svg';
import { flexSet } from 'styles/minxin';
import { PostResponse } from 'apis/lib/post/type';

const bgCols = ['#FFF2DE', '#DEFFF9', '#E8FFDD'];
interface ContentsWrapProps extends PostResponse {
  colorIdx: number;
}

export default function GatheringInfo({
  colorIdx,
  address,
  img,
  menuname,
  status,
  good,
  greate,
}: ContentsWrapProps) {
  return (
    <Wrap>
      <ImgWrap idx={colorIdx}>
        <Img src={img} alt='음식 썸네일' />
      </ImgWrap>
      <InfoWrap>
        <Typography variant='paragraph' size={2} color={color.gray[9]}>
          {`${menuname} 요리 모집`}
        </Typography>
        <Typography variant='caption' size={2} color={color.gray[6]} mt={6} mb={8}>
          {address}
        </Typography>
        <PeopleWrap>
          <PeopleIcon />
          <Text>{status === 'N' ? '모집 중' : '모집 완료'}</Text>
        </PeopleWrap>
        <TagWrap>
          <Tag color={color.main[1]}>최고에요 {greate}</Tag>
          <Tag color={color.main[2]}>좋아요 {good}</Tag>
        </TagWrap>
      </InfoWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  padding: 18px 0px 18px 0;
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

const InfoWrap = styled.div`
  flex: 1;
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
