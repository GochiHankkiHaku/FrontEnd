import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/constants';

export default function Gathering() {
  return (
    <Wrap>
      <Header>
        <p className='title'>모임 정보</p>
        <button className='btn'>현재 모임</button>
        <button className='btn'>이전 기록</button>
        <Button>현재 모임</Button>
        <Button>이전 기록</Button>
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

const Button = styled.button``;
