import { useState } from 'react';

export const useInput = (initialValue?: string) => {
  const [input, setInput] = useState(initialValue || '');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return { input, handleChangeInput };
};
