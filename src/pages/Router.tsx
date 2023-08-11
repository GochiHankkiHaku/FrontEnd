import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SchedulePage from './OnboardingPage/SchedulePage';
import MemberCountPage from './OnboardingPage/MemberCountPage';
import CookPage from './OnboardingPage/CookPage';
import RecheckPage from './OnboardingPage/RecheckPage';
import MainPage from './MainPage/MainPage';
import MapPage from './MapPage/MapPage';
import GatheringApplyPage from './GatheringApplyPage/GatheringApplyPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Layout from 'components/Layout';
import PaymentPage from './PayMentPage/PaymentPage';
import ReviewPage from './ReviewPage/ReviewPage';
import GatheringDetail from './GatheringDetailPage/GatheringDetail';
import CostPage from './OnboardingPage/CostPage';
import OnBoardingLayout from './OnboardingPage/OnBoardingLayout';
import { PATH } from 'common/constants';
import LocationPage from './OnboardingPage/LocationPage';
import ContactPage from './OnboardingPage/ContactPage';

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={`${PATH.onBoarding}`} element={<OnBoardingLayout />}>
        <Route path={`${PATH.location}`} element={<LocationPage />} />
        <Route path={`${PATH.schedule}`} element={<SchedulePage />} />
        <Route path={`${PATH.memberCount}`} element={<MemberCountPage />} />
        <Route path={`${PATH.cook}`} element={<CookPage />} />
        <Route path={`${PATH.cost}`} element={<CostPage />} />
        <Route path={`${PATH.contact}`} element={<ContactPage />} />
        <Route path='recheck' element={<RecheckPage />} />
      </Route>
      <Route path={'/'} element={<Layout />}>
        <Route path='main' element={<MainPage />} />
        <Route path='map' element={<MapPage />} />
        <Route path='gathering' element={<GatheringDetail />} />
      </Route>
      <Route path={'/detail/:post_idx'} element={<GatheringApplyPage />} />
      <Route path={'/payment'} element={<PaymentPage />} />
      <Route path={'/review'} element={<ReviewPage />} />
      {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
