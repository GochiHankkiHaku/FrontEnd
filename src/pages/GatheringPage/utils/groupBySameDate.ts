import { Matchings } from './gatheringPage.type';

export const groupBySameDate = (recruitmentCompletedMatchings: Matchings[]) => {
  const groupedData = [];
  let currentGroup: Matchings[] = [];

  recruitmentCompletedMatchings.forEach((recruitmentCompletedMatching) => {
    if (
      currentGroup.length === 0 ||
      currentGroup[0].postDate === recruitmentCompletedMatching.postDate
    ) {
      currentGroup.push(recruitmentCompletedMatching);
    } else {
      groupedData.push(currentGroup);
      currentGroup = [recruitmentCompletedMatching];
    }
  });

  if (currentGroup.length > 0) {
    groupedData.push(currentGroup);
  }

  return groupedData;
};
