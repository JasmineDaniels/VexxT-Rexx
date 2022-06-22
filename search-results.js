var searchForm = $("#search-form");
// var resultText = $("#result-text");
// var resultsText = $("#5D-result-text");
var resultContent = $("#result-content");
var result5DContent = $("#result-5Dcontent");
var APIkey = "136aa9e29b79e1c372c1123d2de62d07";
var APIKey2 = "c12ef798071d2e2a50287915493f1331"
var dayOne = $("#day1")
var dayTwo = $("#day2")
var dayThree = $("#day3")
var dayFour = $("#day4")



function getCurrentResults(response){
    // resultText.text(city)

    if (response){
        
        $('#current-title').text(`Showing Current Weather results for ${response.name}`)
        // headerCurrentEl.prepend(currentHeader)
        // current weather response  
        var currentData = $(`<p>City: <strong>${response.name}</strong></p>
        <p>Humidity: <strong>${response.main.humidity}</strong></p>
        <p>Temperature: <strong>${response.main.temp}°F</strong></p>
        <p>Wind Speed: <strong>${response.wind.speed}</strong></p>
        <p>Weather: <strong>${response.weather[0].description}</strong></p>
        <p>Icon: <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></p>`);
        currentData.attr('style', 'text-align: center')
        resultContent.append(currentData)

    };
}

function getForecastResults (response){
    // resultsText.text(city)
    
    if (response) {
        // Forecast Day 1
        // var day1CardBody = $('<div/>'); // new div
        $('#5d-title').text(`Showing Weather Forecast results for ${response.city.name}`)
        // header5D.prepend(forecast)

        var dayOneData = $(`<p>City: <strong>${response.city.name}</strong></p>
        <p>Humidity: <strong>${response.list[0].main.humidity}</strong></p>
        <p>Temperature: <strong>${response.list[0].main.temp}°F</strong></p>
        <p>Wind Speed: <strong>${response.list[0].wind.speed}</strong></p>
        <p>Weather: <strong>${response.list[0].weather[0].description}</strong></p>
        <p>Icon: <img src="http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png"></p>`);
        dayOne.append(dayOneData) 


        // Forecast Day Two
        var dayTwoData = $(`<p> City: <strong>${response.city.name}</strong></p>
        <p>Humidity: <strong>${response.list[12].main.humidity}</strong></p>
        <p>Temperature: <strong>${response.list[12].main.temp}°F</strong></p>
        <p>Wind Speed: <strong>${response.list[12].wind.speed}</strong></p>
        <p>Weather: <strong>${response.list[12].weather[0].description}</strong></p>
        <p>Icon: <img src="http://openweathermap.org/img/wn/${response.list[12].weather[0].icon}@2x.png"></p>`)
        dayTwo.append(dayTwoData);
        
        // Forecast Day 3
        var dayThreeData = $(`<p>City: <strong>${response.city.name}</strong></p>
        <p>Humidity: <strong>${response.list[32].main.humidity}</strong></p>
        <p>Temperature: <strong>${response.list[32].main.temp}</strong></p>
        <p>Wind Speed: <strong>${response.list[32].wind.speed}</strong></p>
        <p>Weather: <strong>${response.list[32].weather[0].description}</strong></p>
        <p>Icon: <img src="http://openweathermap.org/img/wn/${response.list[32].weather[0].icon}@2x.png"></p>`)
        dayThree.append(dayThreeData);

        // Forecast Day 4
        var dayFourData = $(`<p>City: <strong>${response.city.name}</strong></p>
        <p>Humidity: <strong>${response.list[39].main.humidity}</strong></p>
        <p>Temperature: <strong>${response.list[39].main.temp}</strong></p>
        <p>Wind Speed: <strong>${response.list[39].wind.speed}</strong></p>
        <p>Weather: <strong>${response.list[39].weather[0].description}</strong></p>
        <p>Icon: <img src="http://openweathermap.org/img/wn/${response.list[39].weather[0].icon}@2x.png"></p>`)
        dayFour.append(dayFourData);

    };
}
 
// Local Storage
function savedSearch (){
    // the search value
    var city = $("#search-input").val();
    // is there something in local storage that has "this Item" (recentSearch)
    // we want searchHistroy to equal whats in ls with the keyname "recentSearch" 
    var searchHistory = JSON.parse(localStorage.getItem('recentSearch')) 

    if (searchHistory){ //if something is in local storage called 'recentSearch'
        searchHistory.push(city) //push new search(city) into the Array
        localStorage.setItem('recentSearch', JSON.stringify(searchHistory))
    } else { // if nothing in ls is called 'recentSearch'
        searchHistory = [city]  // searchHistory = an Array with the value of the search (city)
        localStorage.setItem('recentSearch', JSON.stringify(searchHistory))
    } // NOW 'recentSearch' is an array 

    var recentBtn = $('<button/>')
    recentBtn.text(city)
    recentBtn.attr('class', 'btn btn-primary mx-2')
    recentBtn.on('click', function(event){
        makeApiCall($(this).text()) // event.target
    }) 
    $("#recent-value").append(recentBtn)
}

// function createSearchButton (){
//     // i = searchHistory.length
//     for (let i = 0; i < localStorage.length; i++) {
//         // const element = array[i];
//         if (searchHistory){
//             $('<button/>', {
//                 html: i,
//                 id: 'btn_'+i,
//                 click: function (){
                    
//                 }
//             })
//         }
        
//     }
// }


function makeApiCall (city){ 
    // Current Data
    var template = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    // Forecast Data 
    var templateTwo = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey2}&units=imperial`
    resultContent.empty()
    dayOne.empty()
    dayTwo.empty()
    dayThree.empty()
    dayFour.empty()
    
  $.ajax({
      type: 'GET',
      url: template,
      success: function(response){
        console.log(response)
        getCurrentResults(response)
        savedSearch()
        
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

//When search button is clicked, Make API Call 
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
