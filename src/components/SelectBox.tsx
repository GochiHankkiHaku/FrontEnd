import React, { FC, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { GrayBorderBtnStyle } from '../pages/OnboardingPage/utils/mixins';
import { typoStyles } from 'styles/minxin';
import { color, radius, typograpy } from 'styles/constants';
import { ReactComponent as ChevronRightIcon } from 'assets/icons/chevron-backward.svg';

interface SelectBoxProps {
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  placeholder?: string;
}

export const SelectBox: FC<SelectBoxProps> = ({
  options,
  placeholder = '선택해주세요.',
  selectedOption,
  onSelectOption,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: string) => {
    onSelectOption(option);
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SelectBoxContainer ref={containerRef}>
      <Container $open={open} onClick={() => setOpen(!open)}>
        {selectedOption || <span className='placeholder'>{placeholder}</span>}
        <ChevronRightIcon width={24} transform='rotate(90)' />
      </Container>
      <Modal open={open}>
        {options.map((option) => (
          <Option key={option} onClick={() => handleSelect(option)}>
            {selectedOption === option && <Checked>✓</Checked>}
            {option}
          </Option>
        ))}
      </Modal>
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Container = styled.div<{ $open: boolean }>`
  width: 100%;
  cursor: pointer;

  ${typoStyles(typograpy.title[6])}
  ${GrayBorderBtnStyle()};
  ${({ $open }) =>
    $open &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `}

  .placeholder {
    color: ${color.gray[5]};
  }

  display: flex;
  justify-content: space-between;
`;

const Modal = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  border: 1px solid ${color.gray[4]};
  border-top: none;
  border-bottom-left-radius: ${radius[4]}px;
  border-bottom-right-radius: ${radius[4]}px;
  background: #fff;
  z-index: 1;
`;

const Option = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 11.5px 20px;
  padding-left: 40px;
  ${typoStyles(typograpy.title[6])}
  cursor: pointer;
  &:hover {
    background: #fff3c9;
  }

  & + & {
    border-top: 1px solid ${color.gray[4]};
  }
`;

const Checked = styled.span`
  position: absolute;
  left: 12px;
`;
