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
    var city = $('#search-input').val();
    // var format = '&units=imperial

//   if (city) {
//     oneCallUrl += '?q=' + city + format + '&appid='+ APIkey;
//   } 
    
  $.ajax({
      type: 'GET',
      url: oneCallUrl,
      success: function(response){
        resultText.textContent = response.search.city;
        console.log(response)
      },
      error: function(){
          alert("No results found, search again")
      },
    })

}