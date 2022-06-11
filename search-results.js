var searchForm = $("#search-form");
var resultText = $("#result-text");
var resultContent = $("#result-content");
var APIkey = "136aa9e29b79e1c372c1123d2de62d07";
var city = $("#search-input").val();

// function getFormats(){
//     var getParametersArr = document.location.search.split("&");

    // var city = $('#search-input').val();

// }

function getResults(){
    console.log(resultObj);

    
    
}


function makeApiCall (city){ // Add city, state, country
    debugger
    // var city = $('#search-input').val();
    var template = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
  
    
  $.ajax({
      type: 'GET',
      url: template,
      success: function(response){
        var temp = $('<div>')
        temp.text(`Temperature: ${response.main.temp}`)
        resultContent.append(temp);
        var humidity = $('<div>')
        humidity.text(`Humidity: ${response.main.humidity}`)
        resultContent.append(humidity);
        var wind = $('<div>')
        wind.text(`Wind Speed: ${response.wind.speed}`)
        resultContent.append(wind);
        var name = $('<div>')
        name.text(`Name: ${response.name}`)
        resultContent.append(name);
        var uvi = $('<div>')
        uvi.text(`Name: ${response.current.uvi}`)
        resultContent.append(name);
      },
      error: function(){
          alert("No results found, search again")
      },
    })

}

$("#search-btn").on('click', function (event) {
    event.preventDefault();
    debugger
    var city = $('#search-input').val();

    if (!city) {
    alert('You must enter a city');
    return;
    } else {
        makeApiCall(city)
    }

    

    
})


