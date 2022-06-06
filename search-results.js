var searchForm = $("#search-form");
var resultText = $("#result-text");
var resultContent = $("#result-content");
var APIkey = "136aa9e29b79e1c372c1123d2de62d07";
// var city = $("#search-input").val();

// function getFormats(){
//     var getParametersArr = document.location.search.split("&");

    // var city = $('#search-input').val();

// }

function getResults(resultObj){
    console.log(resultObj);

    var resultCard = $('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    var resultCardBody = $('div');
    resultCardBody.classList.add('card-body');
    resultCard.append(resultCardBody);

    var title = $('h3');
    title.textContent = resultObj.name; // ex. "name": "London"

    var bodyMainContent = $('p');
    bodyMainContent.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';
    
    if (resultObj.description) {
        bodyMainContent.innerHTML +=
          '<strong>Description:</strong> ' + resultObj.description[0];
    } else {
        bodyMainContent.innerHTML +=
          '<strong>Description:</strong>  No description for this entry.';
    }

    if (resultObj.subject) {
        bodyMainContent.innerHTML +=
          '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
    } else {
        bodyMainContent.innerHTML +=
          '<strong>Subjects:</strong> No subject for this entry.';
    }
}


function makeApiCall (city){ // Add city, state, country
    var oneCallUrl = 'https://api.openweathermap.org/data/2.5/weather' 
    // var city = $('#search-input').val();
    // var format = '&units=imperial&

//   if (city) {
//     oneCallUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ APIkey;
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