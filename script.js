// Assignment code here
function generatePassword() {
  var numbers= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var generatedCharacters = [];

  // Collects USER inputs
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");

  //Ensures password meets 8-128 length parameters
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";}
    else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");}
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");}

  //USER chooses types of charachters wanted
  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    alert("Your password will have lowercase characters.");}
  else {
    alert("Your password will NOT have lowercase characters.");}

  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");}
  else {
    alert("Your password will NOT have uppercase characters.");}

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");}
  else {
    alert("Your password will NOT have numbers.");}

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");}
  else {
    alert("Your password will NOT have special characters.");}

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // Collecting the chosen charachters together
  if (hasLowercase) {
    generatedCharacters = generatedCharacters.concat(lowercase);}
  if (hasUppercase) {
    generatedCharacters = generatedCharacters.concat(uppercase);}
  if (hasNumbers) {
    generatedCharacters = generatedCharacters.concat(numbers);}
  if (hasSpecial) {
    generatedCharacters = generatedCharacters.concat(special);}

  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * generatedCharacters.length)];
  // Randomising the characters
    finalPassword = finalPassword + generatedCharacters[rng];}
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);