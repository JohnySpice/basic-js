const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse === false ? false : true;
  }

  encrypt(message, key, n = 0) {
    let crypt = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      key += key[i];
      if (!alphabet.includes(message[i])) {
        crypt += message[i];
        continue;
      }
      else {
        let messageCode = alphabet.indexOf(message[i]);
        let keyCode = alphabet.indexOf(key[j]);
        let resultCode = (alphabet.length * n + messageCode + keyCode - 2 * n * keyCode) % alphabet.length;
        crypt += alphabet[resultCode]
      }
      j++;
    }
    return !this.reverse === false ? crypt : crypt.split("").reverse().join("");
  }
  decrypt(message, key) {
    return this.encrypt(message, key, 1);
  }
}

module.exports = VigenereCipheringMachine;
