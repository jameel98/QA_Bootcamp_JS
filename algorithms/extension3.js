const secretEncrypt = function (str, encryption) {
  let encryptedStr = "";

  for (let i = 0; i < str.length; i++) {
    encryptedStr += String.fromCharCode(
      str.charCodeAt(i) +
        encryption.charCodeAt(i % encryption.length) -
        "a".charCodeAt(0)
    );
  }
  return encryptedStr;
};

console.log(secretEncrypt("elephant", "cat"));
