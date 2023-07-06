import styled from 'styled-components/macro';
import { typograpy } from 'styles/constants';

interface TypographyProps {
  variant: 'title' | 'paragraph' | 'caption';
  size: 1 | 2 | 3 | 4 | 5 | 7;
  children: React.ReactNode;
  color?: string;
}

/**
 * 컴포넌트
 */
export const Typography: React.FC<TypographyProps> = ({ variant, size, color, children }) => {
  return (
    <Text variant={variant} size={size} color={color}>
      {children}
    </Text>
  );
};

const Text = styled.p<{ variant: 'title' | 'paragraph' | 'caption'; size: 1 | 2 | 3 | 4 | 5 | 6 | 7; color?: string }>`
  font-size: ${({ variant, size }) => typograpy[variant][size].fontSize}px;
  font-weight: ${({ variant, size }) => typograpy[variant][size].fontWeight};
  line-height: ${({ variant, size }) => typograpy[variant][size].lineHeight}%;
  color: ${({ color }) => color && color};
`;
