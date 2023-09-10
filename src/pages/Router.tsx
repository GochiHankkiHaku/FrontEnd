import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SchedulePage from './OnboardingPage/SchedulePage';
import MemberCountPage from './OnboardingPage/MemberCountPage';
import CookPage from './OnboardingPage/CookPage';
import RecheckPage from './OnboardingPage/RecheckPage';
import MainPage from './MainPage/MainPage';
import SearchPage from './SearchPage/SearchPage';
import SearchDetailPage from './SearchPage/SearchDetailPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Layout from 'components/Layout';
import PaymentPage from './SearchPage/PaymentPage';
import ReviewPage from './ReviewPage/ReviewPage';
import CostPage from './OnboardingPage/CostPage';
import OnBoardingLayout from './OnboardingPage/OnBoardingLayout';
import { PATH } from 'common/constants';
import LocationPage from './OnboardingPage/LocationPage';
import ContactPage from './OnboardingPage/ContactPage';
import GatheringPage from './GatheringPage/GatheringPage';
import GatheringDetailPage from './GatheringPage/GatheringDetailPage';
import SelectContactPage from './SearchPage/SelectContactPage';

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
      </Route>
      <Route path={`/${PATH.recheck}`} element={<RecheckPage />} />
      <Route path={'/'} element={<Layout />}>
        <Route path='main' element={<MainPage />} />
        <Route path='map' element={<SearchPage />} />
        <Route path='gathering' element={<GatheringPage />} />
        <Route path={'gathering/:post_idx'} element={<GatheringDetailPage />} />
      </Route>
      <Route path={'/detail/:post_idx'} element={<SearchDetailPage />} />
      <Route path={'/select/:post_idx'} element={<SelectContactPage />} />
      <Route path={'/payment/:post_idx'} element={<PaymentPage />} />
      <Route path={'/review'} element={<ReviewPage />} />
      {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
