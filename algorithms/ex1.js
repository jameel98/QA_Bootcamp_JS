const printStarSeries = function (num, count) {
  let result = "";
  let i = 0;
  while (i < count) {
    for (let i = 1; i <= num; i++) {
      for (let j = 0; j < i; j++) {
        result += "*";
      }
      result += "\n";
    }
    for (let i = 1; i <= num - 1; i++) {
      for (let j = num - 1; j > i; j--) {
        result += "*";
      }
      result += "\n";
    }
    i++;
  }
  return result;
};

console.log(printStarSeries(5, 3));
