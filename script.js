var searchFormEl = $("#search-form")


function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var city = ('#search-input').value;
    // var formatInputVal = 
  
    if (!searchInputVal) {
      alert('You must enter a city');
      return;
    }
  
    var queryString = './search-results.html?q=' + city + '&format=' + formatInputVal;
  
    location.assign(queryString);
  }
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
  