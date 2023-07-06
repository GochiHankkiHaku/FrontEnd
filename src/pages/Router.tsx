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

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/onboarding'>
        <Route path='time' element={<TimePage />} />
        <Route path='personal' element={<PersonalPage />} />
        <Route path='menu' element={<MenuPage />} />
        <Route path='food' element={<FoodPage />} />
        <Route path='recheck' element={<RecheckPage />} />
      </Route>
      <Route path='/' element={<Layout />}>
        <Route path='main' element={<MainPage />} />
        <Route path='map' element={<MapPage />} />
        <Route path='detail/:post_idx' element={<DetailMainPage />} />
      </Route>
      {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
