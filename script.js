$(function (){ //document ready

    $("#search-btn").on('click', function handleSearchFormSubmit(event) {
        event.preventDefault();
    
        var city = $('#search-input').val();
    
        if (!city) {
        alert('You must enter a city');
        return;
        }
    
        var queryString = './search-results.html?q=' + city 
    
        location.assign(queryString);
    })

});
  