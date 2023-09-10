import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Back from './components/Back';
import ProgressBar from './components/ProgressBar';
import styled from 'styled-components';
import { getCurrentPageStep, getPreviousPage } from './utils/pagesInformation';
import { MAXWIDTH } from 'common/constants';
import { useRefresh } from './hooks/useRefresh';

export default function OnBoardingLayout() {
  useRefresh();
  const location = useLocation().pathname;

  const currentStep = getCurrentPageStep(location);
  const previousPage = getPreviousPage(location);

  return (
    <Wrap>
      <HeaderWrap>
        <ProgressBar currentStep={currentStep} />
        <Back page={previousPage.url} text={previousPage.name} />
      </HeaderWrap>
      <HeaderBlank />
      <Outlet />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const HeaderWrap = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  max-width: ${MAXWIDTH}px;
  padding: 24px 20px 0 20px;

  background-color: white;
`;

const HeaderBlank = styled.div`
  width: 100%;
  height: 86px;
`;
