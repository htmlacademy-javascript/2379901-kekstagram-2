function checkingLengthString(string, length) {
  if (string.length <= length) {
    return true;
  }
  else {
    return false;
  }
}


function definitionPalindrome(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return string === reversed ? 'Палиндром' : 'Не палиндром';
}
