var apiKey = "01c96215aa0d4a4be72c357c3513ec88"
var recentCity = []

$(document).ready(function() {
  recentCity = JSON.parse(localStorage.getItem("recentlySearched"))
  generateRecentCities(recentCity)
  // Search button listener
  $("#citySearchBtn").on("click", function (event) {
    event.preventDefault()
    var searchValue = $("#searchedCity").val()
    console.log(searchValue)
    // Saves to local storage
    recentCity.push (searchValue)
    localStorage.setItem("recentlySearched", JSON.stringify(recentCity))
    generateRecentCities(recentCity)
    getCity(recentCity[recentCity.length-1])
 })
})
function getCity(cityName){
    var url = ("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&&units=imperial")
  
    // Fetches the api
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // update the weather on hte page

      //
    })
  }
  function generateRecentCities(recentCities) {
    let recentCityElement = $("#recent-city")
    recentCityElement.empty()
    for(let i = 0;i <= recentCities.length-1;i++){
      let button=$('<button></button>')
      button.text(recentCities[i])
      button.on("click" ,function(event) {
        getCity(recentCities[i])
      })
      recentCityElement.append(button)
    }
  }