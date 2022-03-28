// Assignment Code
var generateBtn = document.querySelector("#generate");

  // 1. Create variables to save user input from prompts passwordLength string (and it needs to be integer ultimately) specialCharacter boolean
// specialCharacters boolean
// 2. Create arrays for each type of character
  // specialCharacters, uppercase, lowercase, numeric
  var specialCharacters = ['!', '"', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '_', '=', '`', '~', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?', '/'];

  // numercCharacters array
  var numercCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
  // lowercaseCharacters array
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'];
  
  // uppercaseCharacters array
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  

  // 3. generatePassword function -- take user input, grab characters from array and generate password
  function generatePassword(){
 
  // 4. Use randomizer function to select characters from each array
    // alert, confirm, prompt
    var passwordLength = prompt("How many characters would you like for your password? (Limit: 8 - 128 characters)");
    var lowerCase = confirm ("Would you like to include lowercase characters?")
    var upperCase = confirm ("Would you like to include uppercase characters?")
    var numeric = confirm ("Would you like to include numeric characters?")
    var special = confirm ("Would you like to include special characters?")
    }
  
    // Use conditionals to validate inputs (password length, use enters no inputs)
    if (lowerCase){
      result = result.concat(numercCharacters);
    
    } 

    if (upperCase){
      result = result.concat(uppercaseCharacters);
    }

    if (numeric){
      result = result.concat(numercCharacters);
    }

    if (specialCharacters){
      result = result.concat(special);
    }

  // 5. Create an empty array that represents the final password
    var result = [];
    
  // 6. Join the character arrays together based on user input

  // 7. Randomize characters from the joined array

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  