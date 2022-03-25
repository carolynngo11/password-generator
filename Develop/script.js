// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  return "password";

}

// 1. Create variables to save user input from prompts passwordLength string (and it needs to be integer ultimately) specialCharacter boolean
// specialCharacters boolean
var specialCharacters = ['!', '"', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '_', '=', '`', '~', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?', '/'];

// numercCharacters boolean
var numercCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// lowercaseCharacters boolean
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'];

// uppercaseCharacters boolean
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // alert, confirm, prompt

  // Use conditionals to validate inputs (password length, use enters no inputs)



// 2. Create arrays for each type of character
  // specialCharacters, uppercase, lowercase, numeric
  // 4. Use randomizer function to select characters from each array
// 3. generatePasswork function -- take user input, grab characters from array and generate password

// 5. Create an empty array that represents the final password

// 6. Join the character arrays together based on user input

// 7. Randomize characters from the joined array

// 8. Transforming the array into a string