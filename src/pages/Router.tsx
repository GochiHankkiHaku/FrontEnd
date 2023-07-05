import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import HomePage from './HomePage/HomePage';

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
