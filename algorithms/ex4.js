// ex 4
const encrypt = function (str) {
  let encryptedStr = "";
  for (let i = 0; i < str.length; i++) {
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return encryptedStr;
};

console.log(encrypt("cat"));
