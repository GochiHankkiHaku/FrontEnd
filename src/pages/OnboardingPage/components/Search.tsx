import styled from 'styled-components';
import { color, typograpy } from 'styles/constants';
import { typoStyles } from 'styles/minxin';
import searchIcon from 'assets/icons/search.svg';
import { ChangeEventHandler } from 'react';

interface SearchProps {
  input: string;
  onChange: ChangeEventHandler;
}

export default function Search({ input, onChange }: SearchProps) {
  return (
    <Wrap>
      <Input type='text' placeholder='레시피 검색' value={input} onChange={onChange} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;
  height: 47px;
  padding: 10px 20px;

  border-radius: 47px;
  border: 1px solid ${color.main[4]};

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    background-image: url(${searchIcon});
    background-position: center;
    background-size: cover;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 100%;

  ${typoStyles(typograpy.paragraph[3])};
  &::placeholder {
    color: ${color.gray[5]};
  }
`;
