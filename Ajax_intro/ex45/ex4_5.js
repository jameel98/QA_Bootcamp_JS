const apiKey = "u9inq89xxYIJXWdamka5kFuiUYPFiKjY";

function displayGIF(query) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`;

  $.ajax({
    method: "GET",
    url: apiUrl,
    success: function (data) {
      if (data.data.length > 0) {
        const gifUrl = data.data[0].embed_url;
        $("#gif-iframe").attr("src", gifUrl);
      } else {
        $("#gif-container").html("No GIFs found for your query.");
      }
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}

$("#search-button").on("click", function () {
  const query = $("#search-input").val();
  displayGIF(query);
});

$(document).ready(function () {
  displayGIF("cat");
});

$.ajax({
  method: "GET",
  url: "example.com/api/v1/etc",
  success: function (data) {
    console.log(data);
  },
  error: function (xhr, text, error) {
    console.log(text);
  },
});
