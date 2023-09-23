import styled from 'styled-components/macro';
import { color, typograpy } from 'styles/constants';
import { typoStyles } from 'styles/minxin';

interface InputProps {
  value: string;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
  children?: React.ReactNode;
  isError?: boolean;
}

export default function Input({
  value,
  onChange,
  placeholder,
  isError = false,
  children,
}: InputProps) {
  return (
    <InputContainer $isError={isError}>
      <InputBox type='text' value={value} onChange={onChange} placeholder={placeholder} />
      {children}
    </InputContainer>
  );
}

const InputContainer = styled.div<{ $isError: boolean }>`
  position: relative;

  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ $isError }) => ($isError ? color.alert : color.gray[4])};
  border-radius: 8px;
  padding: 11px 20px;

  background-color: white;
`;

const InputBox = styled.input`
  width: 100%;

  ${typoStyles(typograpy.paragraph[3])}
  &::placeholder {
    color: ${color.gray[5]};
  }
`;
