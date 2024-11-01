const checkingLengthString = (string, lenght) => string.length <= lenght;


const definitionPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = normalizeString.split('').reverse().join('');
  return reverseString === normalizeString;
};

const extractingNumbers = (string) => {
  let result = '';

  string = string.toString();

  return result === '' ? NaN : Number(result);
};


const parseTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number);

  return hours * 60 + minutes;
}

const isMeetingWithinWorkHours = (workStart, workEnd, meetingStart, meetingDuration) => {

  //Переводим все времена в минуты
  const workStartMinutes = parseTime(workStart);
  const workEndMinutes = parseTime(workEnd);
  const meetingStartMinutes = parseTime(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  //Проверяем, что встреча находится в рамках рабочего времени
  return workStartMinutes <= meetingStartMinutes && meetingEndMinutes <= workEndMinutes;
}
