//create a function to search the giphy api

//create the javascript to add what you search to an array

// the array should create a button 

//the button should link to the Giphy to pull 10 gifs

//if you click the gif is should start and stop the gif

var topics = ["falling", "slipping", "drunk", "dog", "cat"];
var title;
var queryURL;

$(document).ready(function () {

  function makeButtons() {
    $("#topic_list").empty();
    for (i = 0; i < topics.length; i++) {
      var buttonsText = $("<button>").text(topics[i]);
      var topicList = $("#topic_list");
      buttonsText.attr("class", "gifbutton");
      topicList.append(buttonsText);
    };
  }

  $("#submitbttn").on("click", function (event) {
    event.preventDefault();
    console.log(event);
    var topicInput = $("#topic-input").val();
    console.log(topicInput);
    topics.push(topicInput);
    console.log(topics);
    $("#topic_list").empty();
    for (i = 0; i < topics.length; i++) {
      var buttonsText = $("<button>").text(topics[i]);
      var topicList = $("#topic_list");
      buttonsText.attr("class", "gifbutton");
      topicList.append(buttonsText);
    };
  });

  $(document).on("click", ".gifbutton", function (event) {
    event.preventDefault();
    console.log("I clicked on", event);
    var topic = event.target.innerText;
    console.log(topic);
    queryURL = "https://api.giphy.com/v1/gifs/search?q=+funny+" +
      topic + "&api_key=Bde5bZPlP2hXSAV67Sy9YUuUg0nYnOxe&limit=10";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {
      $("#gif").empty();
      for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].images);
        var gifDisplay = $("#gif")
        var gifURL = response.data[i].images.original.url
        var gifImage = $("<img>").attr("src", gifURL);
        var rating = $("<p>").text("rating: " + response.data[i].rating);
        console.log(response);
        gifImage.attr("src", response.data[i].images.fixed_height_small_still.url);
        gifImage.attr("data-still", response.data[i].images.fixed_height_small_still.url);
        gifImage.attr("data-animate", response.data[i].images.fixed_height_small.url);
        gifImage.attr("data-state", "still");
        gifImage.addClass("image");
        gifDisplay.append(rating);
        gifDisplay.append(gifImage);
      }
    });
  })
  makeButtons();
  $(document).on("click", ".image", function () {
    var state = $(this).attr("data-state");
    if (state == "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
    }
  });
});

// function to get the gif from the giphy api
//   $("button").on("click", function(event){
//     $("#gif").empty()
//     console.log(event);
//     var clicked = event.this.innerText
//     if(clicked){
//       queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       topic + "funny" + "&api_key=Bde5bZPlP2hXSAV67Sy9YUuUg0nYnOxe&limit=10";
//       ajaxCall()
//     }
//   })

// });

// function addItem(){
//   $('#topic-list').on('click',function(event){
//       event.preventDefault();
//       var item = $('#topic-input').val().trim();
//       console.log(item)
//       topics.push(item);
//       buttonBuild()
//       retrieveGif()
//   })
// }

// $.ajax({
// url: queryURL,
// method: "GET"
// })

// // build the gifs






// //start and stop gif


// 
