// 1
const isEven = function (number) {
  return number % 2 === 0; // Return true if even, false if not.
};

// 2
const arrIsEven = function (arr) {
  arr.forEach((element) => {
    if (isEven(element)) {
      console.log(`${element} is even.`);
    } else {
      console.log(`${element} is not even.`);
    }
  });
};

//3
const checkExists = function (arr, number) {
  arr.forEach((element) => {
    return element === number;
  });
};

checkExists([1, 2, 3], 2);
// 4
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

// 5

const increaseByNameLength = function (money, name) {
  return money * name.length;
};
const makeRegal = function (name) {
  return "His Royal Highness," + name;
};

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
