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
