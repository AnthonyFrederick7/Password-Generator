let characterLength = 8;
let choiceArray = [];
const specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')', '_', '-','[',']','{','}'];
const lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    const correctPrompts = getPrompts();
    const passwordText = document.querySelector("#password");

    if (correctPrompts){
  let randomPassword = generatePassword();
  passwordText.value = randomPassword;
}
    else {
      passwordText.value = '';
    }
}

//Generated based off prompts
function generatePassword() {
  let password = '';
  for (var i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts () {
  choiceArray = [];

  characterLength = parseInt(prompt('How many characters do you want your password to be? (8 - 128 characters)'));

  if (isNaN(characterLength) || characterLength <  8 || characterLength > 128) {
    alert ('Character length has to be a number, 8-128 digits. Please type in numbers 8-128');
    return false;
  }

  if (confirm('Would you like lowercase letters in your password?')) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm('Would you like uppercase letters in your password?')) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm('Would you like special characaters in your password?')) {
    choiceArray = choiceArray.concat(specialCharArray);
  }
  
  if (confirm('Would you like numbers in your password?')) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
