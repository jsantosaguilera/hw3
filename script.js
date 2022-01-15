// Assignment Code

let generateBtn = document.querySelector('#generate');


function generatePassword(){
  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  let uppercaseLetters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let numbers = '1234567890';
  let specialCharacters = '~!@#$%^&*()_+{}:?><;.,';
  let availableCharacters = '';
  let password = '';

  // Determine the desired length of the password.
  let passwordLength = prompt('Please enter a password length between 8 and 128.')

  // Verify the password length entered meets the length requirements
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
  }

  // If password length provided is less than the min or more than the max
  // will return and error and require the user to start again.
  // Password length criteria must be met before user can select desired password character content.
  else {
    alert('Error. Password length must be a number between 8 and 128.')
    return '';
  }

  // Determine if user wants lower case letters in the password.
  let querySmallLetters = confirm('Do you want to use lower case (a-z) letters in your password?')

  // Determine if user wants upper case letters in the password.
  let queryCapitalLetters = confirm('Do you want to use upper case (A-Z) letters in your password?')

  // Determine if user wants numbers in the password.
  let queryNumbers = confirm('Do you want to use numbers (0-9) in your password?')

  // Determine if user wants special characters in the password.
  let querySpecialCharacters = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')

  // Validate at least one criteria was selected
  // Execute random character selection based on password length
  // If lower case letters are wanted, randomly select a letter from the lowerCaseLetters array.
  if (querySmallLetters) {
    availableCharacters += lowerCaseLetters
  }

  // If upper case letters are wanted, randomly select a letter from the uppercaseLetters array.
  if (queryCapitalLetters) {
    availableCharacters += uppercaseLetters
  }

  // If numbers are wanted, randomly select a number from the numbers array.
  if (queryNumbers) {
    availableCharacters += numbers
  }

  // If special characters are wanted, randomly select a character from the specialCharacters array.
  if (querySpecialCharacters) {
    availableCharacters += specialCharacters
  }
  // Will stop the process and return an alert if there are no character types selected.
  if (
    !querySmallLetters && !queryCapitalLetters && !queryNumbers && !querySpecialCharacters
  ) {
    return alert('Please select at least one criteria!');
    
  }

  for (let i = 0; i < passwordLength; i++) {
    // Selects the characters that will be in the password randomly from
    // the characters that were pulled into availChars. Will loop through
    // selecting characters at random until there are enough characters to
    // fullfil the password length requirement
    password += availableCharacters[Math.floor(Math.random () * availableCharacters.length)];
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);