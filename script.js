var settings = {
  url: "https://api.themotivate365.com/stoic-quote",
  method: "GET",
  timeout: 0,
};
var dataObj;
var arrayData = [];
// grabs the data
function getData() {
  $.ajax(settings).done(function (response) {
    dataObj = response.data;
    var $post = $('<div class ="post"></div>');
    // creates spots for data to be shown and adds it to the DOM
    var $quote = $("<div ></div>");

    $($quote).addClass("quote");
    $quote.text(dataObj.quote);

    // var $author = $('<div class = "author"></div>');
    var $author = $('<div class = "author"></div>');

    $author.text("-" + dataObj.author);
    $post.append($quote);
    $post.append($author);
    $(".feed").append($post);
  });
}

// adds click events to the buttons

$("#start").click(function () {
  console.log("clicked");
  getData();
});

$("#good").click(function () {
  console.log("clicked");
  var text = $(".post").children().last().text();
  var heart = "❤️" === text[text.length - 1];
  $(".post")
    .children()
    .last()
    .text($(".post").children().last().text() + "❤️");
  //$(".feed").children().last().remove();
  //   $('.fav').append($('.post'))
});
$("#bad").click(function () {
  $(".feed").children().last().remove();
});

/// make your own quote
//create an html forum
//create an input
var $parent = $('<div ></div>')
var $sliderMenu = $('<div id = "sliderMenu">Create a Quote</div>');
$("body").append($parent);
var $sliderButton = $(`<div id = "sliderButton">
                            <form>
                                <label for="fname" >Whats your Name</label>
                                    <br>
                                <input type="text" class="form">
                                    <br>
                                <input type="text" id="mine" >
                                <input type="submit" value="Submit" id="red">
                            
                                    
                            </form>
                        </div>`);
$parent.append($sliderMenu) 
$parent.append($sliderButton)                       
// $parent.append($sliderButton);

// on submit create post

$("#red").click(function (e) {
  e.preventDefault();
  console.log("clicked");
  var $nameVal = $(".form").val();
  var $quoteVal = $("#mine").val();

  var $postDiv = $(`<div class='post'></div>`);
  var $quoteDiv = $(`<div class='quote'>${$quoteVal}</div>`);
  var $authorDiv = $(`<div class = "author">- ${$nameVal}</div>`);

  console.log($nameVal, $quoteVal);
  $postDiv.append($quoteDiv);
  $postDiv.append($authorDiv);
  $(".feed").append($postDiv);
});

// create a boolean
//when bool is false hide
var isOpen = false;

$($sliderMenu).click(function (e) {
  e.preventDefault();
  // if bool is false hide children of slidermenu
  //if bool is true show children 
// var slide = isOpen === false ? $sliderMenu.children().hide() : $sliderMenu.children().show()
$parent.append($sliderButton)  
isOpen = !isOpen
$sliderButton.toggle(isOpen)

console.log(isOpen)
});
