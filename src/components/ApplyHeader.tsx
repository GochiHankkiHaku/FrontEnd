import styled from 'styled-components';
import { ReactComponent as ArrowChevron } from 'assets/icons/chevron-forward.svg';

interface ApplyHeaderProps {
  title: string;
  movePageHandler: () => void;
}

export default function ApplyHeader({ title, movePageHandler }: ApplyHeaderProps) {
  return (
    <Header>
      <ArrowChevron className='back_button' onClick={movePageHandler} />
      <HeaderTitle>{title}</HeaderTitle>
      <None className='none' />
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 44px;
  border-bottom: 1px solid #dfdfdf;

  > .back_button {
    cursor: pointer;
  }
`;

const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
`;

const None = styled.div`
  width: 24px;
  height: 24px;
`;
