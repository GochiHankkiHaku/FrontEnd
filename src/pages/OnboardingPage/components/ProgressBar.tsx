// src/components/ProgressBar.tsx
import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/constants';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <ProgressBarContainer>
      <Step isActive={currentStep >= 1} />
      <Step isActive={currentStep >= 2} />
      <Step isActive={currentStep >= 3} />
      <Step isActive={currentStep >= 4} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  display: flex;
  height: 2px;
  border: none;
  border-radius: 4px;
  gap: 11px;
`;

const Step = styled.div<{ isActive: boolean }>`
  flex: 1;
  background-color: ${(props) => {
    return props.isActive ? color.main[2] : color.gray[3];
  }};

  /* &:not(:last-child) {
    border-right: none;
  } */
`;
