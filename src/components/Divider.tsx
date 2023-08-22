import styled from 'styled-components';

export const Divider = styled.div<{ height: number; backgroundColor: string; margin?: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin}px 0;
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:last-child {
    display: none;
  }
`;
