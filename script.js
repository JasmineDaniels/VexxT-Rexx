var searchFormEl = $("#search-form")


function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = ('#search-input').value;
  
    if (!searchInputVal) {
      alert('You must enter a city');
      return;
    }
  
    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  
    location.assign(queryString);
  }
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
  