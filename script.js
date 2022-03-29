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
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // 3. Create an empty array that represents the final password
    var resultArray = [];
    var emptyArray = [];

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // 4. generatePassword function -- take user input, grab characters from array and generate password
    // 5. Use randomizer function to select characters from each array
    // alert, confirm, prompt
    // Use conditionals to validate inputs (password length, use enters no inputs)
    function generatePassword(){
      
      var passwordLength = prompt("How many characters would you like for your password? (Limit: 8 - 128 characters)");
          if (passwordLength < 8){
      alert("Must enter 8 characters or more!");
      return generatePassword();
    }
          if (passwordLength > 120){
      alert("Max characters reached!");
      return generatePassword();
    }
      var lowerCase = confirm ("Would you like to include lowercase characters?")
          if (lowerCase){
      resultArray = resultArray.concat(lowercaseCharacters);
    }
      var upperCase = confirm ("Would you like to include uppercase characters?")
          if (upperCase){
      resultArray = resultArray.concat(uppercaseCharacters);
    }
      var numeric = confirm ("Would you like to include numeric characters?")
          if (numeric){
      resultArray = resultArray.concat(numercCharacters);
    }
      var special = confirm ("Would you like to include special characters?")
          if (specialCharacters){
      resultArray = resultArray.concat(special);
    }

    // 6. Join the character arrays together based on user input
    // 7. Randomize characters from the joined array
      for (var i = 0; i < passwordLength; i++) {
      emptyArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
      }
      return emptyArray.join("") ;
    }