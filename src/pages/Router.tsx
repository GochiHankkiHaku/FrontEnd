import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import TimePage from './OnboardingPage/TimePage';
import PersonalPage from './OnboardingPage/PersonalPage';
import MenuPage from './OnboardingPage/MenuPage';
import FoodPage from './OnboardingPage/FoodPage';
import RecheckPage from './OnboardingPage/RecheckPage';
import MainPage from './MainPage/MainPage';
import MapPage from './MapPage/MapPage';
import DetailMainPage from './DetailPage/DetailMainPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Layout from 'components/Layout';
import PaymentPage from './PayMentPage/PaymentPage';
import ReviewPage from './ReviewPage/ReviewPage';
import Gathering from './Gathering/Gathering';
import CostPage from './OnboardingPage/CostPage';

const staticServerUri = process.env.REACT_APP_PATH || '';

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={staticServerUri + '/'} element={<LandingPage />} />
      <Route path={staticServerUri + '/onboarding'}>
        <Route path='time' element={<TimePage />} />
        <Route path='personal' element={<PersonalPage />} />
        <Route path='menu' element={<MenuPage />} />
        <Route path='food' element={<FoodPage />} />
        <Route path='cost' element={<CostPage />} />
        <Route path='recheck' element={<RecheckPage />} />
      </Route>
      <Route path={staticServerUri + '/'} element={<Layout />}>
        <Route path='main' element={<MainPage />} />
        <Route path='map' element={<MapPage />} />
        <Route path='gathering' element={<Gathering />} />
      </Route>
      <Route path={staticServerUri + '/detail/:post_idx'} element={<DetailMainPage />} />
      <Route path={staticServerUri + '/payment'} element={<PaymentPage />} />
      <Route path={staticServerUri + '/review'} element={<ReviewPage />} />
      {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
