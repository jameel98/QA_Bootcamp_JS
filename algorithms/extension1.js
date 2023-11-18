const printInLoop = function (words) {
  while (true) {
    words.forEach((element) => {
      console.log(element);
    });
  }
};

printInLoop(["down", "the", "rabbit", "hole"]);
