import { MAXWIDTH } from 'common/constants';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color } from 'styles/constants';

interface FooterProps {
  isDisabled?: boolean;
  saveLater?: boolean;
  onClick?: VoidFunction;
  btnText?: string;
}

export default function Footer({
  isDisabled = false,
  onClick,
  saveLater = false,
  btnText = '다음으로',
}: FooterProps) {
  return (
    <>
      <BtnWrap>
        {saveLater && (
          <LaterBtn>
            <Typography variant='paragraph' size={5} color={color.gray[5]}>
              나중에 선택하기
            </Typography>
          </LaterBtn>
        )}
        <Button isDisabled={isDisabled} col='white' bgCol={color.main[2]} onClick={onClick}>
          {btnText}
        </Button>
      </BtnWrap>
    </>
  );
}

const BtnWrap = styled.div`
  background-color: ${color.white};

  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${MAXWIDTH}px;

  border-top: 1px solid ${color.gray[2]};

  padding: 12px 20px;
`;

const LaterBtn = styled.button`
  width: 100%;
  background-color: transparent;
  margin-bottom: 8px;
  text-align: center;
`;
