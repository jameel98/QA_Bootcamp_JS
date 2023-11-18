const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20,
};

const getLetter = function () {
  let c = Math.random() % 10;
  switch (c) {
    case 7:
      return rawDist.B;
      break;
    case 8:
      return rawDist.C;
      break;
    case (9, 10):
      return rawDist.D;
      break;
    case (1, 2, 3, 4, 5, 6):
      return rawDist.A;
      break;
  }
};
