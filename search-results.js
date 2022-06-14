var searchForm = $("#search-form");
var resultText = $("#result-text");
var resultContent = $("#result-content");
var result5DContent = $("#result-5Dcontent");
var APIkey = "136aa9e29b79e1c372c1123d2de62d07";
var APIKey2 = "c12ef798071d2e2a50287915493f1331"
var city = $("#search-input").val();
var dayOne = $("#day1")
var dayTwo = $("#day2")
var dayThree = $("#day3")
var dayFour = $("#day4")


function getResults(response){
    // console.log(response)
    // resultText.text(`${city}`)

    // var resultCard = $('div');
    // resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    // var resultHeader = $('h3')
    // resultHeader.classList.add('card-header');
    // resultHeader.text(`Name: ${response.name}`)
    // resultCard.append(resultHeader);

    // var resultBody = $('div');
    // resultBody.classList.add('card-body');
    // resultCard.append(resultBody);

    // var temp = $('<p>')
    // temp.text(`Temperature: ${response.main.temp}`)
    // resultBody.append(temp);

    // var humidity = $('<p>')
    // humidity.text(`Humidity: ${response.main.humidity}`)
    // resultBody.append(humidity);

    // var wind = $('<p>')
    // wind.text(`Wind Speed: ${response.wind.speed}`)
    // resultBody.append(wind);
    // // var name = $('<div>')
    // // name.text(`Name: ${response.name}`)
    // // resultContent.append(name);
    // var desc = $('<p>')
    // desc.text(`Weather Conditions: ${response.weather[0].description}`)
    // resultBody.append(desc);
    
    // resultContent.append(resultCard);
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

        resultText.text(city)

        // current weather response  
        var name = $('<div>')
        name.text(`City: ${response.name}`)
        resultContent.append(name);
        var humidity = $('<p>')
        humidity.text(`Humidity: ${response.main.humidity}`)
        resultContent.append(humidity);
        var temp = $('<p>')
        temp.text(`Temperature: ${response.main.temp}`)
        resultContent.append(temp);
        var wind = $('<p>')
        wind.text(`Wind Speed: ${response.wind.speed}`)
        resultContent.append(wind);
        var desc = $('<p>')
        desc.text(`Weather Conditions: ${response.weather[0].description}`)
        resultContent.append(desc); 

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
        // Forecast Day 1
        var dayOneName = $('<p>')
        dayOneName.text(`City: ${response.city.name}`)
        dayOne.append(dayOneName);
        var dayOneHumidity = $('<p>')
        dayOneHumidity.text(`Humidity: ${response.list[0].main.humidity}`)
        dayOne.append(dayOneHumidity); 
        var dayOneTemp = $('<p>')
        dayOneTemp.text(`Temperature: ${response.list[0].main.temp}`)
        dayOne.append(dayOneTemp);
        var dayOneWind = $('<p>')
        dayOneWind.text(`Wind Speed: ${response.list[0].wind.speed}`)
        dayOne.append(dayOneWind); 
        var dayOneWeather = $('<p>')
        dayOneWeather.text(`Weather Conditions: ${response.list[0].weather[0].description}`)
        dayOne.append(dayOneWeather);

        // Forecast Day Two
        var dayTwoName = $('<p>')
        dayTwoName.text(`City: ${response.city.name}`)
        dayTwo.append(dayTwoName);
        var dayTwoHumidity = $('<p>')
        dayTwoHumidity.text(`Humidity: ${response.list[12].main.humidity}`)
        dayTwo.append(dayTwoHumidity); 
        var dayTwoTemp = $('<p>')
        dayTwoTemp.text(`Temperature: ${response.list[12].main.temp}`)
        dayTwo.append(dayTwoTemp);
        var dayTwoWind = $('<p>')
        dayTwoWind.text(`Wind Speed: ${response.list[12].wind.speed}`)
        dayTwo.append(dayTwoWind); 
        var dayTwoWeather = $('<p>')
        dayTwoWeather.text(`Weather Conditions: ${response.list[12].weather[0].description}`)
        dayTwo.append(dayTwoWeather);

        // Forecast Day 3
        var dayThreeName = $('<div>')
        dayThreeName.text(`City: ${response.city.name}`)
        dayThree.append(dayThreeName);
        var dayThreeHumidity = $('<p>')
        dayThreeHumidity.text(`Humidity: ${response.list[32].main.humidity}`)
        dayThree.append(dayThreeHumidity); 
        var dayThreeTemp = $('<p>')
        dayThreeTemp.text(`Temperature: ${response.list[32].main.temp}`)
        dayThree.append(dayThreeTemp);
        var dayThreeWind = $('<p>')
        dayThreeWind.text(`Wind Speed: ${response.list[32].wind.speed}`)
        dayThree.append(dayThreeWind); 
        var dayThreeWeather = $('<p>')
        dayThreeWeather.text(`Weather Conditions: ${response.list[32].weather[0].description}`)
        dayThree.append(dayThreeWeather);

        // Forecast Day 4
        var dayFourName = $('<div>')
        dayFourName.text(`City: ${response.city.name}`)
        dayFour.append(dayFourName);
        var dayFourHumidity = $('<p>')
        dayFourHumidity.text(`Humidity: ${response.list[39].main.humidity}`)
        dayFour.append(dayFourHumidity); 
        var dayFourTemp = $('<p>')
        dayFourTemp.text(`Temperature: ${response.list[39].main.temp}`)
        dayFour.append(dayFourTemp);
        var dayFourWind = $('<p>')
        dayFourWind.text(`Wind Speed: ${response.list[39].wind.speed}`)
        dayFour.append(dayFourWind); 
        var dayFourWeather = $('<p>')
        dayFourWeather.text(`Weather Conditions: ${response.list[39].weather[0].description}`)
        dayFour.append(dayFourWeather);

    }
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
