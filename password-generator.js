const generatePassword = require("generate-password");

// Function to generate random passwords
function generateRandomPassword() {
  const password = generatePassword.generate();
  console.log(password);
}

// Call the function
generateRandomPassword();
