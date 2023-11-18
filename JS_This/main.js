const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      // alert works in browser only so i used console instead
      console.log("Im no longer hungry!");
    }
  },
};
console.log("exercise 1");
person.feed(); //should alert "I'm no longer hungry"

//ex 2
const pump = function (amount) {
  this.liters += amount;
  console.log("You put " + this.amount + " liters in " + this.name);
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};
console.log("exercise 2");

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);

// ex 3
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,
  fly: function (fuel) {
    if (fuel < 2) {
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};
console.log("exercise 3");

console.log(
  "The plane should not be able to fly (yet): " + airplane.fly(airplane.fuel)
);

pumpFuel(airplane);
console.log(
  "The plane should STILL not be able to fly: " + airplane.fly(airplane.fuel)
);

pumpFuel(airplane);
console.log("Take off! " + airplane.fly(airplane.fuel));

// ex 4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (cnt) {
    this.coinCount -= cnt;
  },
};

console.log("exercise 4");

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

//ex 5
//Aside from the usual, this code also has 3 syntax errors. Fix everything:

const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that.",
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

// ex 6

const coffeeShop = {
  beans: 40,
  beanCost: 1,
  money: 100,
  buyBeans: function (numBeans) {
    if (this.money >= numBeans * this.beanCost) {
      this.beans += numBeans;
      this.money -= numBeans * this.beanCost;
    } else {
      console.log("Sorry, we can't buy more beans");
    }
  },
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 },
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]) {
      if (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        return true;
      } else {
        console.log("Sorry, we're all out of beans");
        return false;
      }
    } else {
      console.log("Sorry, we don’t make " + drinkType);
      return false;
    }
  },
  buyDrink: function (drinkType) {
    if (this.makeDrink(drinkType)) {
      this.money += this.drinkRequirements[drinkType].price;
    }
  },
};
console.log("number of beans: " + coffeeShop.beans);
console.log("money : " + coffeeShop.money);

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

console.log("number of beans: " + coffeeShop.beans);
console.log("money : " + coffeeShop.money);

coffeeShop.buyBeans(20);

console.log("number of beans: " + coffeeShop.beans);
console.log("money : " + coffeeShop.money);

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("filtered");

console.log("number of beans: " + coffeeShop.beans);
console.log("money : " + coffeeShop.money);
