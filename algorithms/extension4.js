const secretDecrypt = function (encryptedMessage, secret) {
  let decryptedStr = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    decryptedStr += String.fromCharCode(
      encryptedMessage.charCodeAt(i) -
        secret.charCodeAt(i % secret.length) -
        "a".charCodeAt(0)
    );
  }
  return decryptedStr;
};
