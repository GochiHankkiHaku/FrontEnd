import React from 'react';
import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Back({ page, text }: { page: string; text: string }) {
  const navigate = useNavigate();

  return (
    <Wrap>
      <BackIcon onClick={() => navigate(page)} />
      <Text>{text}</Text>
    </Wrap>
  );
}

const Wrap = styled.div`
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
