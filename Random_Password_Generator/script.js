function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allChars = "";
  if (includeUpper) allChars += upper;
  if (includeLower) allChars += lower;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  if (!allChars) {
    document.getElementById("password").value = "Select at least one option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randIndex];
  }

  document.getElementById("password").value = password;
}

function resetAll() {
  document.getElementById("password").value = "";
}
