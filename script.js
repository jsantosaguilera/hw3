// Assignment Code

let generateBtn = document.querySelector('#generate');


function generatePassword(){
  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  let uppercaseLetters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let numbers = '1234567890';
  let specialCharacters = '~!@#$%^&*()_+{}:?><;.,';
  let availableCharacters = '';
  let password = '';

  
  let passwordLength = prompt('Please enter a password length between 8 and 128.')

  if (passwordLength >= 8 && passwordLength <= 128) {
  }
  else {
    alert('Error! Password length must be a number between 8 and 128.')
    return '';
  }

  
  let querySmallLetters = confirm('Do you want to use lower case (a-z) letters in your password?')

  let queryCapitalLetters = confirm('Do you want to use upper case (A-Z) letters in your password?')

  let queryNumbers = confirm('Do you want to use numbers (0-9) in your password?')

  let querySpecialCharacters = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')

  if (querySmallLetters) {
    availableCharacters += lowerCaseLetters
  }

  if (queryCapitalLetters) {
    availableCharacters += uppercaseLetters
  }

  if (queryNumbers) {
    availableCharacters += numbers
  }

  if (querySpecialCharacters) {
    availableCharacters += specialCharacters
  }

  if (
    !querySmallLetters && !queryCapitalLetters && !queryNumbers && !querySpecialCharacters
  ) {
    return alert('Please select at least one criteria!');
    
  }

  for (let i = 0; i < passwordLength; i++) {
    password += availableCharacters[Math.floor(Math.random () * availableCharacters.length)];
  }
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);