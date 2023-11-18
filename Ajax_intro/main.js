$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
    function (result) {
      console.log("GET request response:");
      console.log(result);
    }
  ).fail(function (error) {
    console.error("GET request failed:", error);
  });
});
