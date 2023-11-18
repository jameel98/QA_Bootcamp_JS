let pizzaLocations = [
  { x: 6, y: 12 },
  { x: 3, y: 1 },
  { x: 9, y: 0 },
  { x: 4, y: 10 },
];

let homeLocation = { x: 4, y: 2 };

const getDistance = function (source, destination) {
  let len = destination.y - source.y;
  let wed = destination.x - source.x;

  return Math.sqrt(len * len + wed * wed);
};

const findClosest = function (points, point) {
  let shortestSp = Infinity; // Initialize to a large value
  let closestPizza = { x: 0, y: 0 };
  points.forEach((element) => {
    let space = getDistance(point, element);
    if (space < shortestSp) {
      shortestSp = space;
      closestPizza.x = element.x;
      closestPizza.y = element.y;
    }
  });
  console.log("x: " + closestPizza.x + " y: " + closestPizza.y);
};

findClosest(pizzaLocations, homeLocation); // should return {x: 3, y: 1}
