const StringFormatter = function () {
  const capitalizeFirst = function (word) {
    let firstLetter = word.charAt(0).toUpperCase();
    return firstLetter + word.slice(1);
  };

  const toSkewerCase = (word) => word.replace(" ", "-");

  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box

// ex2
const Bank = function () {
  let _balance = 500;
  const depositCash = (cash) => (_balance += cash);
  const checkBalance = () => console.log(_balance);

  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950

// ex3

const SongsManager = function () {
  const _prefix = "https://www.youtube.com/watch?v=";
  let _songs = {};

  const addSong = (songName, songUrl) =>
    (_songs[songName] = songUrl.slice(songUrl.indexOf("=") + 1));
  const getSong = (songName) => prefix + _songs[songName];

  return {
    addSong: addSong,
    getSong: getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
