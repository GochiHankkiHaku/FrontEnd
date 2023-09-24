import styled from 'styled-components';
import { color } from 'styles/constants';

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 50px;

  border-bottom: 1px solid ${color.gray[4]};
`;
