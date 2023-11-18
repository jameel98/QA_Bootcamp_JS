function ajaxRequest(apiUrl) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "GET",
      url: apiUrl,
      dataType: "json",
      success: function (data) {
        resolve(data);
      },
      error: function (xhr, text, error) {
        reject(text);
      },
    });
  });
}

function getRandomWord() {
  const url = "http://random-word-api.herokuapp.com/home";
  return ajaxRequest(url);
}

function searchForBook(word) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`;
  return ajaxRequest(url);
}

function getRandomGif(word) {
  const giphyAPIKey = "u9inq89xxYIJXWdamka5kFuiUYPFiKjY";
  const giphyAPI = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${word}`;
  return ajaxRequest(giphyAPI);
}

function displayWordAndGif(word, gif) {
  const randomWordElement = document.getElementById("randomWord");
  randomWordElement.textContent = word[0];

  const gifFrame = document.getElementById("gifFrame");
  gifFrame.src = gif.data.embed_url;
}

function displayWordAndGif(word, gif) {
  const randomWordElement = document.getElementById("randomWord");
  randomWordElement.textContent = word[0];

  const gifFrame = document.getElementById("gifFrame");
  gifFrame.src = gif.data.embed_url;
}

document.getElementById("generate").addEventListener("click", () => {
  Promise.all([getRandomWord(), getRandomGif()])
    .then(([randomWord, gif]) => {
      displayWordAndGif(randomWord, gif);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function displayBook(book) {
  const resultDev = document.getElementById("result");
  resultDev.innerHTML = `
    <p>title: ${book.items[0].volumeInfo.title}</p>
    <p>authors: ${book.items[0].volumeInfo.authors.join(", ")}</p>
    <p>description: ${book.items[0].volumeInfo.description}</p>
    `;
}

document.getElementById("generate").addEventListener("click", () => {
  getRandomWord()
    .then((word) => {
      return searchForBook(word);
    })
    .then((book) => {
      displayBook(book);
    })
    .catch((error) => console.error(`ERROR: ${error}`));
});
