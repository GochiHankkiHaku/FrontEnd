import { useLocation, useNavigate } from 'react-router-dom';
import { getNextPageUrl } from '../utils/pagesInformation';

export const usePage = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const goNextPage = () => {
    navigate(getNextPageUrl(location));
  };

  return { goNextPage };
};
