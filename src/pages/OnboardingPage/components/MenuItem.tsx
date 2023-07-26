import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color, radius } from 'styles/constants';
import { ReactComponent as CheckImg } from 'assets/images/check.svg';
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
export default function MenuItem({ idx, img, name, content, setSelectedMenu, selectedMenu }: any) {
  const handleClick = () => {
    setSelectedMenu(name);
  };
  return (
    <Wrap onClick={handleClick} active={selectedMenu === name}>
      <ImgWrap idx={idx}>
        <Img src={img} alt='음식 썸네일' />
        {selectedMenu === name && (
          <div className='mid'>
            <CheckImg />
          </div>
        )}
      </ImgWrap>
      <RightWrap>
        <Typography variant='paragraph' size={2} color={color.gray[9]}>
          {name}
        </Typography>
        <Caption>{content}</Caption>
      </RightWrap>
    </Wrap>
  );
}

const Wrap = styled.div<{ active: boolean }>`
  width: 100%;
  height: 168px;
  border: 1px solid ${({ active }) => (active ? color.main[1] : '#c1c1c1 ')};
  border-radius: 8px;

  padding: 12px;

  display: flex;

  & + & {
    margin-top: 16px;
  }
`;

const ImgWrap = styled.div<{ idx: number }>`
  width: 144px;
  height: 144px;
  border-radius: ${radius[4]}px;

  background-color: ${({ idx }) => bgCols[idx % 3]};

  position: relative;
  ${flexSet()}
  .mid {
    position: absolute;
  }
`;
const Img = styled.img``;

const RightWrap = styled.div`
  /* background-color: aqua; */
  margin-left: 12px;
  /* margin-right: 12px; */
  padding-right: 12px;
  flex: 1;
`;
const Caption = styled.div`
  flex: 1;

  /* background-color: yellow; */

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  margin-top: 7px;
`;
