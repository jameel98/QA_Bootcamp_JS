const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
  let jumbledArr = new Set();
  let jumbledArrSize = arr1.length + arr2.length;

  while (jumbledArr.size !== jumbledArrSize) {
    let item1 = pickRandomItemInArray(arr1);
    if (item1 !== undefined && !jumbledArr.has(item1)) {
      jumbledArr.add(item1);
      arr1 = removeItemFromArray(arr1, item1);
    }

    let item2 = pickRandomItemInArray(arr2);
    if (item2 !== undefined && !jumbledArr.has(item2)) {
      jumbledArr.add(item2);
      arr2 = removeItemFromArray(arr2, item2);
    }
  }

  return Array.from(jumbledArr);
};

const pickRandomItemInArray = function (arr) {
  if (arr.length !== 0) return arr[Math.floor(Math.random() * arr.length)];
};

const removeItemFromArray = function (array, value) {
  return array.filter((item) => item !== value);
};

console.log(jumble(colors, foods));
