import { css } from 'styled-components/macro';
import { color } from 'styles/constants';

export const GrayBorderBtnStyle = () => css`
  width: 100%;
  padding: 11.5px 20px;

  background-color: ${color.gray[1]};
  border: 1px solid ${color.gray[3]};
  border-radius: 8px;
`;
