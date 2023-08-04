import React from 'react';
import styled from 'styled-components';
import { color, typograpy } from 'styles/constants';
import { typoStyles } from 'styles/minxin';

export default function Search() {
  return (
    <Wrap>
      {/* TODO 돋보기 에셋 받고 추가 */}
      <Input type='text' placeholder='레시피 검색' />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 47px;
  padding: 10px 20px;

  border-radius: 47px;
  border: 1px solid ${color.main[4]};
`;

const Input = styled.input`
  /* background-color: yellow; */

  width: 100%;
  height: 100%;

  ${typoStyles(typograpy.paragraph[3])};
  &::placeholder {
    color: ${color.gray[5]};
  }
`;
