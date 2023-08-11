import { PATH } from 'common/constants';

const pagesPerStep = [
  { url: '/', name: '돌아가기' },
  {
    url: `/${PATH.onBoarding}/${PATH.location}`,
    name: '장소 선택',
  },
  {
    url: `/${PATH.onBoarding}/${PATH.schedule}`,
    name: '식사 일정',
  },
  {
    url: `/${PATH.onBoarding}/${PATH.memberCount}`,
    name: '인원수',
  },
  {
    url: `/${PATH.onBoarding}/${PATH.cook}`,
    name: '요리',
  },
  {
    url: `/${PATH.onBoarding}/${PATH.cost}`,
    name: '금액',
  },
  {
    url: `/${PATH.onBoarding}/${PATH.contact}`,
    name: '연락처',
  },
];

export const getCurrentPageStep = (currentLocation: string) =>
  pagesPerStep.findIndex(({ url }) => url === currentLocation);

export const getPreviousPage = (currentLocation: string) => {
  const nextPageStep = getCurrentPageStep(currentLocation) - 1;
  return pagesPerStep[nextPageStep];
};

export const getNextPageUrl = (currentLocation: string) => {
  const nextPageStep = getCurrentPageStep(currentLocation) + 1;
  return pagesPerStep[nextPageStep].url;
};
