// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables for accepted characters
var accSpecChar = ["!" ,"#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\|",  "]", "^",  "_", "{ ", "|", "}", "~"];
var accLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var accUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var accNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var password = [];
var pwItems = [];
let userSpec 
let userLower
let userUpper
let userNumber
let accLength 


// Write password to the #password input
function writePassword() {
    userLength();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


var userLength = function () {
    accLength = parseInt(prompt('How many characters long would you like your password to be?', 8));
    if (accLength < 8) {
        alert("Please choose more characters.");
        userLength();
    }
    else if (accLength > 128) {
        alert("Please choose less characters.");
        userLength();
    }
    else {
        followUp();
    }
    return;
}  


// Ask user if they want to include different character types
var followUp = function () {
    userSpec = confirm("Would you like to include special character?");
    userLower = confirm("Would you like to include lowercase letters?");
    userUpper = confirm("Would you like to include uppercase letters?");
    userNumber = confirm("Would you like to include numbers?");
    if (userSpec) {
        pwItems = pwItems.concat(accSpecChar);
    }
    if (userLower) {
        pwItems = pwItems.concat(accLowerCase);
    }
    if (userUpper) {
        pwItems = pwItems.concat(accUpperCase);
    }
    if (userNumber) {
        pwItems = pwItems.concat(accNumbers);
    }
}

// Utilize Math.random to select random characters
var generatePassword = function () {
    for (let i = 0; i<accLength; i++) {
        var randomIndex = Math.floor(Math.random()*pwItems.length)
        var randomChar = pwItems[randomIndex]; 
        password.push(randomChar);
    }
    return password.join("");
}

// Add Event Listener to generate button
generateBtn.addEventListener("click", writePassword);

