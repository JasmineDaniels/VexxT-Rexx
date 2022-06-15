var searchForm = $("#search-form");
var resultText = $("#result-text");
var resultsText = $("#5D-result-text");
var resultContent = $("#result-content");
var result5DContent = $("#result-5Dcontent");
var APIkey = "136aa9e29b79e1c372c1123d2de62d07";
var APIKey2 = "c12ef798071d2e2a50287915493f1331"
var city = $("#search-input").val();
var dayOne = $("#day1")
var dayTwo = $("#day2")
var dayThree = $("#day3")
var dayFour = $("#day4")


function getCurrentResults(response){
    resultText.text(city)

    if (response){
        var currentCardBody = $('<div/>'); // new div
        currentCardBody.attr('card-body');
        currentCardBody.attr('style', 'text-align: center')
        resultContent.append(currentCardBody);

        // current weather response  
        var name = $('<p>')
        name.text(`City: ${response.name}`)
        currentCardBody.append(name);
        var humidity = $('<p>')
        humidity.text(`Humidity: ${response.main.humidity}`)
        currentCardBody.append(humidity);
        var temp = $('<p>')
        temp.text(`Temperature: ${response.main.temp}`)
        currentCardBody.append(temp);
        var wind = $('<p>')
        wind.text(`Wind Speed: ${response.wind.speed}`)
        currentCardBody.append(wind);
        var desc = $('<p>')
        desc.text(`Weather Conditions: ${response.weather[0].description}`)
        currentCardBody.append(desc); 
        // var icon = $('<p>')
        // icon.text(`Icon: ${response.weather[0].icon}`)
        // currentCardBody.append(icon);

        resultContent.append(currentCardBody)
        
    };
}

function getForecastResults (response){
    resultsText.text(city)

    if (response) {
        // Forecast Day 1
        var day1CardBody = $('<div/>'); // new div
        day1CardBody.attr('card-body');
        dayOne.append(day1CardBody);

        var dayOneName = $('<p>')
        dayOneName.text(`City: ${response.city.name}`)
        day1CardBody.append(dayOneName);
        var dayOneHumidity = $('<p>')
        dayOneHumidity.text(`Humidity: ${response.list[0].main.humidity}`)
        day1CardBody.append(dayOneHumidity); 
        var dayOneTemp = $('<p>')
        dayOneTemp.text(`Temperature: ${response.list[0].main.temp}`)
        day1CardBody.append(dayOneTemp);
        var dayOneWind = $('<p>')
        dayOneWind.text(`Wind Speed: ${response.list[0].wind.speed}`)
        day1CardBody.append(dayOneWind); 
        var dayOneWeather = $('<p>')
        dayOneWeather.text(`Weather: ${response.list[0].weather[0].description}`)
        day1CardBody.append(dayOneWeather);

        // Forecast Day Two
        var dayTwoCardBody = $('<div/>'); 
        dayTwoCardBody.attr('card-body');
        dayTwo.append(dayTwoCardBody);

        var dayTwoName = $('<p>')
        dayTwoName.text(`City: ${response.city.name}`)
        dayTwoCardBody.append(dayTwoName);
        var dayTwoHumidity = $('<p>')
        dayTwoHumidity.text(`Humidity: ${response.list[12].main.humidity}`)
        dayTwoCardBody.append(dayTwoHumidity); 
        var dayTwoTemp = $('<p>')
        dayTwoTemp.text(`Temperature: ${response.list[12].main.temp}`)
        dayTwoCardBody.append(dayTwoTemp);
        var dayTwoWind = $('<p>')
        dayTwoWind.text(`Wind Speed: ${response.list[12].wind.speed}`)
        dayTwoCardBody.append(dayTwoWind); 
        var dayTwoWeather = $('<p>')
        dayTwoWeather.text(`Weather: ${response.list[12].weather[0].description}`)
        dayTwoCardBody.append(dayTwoWeather);

        // Forecast Day 3
        var dayThreeCardBody = $('<div/>'); 
        dayThreeCardBody.attr('card-body');
        dayThree.append(dayThreeCardBody);

        var dayThreeName = $('<p>')
        dayThreeName.text(`City: ${response.city.name}`)
        dayThreeCardBody.append(dayThreeName);
        var dayThreeHumidity = $('<p>')
        dayThreeHumidity.text(`Humidity: ${response.list[32].main.humidity}`)
        dayThreeCardBody.append(dayThreeHumidity); 
        var dayThreeTemp = $('<p>')
        dayThreeTemp.text(`Temperature: ${response.list[32].main.temp}`)
        dayThreeCardBody.append(dayThreeTemp);
        var dayThreeWind = $('<p>')
        dayThreeWind.text(`Wind Speed: ${response.list[32].wind.speed}`)
        dayThreeCardBody.append(dayThreeWind); 
        var dayThreeWeather = $('<p>')
        dayThreeWeather.text(`Weather: ${response.list[32].weather[0].description}`)
        dayThreeCardBody.append(dayThreeWeather);

        // Forecast Day 4
        var dayFourCardBody = $('<div/>'); 
        dayFourCardBody.attr('card-body');
        dayFour.append(dayFourCardBody);

        var dayFourName = $('<p>')
        dayFourName.text(`City: ${response.city.name}`)
        dayFourCardBody.append(dayFourName);
        var dayFourHumidity = $('<p>')
        dayFourHumidity.text(`Humidity: ${response.list[39].main.humidity}`)
        dayFourCardBody.append(dayFourHumidity); 
        var dayFourTemp = $('<p>')
        dayFourTemp.text(`Temperature: ${response.list[39].main.temp}`)
        dayFourCardBody.append(dayFourTemp);
        var dayFourWind = $('<p>')
        dayFourWind.text(`Wind Speed: ${response.list[39].wind.speed}`)
        dayFourCardBody.append(dayFourWind); 
        var dayFourWeather = $('<p>')
        dayFourWeather.text(`Weather: ${response.list[39].weather[0].description}`)
        dayFourCardBody.append(dayFourWeather);
    };
}


function makeApiCall (city){ // Add city, state, country
    var template = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    // 5D Forecast Data 
    var templateTwo = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey2}&units=imperial`
        
  $.ajax({
      type: 'GET',
      url: template,
      success: function(response){
        console.log(response)
        getCurrentResults(response)
      },
      error: function(){
          console.error("No results found, search again");
      },
    })

    $.ajax({
        type: 'GET',
        url: templateTwo,
        success: function(response){
        console.log(response)
        getForecastResults(response)
    },
    error: function(){
        console.error("No results found, search again");
    },
});
}

$("#search-btn").on('click', function (event) {
    event.preventDefault();
    var city = $('#search-input').val();

    if (!city) {
    alert('You must enter a city');
    return;
    } else {
        makeApiCall(city)
    }
});
