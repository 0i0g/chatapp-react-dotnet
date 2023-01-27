import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en)

export const randomDateInThePast = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 100));
  return date;
}

export const timeAgo = (date: Date) => {
  const timeAgo = new TimeAgo('en-US');
  return timeAgo.format(date);
}
