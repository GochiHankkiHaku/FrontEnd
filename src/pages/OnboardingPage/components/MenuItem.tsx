import { Typography } from 'components/Typography';
import styled, { css } from 'styled-components';
import { color, radius } from 'styles/constants';
import { ReactComponent as CheckImg } from 'assets/images/check.svg';
import { flexSet } from 'styles/minxin';

const bgCols = ['#FFF2DE', '#DEFFF9', '#E8FFDD'];
interface MenuItemProps {
  idx: number;
  img: string;
  name: string;
  content: string;
  onSelectMenu: () => void;
  isSelected: boolean;
  isAnySelected: boolean;
}
export default function MenuItem({
  idx,
  img,
  name,
  content,
  onSelectMenu,
  isSelected,
  isAnySelected,
}: MenuItemProps) {
  return (
    <>
      <Wrap onClick={onSelectMenu} $isSelected={isSelected} $isAnySelected={isAnySelected}>
        <ImgWrap idx={idx}>
          <Img src={img} alt='음식 썸네일' />
          {isSelected && (
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
    </>
  );
}

const Wrap = styled.div<{ $isSelected: boolean; $isAnySelected: boolean }>`
  display: flex;
  position: relative;
  background-color: #fff;

  width: 100%;
  height: 168px;
  box-shadow: 0 0 0 1px ${color.gray[4]} inset;

  border-radius: 8px;

  padding: 12px;

  & + & {
    margin-top: 16px;
  }

  cursor: pointer;

  ${({ $isAnySelected, $isSelected }) => {
    if ($isSelected) {
      return css`
        box-shadow: 0 0 0 2px ${color.main[1]} inset;
      `;
    }
    if ($isAnySelected) {
      return css`
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
        }
      `;
    }
  }}
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
