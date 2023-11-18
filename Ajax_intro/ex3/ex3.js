function fetch(type, input) {
  if (type === "title") {
    input = input.split(" ").join("%");
  }
  url = `https://www.googleapis.com/books/v1/volumes?q=${type}:${input}`;
  $.ajax({
    method: "GET",
    url: url,
    success: function (data) {
      if (data.totalItems == 0)
        alert("Error: Unable to fetch book information.");
      else {
        console.log(data);
        $("#bookAuthor").val(data.items[0].volumeInfo.authors);
        $("#bookTitle").text(data.items[0].volumeInfo.title);
        $("#bookDescription").text(data.items[0].volumeInfo.description);

        data.items.forEach((element) => {
          const volume = element.volumeInfo;
          const title = volume.title;
          const authors = volume.authors
            ? volume.authors.join(", ")
            : "no author";
          const isbnObject = (volume.industryIdentifiers || []).find(
            (identifier) => identifier.type === "ISBN_13"
          );
          const isbn = isbnObject
            ? isbnObject.identifier
            : "No ISBN information";

          console.log(`title: ${title}`);
          console.log(`authors: ${authors}`);
          console.log(`ISBN: ${isbn}`);
          console.log("---------------");
        });
      }
    },
    error: function () {
      alert("Error: Unable to fetch book information.");
    },
  });
}

$(document).ready(function () {
  $("#fetchButton").click(function () {
    fetch($("#fetchInput").val());
  });
});

// You can now call the fetch function with different ISBNs to get book information
fetch("title", "How to Win Friends and Influence People"); // Name of the Wind
// fetch("9782806269171"); // The Little Prince: Book Analysis
// fetch("1440633908");     // Of Mice and Men by John Steinbeck
// fetch("9781945048470"); // The Alchemist by Paulo Coelho
// fetch("9780307417138"); // Hitchhiker’s Guide to the Galaxy
