import { BOTTOM_NAVIGATION_HEIGHT } from 'common/constants';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  backgroundHeight?: string;
}

export const Spinner = ({ backgroundHeight }: SpinnerProps) => {
  return (
    <SpinnerContainer $backgroundHeight={backgroundHeight}>
      <LoadingSpinner />
    </SpinnerContainer>
  );
};

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div<{ $backgroundHeight?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $backgroundHeight }) =>
    $backgroundHeight ? $backgroundHeight : `calc(100vh - ${BOTTOM_NAVIGATION_HEIGHT}px)`};
  background-color: white;
`;

// 스피닝 컴포넌트 스타일 정의
export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff8d4e;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-bottom: 80px;
  animation: ${spinAnimation} 1s linear infinite;
`;
