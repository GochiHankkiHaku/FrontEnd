import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface BackProps {
  previousPageName: string;
}

export default function Back({ previousPageName }: BackProps) {
  const navigate = useNavigate();

  return (
    <Wrap onClick={() => navigate(-1)}>
      <BackIcon />
      <Text>{previousPageName}</Text>
    </Wrap>
  );
}

const Wrap = styled.button`
  display: flex;
  align-items: center;

  padding: 12px 0;
  margin-top: 12px;
`;

const Text = styled.span`
  margin-left: 3px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
