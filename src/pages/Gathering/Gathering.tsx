import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/constants';

export default function Gathering() {
  return (
    <Wrap>
      <Header>
        <p className='title'>모임 정보</p>
      </Header>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: ${color.gray[2]};
`;
const Header = styled.div`
  background-color: white;

  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;
