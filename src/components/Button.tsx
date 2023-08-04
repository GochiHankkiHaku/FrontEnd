import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { color } from 'styles/constants';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  children?: React.ReactNode;
  width?: number;
  height?: number;
  borderRadius?: number;
  type?: 'submit' | 'button' | 'reset' | undefined;
  bgCol?: string;
  borderCol?: string;
  col?: string;
}

/**
 * 여러 페이지에서 사용될 기본적인 버튼 컴포넌트
 */
export const Button: React.FC<ButtonProps> = ({
  onClick,
  width,
  height = 50,
  borderRadius = 8,
  isDisabled,
  type = 'submit',
  bgCol = 'black',
  col = 'white',
  borderCol,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgCol={bgCol}
      col={col}
      borderCol={borderCol}
      {...rest}
    >
      <Typography variant='title' size={6}>
        {children}
      </Typography>
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  disabled?: boolean;
  width?: number;
  height: number;
  borderRadius: number;
  bgCol: string;
  borderCol?: string;
  col: string;
}>`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => height + 'px'};

  background-color: ${({ bgCol }) => bgCol};
  color: ${({ col }) => col};
  border-radius: ${({ borderRadius }) => borderRadius + 'px'};

  font-weight: 500;
  font-size: 2rem;

  &:hover {
    filter: brightness(95%);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${color.gray[5]};
      background-color: ${color.gray[2]};
      cursor: default;

      &:hover {
        filter: brightness(100%);
      }
    `}

  ${({ borderCol }) =>
    borderCol &&
    css`
      border: 1px solid ${borderCol};
    `}
`;
