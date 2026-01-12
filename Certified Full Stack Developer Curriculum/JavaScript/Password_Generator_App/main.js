function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const randomPassword = [];
  for (let i = 0; i < length; i++) {
    let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    randomPassword.push(randomCharacter);
  }
  return randomPassword.join("");
}

const password = generatePassword(32);
console.log(`Generated password: ${password}`);