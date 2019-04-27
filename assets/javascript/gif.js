var topics = [];

$("button").on("click", function () {

    var x = $(this).data("searchInput");
    console.log(x);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=kT8jiIRQ7hEFLmDDvL4QK8Of3q6Sffvm&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gifImage);

            $("#gifArea").prepend(gifDiv);
        }
    });
});
function button() {


    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {


        var a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", topics[i]);

        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
    console.log(topics);
}


$("#addInput").on("click", function (event) {
    event.preventDefault();

    var newStuff = $("#searchInput").val().trim();
    newStuff.push(topics);

    //makes button from array
    button();
});