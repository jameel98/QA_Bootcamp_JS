//ex 3

const firstNonRepeating = function (str) {
  const charCount = new Map();

  // count each character
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // find the first non-repeating character
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }
};

console.log(findNonRepeating("aabbccdee"));
