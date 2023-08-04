import { css } from 'styled-components';
import type { FlattenSimpleInterpolation } from 'styled-components';

export const flexSet = (justify = 'center', align = 'center'): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const mediaBpDown = (maxWidth: string, children: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${maxWidth}) {
    ${children}
  }
`;

interface TypoStyles {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export const typoStyles = (style: TypoStyles) => css`
  font-family: ${style.fontFamily};
  font-size: ${style.fontSize}px;
  font-weight: ${style.fontWeight};
  line-height: ${style.lineHeight};
`;
