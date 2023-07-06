import React from 'react';
import { ReactComponent as XIcon } from 'assets/icons/xmark.svg';
import { Header } from 'components/Header';
import { Typography } from 'components/Typography';
import styled from 'styled-components';
import { color } from 'styles/constants';

export default function ReviewPage() {
  return (
    <div>
      <Header>
        <XIcon />
        <HeaderText>한 끼 하쿠</HeaderText>
      </Header>
      ReviewPage
    </div>
  );
}

const HeaderText = styled.div`
  margin-left: 8px;
  color: ${color.gray[9]};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 165%; */
`;
