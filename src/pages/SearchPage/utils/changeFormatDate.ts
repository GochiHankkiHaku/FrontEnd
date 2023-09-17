export const changeFormatDate = (inputDate: string) => {
  const dateParts = inputDate.split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const formattedDate = `${year}. ${month.padStart(2, '0')}. ${day.padStart(2, '0')}`;

  return formattedDate;
};
