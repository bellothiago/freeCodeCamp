function maskEmail(email) {
  let atPosition = email.indexOf("@");
  let slicedEmail = email.slice(1, atPosition - 1);
  let maskedEmail = email.replace(slicedEmail, "*".repeat(slicedEmail.length));
  return maskedEmail;
}

let email = "charliechaplin@email.com";
console.log(maskEmail(email));