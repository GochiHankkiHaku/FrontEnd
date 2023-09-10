import styled from 'styled-components';
import { color } from 'styles/constants';
import { typograpy } from 'styles/constants';
import { Link } from 'react-router-dom';

export default function PriceInfoDesc() {
  return (
    <PriceInfoDescription>
      가격 측정 기준 해양 수산부의&nbsp;
      <Link to='https://www.fishtrace.go.kr/home/mpInfo/actionFishPrice.do' target='_blank'>
        수산물이력제
      </Link>
      를 기반으로 작성되었습니다.
    </PriceInfoDescription>
  );
}

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
  font-weight: ${typograpy.paragraph[7].fontWeight};
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
