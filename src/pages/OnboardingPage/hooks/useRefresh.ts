import { PATH } from 'common/constants';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isRefreshed = localStorage.getItem('refreshed');

    if (isRefreshed) {
      navigate(`/${PATH.onBoarding}/${PATH.location}`);

      localStorage.removeItem('refreshed');
    }

    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    const unloadHandler = () => {
      localStorage.setItem('refreshed', 'true');
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);
    window.addEventListener('unload', unloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      window.removeEventListener('unload', unloadHandler);
    };
  }, []);
};
