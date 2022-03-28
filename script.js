// Variables
var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];
var userInput = [];
var password = "";
var generateBtn = document.querySelector("#generate");

function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Character Length
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 7 || characterLength > 129) || Number.isInteger(characterLength) === false ) {
      characterLength = parseInt(prompt("Password Length?"));
  }


var upperCase = false
var lowerCase = false
var numbers = false
var special = false

while (!upperCase && !lowerCase && !numbers && !special) {
  upperCase = confirm("Include upperase letters?");
  lowerCase = confirm("Include lowercase letters?");
  numbers = confirm("Include numbers?");
  special = confirm("Include special characters?");
}

// Generate password
if (upperCase) {userInput.push(charString[0]);}
if (lowerCase) {userInput.push(charString[1])}
if (numbers) {userInput.push(charString[2])}
if (special) {userInput.push(charString[3])}
var password = "";

userInput = userInput.join("").split("");

// Write password to the #password input
for (var i = 0; i < characterLength; i++) {
    var index = (Math.floor(Math.random() * userInput.length));
    password = password + userInput[index]
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);