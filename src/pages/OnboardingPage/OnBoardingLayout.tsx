import { Outlet, useLocation } from 'react-router-dom';
import Back from './components/Back';
import ProgressBar from './components/ProgressBar';
import styled from 'styled-components';
import { getCurrentPageStep, getPreviousPage } from './utils/pagesInformation';

export default function OnBoardingLayout() {
  const location = useLocation().pathname;

  const currentStep = getCurrentPageStep(location);
  const previousPage = getPreviousPage(location);

  return (
    <Wrap>
      <HeaderWrap>
        <ProgressBar currentStep={currentStep} />
        <Back page={previousPage.url} text={previousPage.name} />
      </HeaderWrap>
      <Outlet />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const HeaderWrap = styled.div`
  padding: 24px 20px 0 20px;
`;
