//we can use `title` instead of `isbn` - that's allowed according to this application's programming interface!
$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
  function (result) {
    console.log(result.items[0].volumeInfo.description); //prints A lot of description Text
  }
);
