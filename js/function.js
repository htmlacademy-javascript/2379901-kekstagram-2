const checkingLengthString = (string, lenght) => string.length <= lenght;


const definitionPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = normalizeString.split('').reverse().join('');
  return reverseString === normalizeString;
};

const extractingNumbers = (string) => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length-1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};
