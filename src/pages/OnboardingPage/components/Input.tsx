import styled from 'styled-components/macro';
import { color, typograpy } from 'styles/constants';
import { typoStyles } from 'styles/minxin';

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  children?: React.ReactNode;
}
export default function Input({ value, onChange, placeholder, children }: InputProps) {
  return (
    <InputContainer>
      <InputBox type='text' value={value} onChange={onChange} placeholder={placeholder} />
      {children}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;

  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid ${color.gray[4]};
  border-radius: 8px;
  padding: 11px 20px;

  background-color: white;
`;

const InputBox = styled.input`
  ${typoStyles(typograpy.paragraph[3])}
  &::placeholder {
    color: ${color.gray[5]};
  }
`;
