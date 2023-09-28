import styled from 'styled-components';
import { Typography } from './Typography';
import { color } from 'styles/constants';

interface SearchHeaderProps {
  title: string;
  underbarColor: string;
}

export default function SearchHeader({ title, underbarColor }: SearchHeaderProps) {
  return (
    <Header underbarColor={underbarColor}>
      <Typography variant='title' size={2} color={color.gray[9]}>
        {title}
      </Typography>
    </Header>
  );
}

const Header = styled.header<{ underbarColor: string }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid ${({ underbarColor }) => underbarColor};
`;
