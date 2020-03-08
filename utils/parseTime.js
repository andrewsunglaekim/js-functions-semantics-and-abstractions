function parseTime(dateTimeString) {
  const date = luxon.DateTime.fromISO(dateTimeString);
  const amPM = date.hour > 12 ? 'pm' :'am';
  const hour = date.hour > 12 ? date.hour % 12 : date.hour;
  return `${date.day} ${date.monthShort} ${hour}:${date.minute} ${amPM}`
}
