var topics = [];

$("button").on("click", function () {

    var x = $(this).data("data-search");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=kT8jiIRQ7hEFLmDDvL4QK8Of3q6Sffvm&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var showDiv = $("<div class='col-md-4'>");

            var rating = results[i].rating;
            var defaultAnimatedSrc = results[i].images.fixed_height.url;
            var staticSrc = results[i].images.fixed_height_still.url;
            var showImage = $("<img>");
            var p = $("<p>").text("Rating: " + rating);
    
            showImage.attr("src", staticSrc);
            showImage.addClass("displayedImg");
            showImage.attr("data-state", "still");
            showImage.attr("data-still", staticSrc);
            showImage.attr("data-animate", defaultAnimatedSrc);
            showDiv.append(p);
            showDiv.append(showImage);
            $("#gifArea").prepend(showDiv);
        }
    });
});
$("#addInput").on("click", function (event) {
    event.preventDefault();
    var newStuff = $("#searchInput").val().trim();
    topics.push(newStuff);
    console.log(topics);
    $("#searchInput").val('');
    displayButtons();
  });

  function displayButtons() {
    $("#myButtons").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $('<button class="btn btn-primary">');
      a.attr("id", "giff");
      a.attr("data-search", topics[i]);
      a.text(topics[i]);
      $("#myButtons").append(a);
    }
  }


  displayButtons();



