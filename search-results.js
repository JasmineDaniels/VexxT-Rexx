var searchForm = $("#search-form");
var resultText = $("#result-text");
var resultContent = $("#result-content");
var APIkey = "136aa9e29b79e1c372c1123d2de62d07";
var city = $("#search-input");

// function getFormats(){
//     var getParametersArr = document.location.search.split("&");


// }

function makeApiCall (city){ // Add city, state, country
    var oneCallUrl = 'api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ APIkey;
    // var format =

  if (city) {
    oneCallUrl = 'https://www.loc.gov/' + city + '/?fo=json';
  } 
    

    //oneCallUrl = oneCallUrl + '&q=' + query;
  oneCallUrl = oneCallUrl + '&execute=' + format;

  $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/",
  })
}