export const groupedDate = (data: any) => {
  const groupedData: any = [];
  let currentGroup: any = [];

  data.forEach((item: any) => {
    if (currentGroup.length === 0 || currentGroup[0].gathering_date === item.gathering_date) {
      currentGroup.push(item);
    } else {
      groupedData.push(currentGroup);
      currentGroup = [item];
    }
  });

  if (currentGroup.length > 0) {
    groupedData.push(currentGroup);
  }

  return groupedData;
};
