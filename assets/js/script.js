var apiKey = "01c96215aa0d4a4be72c357c3513ec88"
var recentCity = []

$(document).ready(function() {
  recentCity = JSON.parse(localStorage.getItem("recentlySearched"))
  if (recentCity === null) {
    recentCity = []
  }
  // Pull local storage
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
    var url = ("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&&units=imperial")
    var fiveDayUrl = ("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&&units=imperial")
    // Fetches the api
    fetch(url)
    .then(function (response) {
      return response.json()
    })
    // Current weather
    .then(function (data) {
      console.log(data)
      var temperature = data.main.temp
      var wind = data.wind.speed
      var humidity = data.main.humidity
      var icon = data.weather[0].icon
      document.getElementById('weatherResult').innerHTML =
      `<h3 id="todayWeather" class="text-center">Today's Current Weather:</h3>
      <br>
      <h3 id="current-date" class="text-center">${cityName}</h3>
      <br>
     <p class="current-temp text-center">Current Temperature: ${temperature}</p>
     <p class="current-wind text-center">Current Wind Speed: ${wind}</p>
     <p class="current-humidity text-center">Current Humidity: ${humidity}</p>
      <div class="text-center">
            <img class="justify-content-center" id="current-logo" src="http://openweathermap.org/img/wn/${icon}@2x.png">
      </div>`
    })
    fetch(fiveDayUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
        var fiveDayData = data.list
        for(i = 0; i < 40; i += 8)
        var fiveTemp = data.list[0].main.temp
        var fiveHumidity = data.list[0].main.humidity
        var fiveWind = data.list[0].wind.speed
        var fiveIcon = data.list[0].weather[0].icon

        for(w = 0; w < 5; w++) {
          document.getElementById
        }
      })
  }
  function generateRecentCities(recentCities) {
    if (recentCities !== null) {
      let recentCityElement = $("#recent-city")
      recentCityElement.empty()
      for(let i = 0;i <= recentCities.length-1;i++){
        let button=$('<button></button>')
        button.addClass("recentCityBtn")
        button.text(recentCities[i])
        button.on("click" ,function(event) {
          getCity(recentCities[i])
        })
        recentCityElement.append(button)
      }
    }
  }