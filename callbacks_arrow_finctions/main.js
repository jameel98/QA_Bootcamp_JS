const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};
const pushPull = function (callback) {
  callback();
};
pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"

// ex2

const getTime = function (callback) {
  callback();
};

const returnTime = function (time) {
  time = new Date();
  console.log("The current time is: " + time);
};

getTime(returnTime);

// ex 3

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const alertData = function (data) {
  alert(data);
};

const logData = function (data) {
  console.log(data);
};

displayData(alert, logData, "I like to party");

// ex4
const sum = (number1, number2, number3) => number1 + number2 + number3;

console.log(sum(1, 2, 3));

//ex 5
const capitalize = (word) => {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  console.log(word);
};

capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia

// ex6

const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) => "It's " + determineWeather(temp);

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"

// ex7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

explode(shineLight, makeSound, "BOOM");
