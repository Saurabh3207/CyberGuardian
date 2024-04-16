const crypto = require('crypto');
const fs = require('fs');

// Function to generate a random string (JWT private key)
const generateRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // Convert to hexadecimal format
    .slice(0, length); // Trim to desired length
};

// Generate a strong JWT private key
const jwtPrivateKey = generateRandomString(64);

// Read existing content in .env file
let existingContent = '';
if (fs.existsSync('.env')) {
  existingContent = fs.readFileSync('.env', 'utf-8');
}

// Append the new JWT private key to the existing content
const updatedContent = `${existingContent.trim()}\nJWT_PRIVATE_KEY=${jwtPrivateKey}\n`;

// Write the updated content back to .env file
fs.writeFileSync('.env', updatedContent);

console.log('JWT private key generated and added to .env file.');
