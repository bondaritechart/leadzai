export const getTime = (timestamp: number) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60;
  const milliseconds = (timestamp + timezoneOffset) * 1000;
  const date = new Date(milliseconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return [
    addZero(hours),
    addZero(minutes),
    addZero(seconds)
  ].join(':');

}

function addZero(number: number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
