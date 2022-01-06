

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code

var pwLength = prompt('How many characters long would you like your password to be?')

for (var i = pwLength; i <=8 || i>= 128; pwLength = prompt ('How many characters long would you like your password to be?')) {
  console.log(i);

  if (pwLength < 8) {
    alert("Please choose more characters.");  
  }
  else if (pwLength > 128) {
    alert("Please choose less characters.")
  }
  else if (pwLength >= 8 && pwLength<=128) {
    alert("Well done.");
    return
  }
}

var specChar = confirm("Would you like to include special characters?");
var lowerCase = confirm("Would you like to include lowercase letters?");
var upperCase = confirm("would you like to include uppercase letters?");
var incNumbers = confirm("Would you like to include numbers?");

while (!specChar && !lowerCase && !upperCase && !incNumbers) {
  alert ("Please include a minimum of one character type.")
  specChar = confirm("Would you like to include special characters?");
  lowerCase = confirm("Would you like to include lowercase letters?");
  upperCase = confirm("would you like to include uppercase letters?");
  incNumbers = confirm("Would you like to include numbers?");
}



var accSpecChar = [" ", "!", "" ,"#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\|",  "]", "^",  "_", "{ ", "|", "}", "~"];
var accLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var accUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var accNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var pwItems = [ ]

if  (specChar) {
  pwItems = pwItems.concat(accSpecChar);
}

if (lowerCase) {
  pwItems = pwItems.concat(accLowerCase);
}

if (upperCase) {
  pwItems = pwItems.concat(accUpperCase);
}

if (incNumbers) {
  pwItems = pwItems.concat(accNumbers);
}

console.log(pwItems)


// function writePassword() {
//  var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var length = document.querySelector("length");
//   var upper = document.querySelector("upercase");
//   var lower = document.querySelector("lowercase");
//  var withNumbers = document.querySelector("numbers");
//  var withSpec = document.querySelector("characters");
//  var generateBtn = document.querySelector("#generate");
//   passwordText.value = password;
// }


// Add event listener to generate button

generateBtn.addEventListener("click",  (writePassword) =>  {
  let characters = alpha;
  withNumbers.checked ? (characters +=numbers) : "";
  withSymbols.checked ? (characters +=symbols) : "";
  passwordText.value = generatePassword(length.value, characters);
}






}
  for (var i=0; i < length; i++) {
    password +=

  }
}

// function generatePassword() {


}



// ________________________________________
//click button = presened with a series  of prompts for pw criteria
//presented with pw criteria =  select password criteria 
// length = at least 8 characters and max of 128 characters 
// types = lower upper number special

// answering each prompt  = my inout should be validated  adn at least 1 character type should be selected 

// when all prompts answered = pw is generated that matches criteia 

// when pw is generated = pw is displayed in an alert or written to the page
