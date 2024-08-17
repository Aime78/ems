export const getTime = (unformattedDate?: Date) => {
  if (!unformattedDate) return '';
  const date = new Date(unformattedDate);
  const day = formatWithLeadingZero(date.getDate());
  const month = formatWithLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = formatWithLeadingZero(date.getHours());
  const minutes = formatWithLeadingZero(date.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const formatDate = (unformattedDate?: Date | string) => {
  if (!unformattedDate) return '';
  const date = new Date(unformattedDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

function formatWithLeadingZero(value: number) {
  return value < 10 ? `0${value}` : value;
}
