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
        <Route path={`${PATH.main}`} element={<MainPage />} />
        <Route path={`${PATH.map}`} element={<SearchPage />} />
        <Route path={`${PATH.gathering}`} element={<GatheringPage />} />
        <Route path={`${PATH.gathering}/:post_idx`} element={<GatheringDetailPage />} />
      </Route>
      <Route path={`${PATH.detail}/:post_idx`} element={<SearchDetailPage />} />
      <Route path={`${PATH.select}/:post_idx`} element={<SelectContactPage />} />
      <Route path={`${PATH.payment}/:post_idx`} element={<PaymentPage />} />
      <Route path={`/${PATH.review}`} element={<ReviewPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
