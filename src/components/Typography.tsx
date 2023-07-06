import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import styled from 'styled-components/macro';
import { typograpy } from 'styles/constants';

interface TypographyStyleProps {
  variant: 'title' | 'paragraph' | 'caption';
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  color?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

interface TypographyProps extends TypographyStyleProps {
  children: ReactNode;
}

/**
 * 컴포넌트
 */
export const Typography: React.FC<TypographyProps & { children: ReactNode }> = ({
  variant,
  size,
  color,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  children,
}) => {
  return (
    <Text variant={variant} size={size} color={color} mt={mt} mb={mb} ml={ml} mr={mr} pt={pt} pb={pb} pl={pl} pr={pr}>
      {children}
    </Text>
  );
};

const Text = styled.p<TypographyProps & { children: ReactNode }>`
  font-size: ${({ variant, size }) => typograpy[variant][size].fontSize}px;
  font-weight: ${({ variant, size }) => typograpy[variant][size].fontWeight};
  line-height: ${({ variant, size }) => typograpy[variant][size].lineHeight}%;
  color: ${({ color }) => color && color};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  padding-top: ${({ pt }) => pt && `${pt}px`};
  padding-bottom: ${({ pb }) => pb && `${pb}px`};
  padding-left: ${({ pl }) => pl && `${pl}px`};
  padding-right: ${({ pr }) => pr && `${pr}px`};
`;
