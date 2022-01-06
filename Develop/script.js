// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

document.querySelector("#generateBtn").addEventListener("click", writePassword);  

function writePassword() {
  alert ("passwordText.value");
}

  



// ________________________________________
//click button = presened with a series  of prompts for pw criteria
//presented with pw criteria =  select password criteria 
// length = at least 8 characters and max of 128 characters 
// types = lower upper number special

// answering each prompt  = my inout should be validated  adn at least 1 character type should be selected 

// when all prompts answered = pw is generated that matches criteia 

// when pw is generated = pw is displayed in an alert or written to the page
