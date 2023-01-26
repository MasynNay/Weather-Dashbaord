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
      var date = dayjs().format('YYYY-MM-DD')
      var temperature = data.main.temp
      var wind = data.wind.speed
      var humidity = data.main.humidity
      var icon = data.weather[0].icon
      document.getElementById('weatherResult').innerHTML =
      `<h3 id="todayWeather" class="text-center">Today's Current Weather:</h3>
      <br>
      <h3 id="current-date" class="text-center">${cityName} : ${date}</h3>
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
        var fiveDate1 = data.list[0].dt_txt
        var fiveTemp1 = data.list[0].main.temp
        var fiveHumidity1 = data.list[0].main.humidity
        var fiveWind1 = data.list[0].wind.speed
        var fiveIcon1 = data.list[0].weather[0].icon
        //var fiveIconDate = 

        for(j = 0; j < 5; j++) {
          document.getElementById('card1').innerHTML =
          `<h5 class="card-title text-center" id="day1">${fiveDate1}</h5>
          <p class="card-subtitle text-center mb-2" id="day1-temp">Temperature: ${fiveTemp1}</p>
          <p class="card-subtitle text-center mb-2" id="day1-wind">Wind Speed: ${fiveWind1}</p>
          <p class="card-subtitle text-center mb-2" id="day1-humidity">Humidity: ${fiveHumidity1}</p>
          <div class="text-center">
            <img class="justify-content-center" id="current-logo" src="http://openweathermap.org/img/wn/${fiveIcon1}@2x.png">
          </div>`
        }
      })
      fetch(fiveDayUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
        var fiveDayData = data.list
        for(i = 0; i < 40; i += 8)
        var fiveDate2 = data.list[8].dt_txt
        var fiveTemp2 = data.list[8].main.temp
        var fiveHumidity2 = data.list[8].main.humidity
        var fiveWind2 = data.list[8].wind.speed
        var fiveIcon2 = data.list[8].weather[0].icon
        //var fiveIconDate = 

        for(g = 0; g < 5; g++) {
          document.getElementById('card2').innerHTML =
          `<h5 class="card-title text-center" id="day1">${fiveDate2}</h5>
          <p class="card-subtitle text-center mb-2" id="day1-temp">Temperature: ${fiveTemp2}</p>
          <p class="card-subtitle text-center mb-2" id="day1-wind">Wind Speed: ${fiveWind2}</p>
          <p class="card-subtitle text-center mb-2" id="day1-humidity">Humidity: ${fiveHumidity2}</p>
          <div class="text-center">
            <img class="justify-content-center" id="current-logo" src="http://openweathermap.org/img/wn/${fiveIcon2}@2x.png">
          </div>`
        }
      })
      fetch(fiveDayUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
        var fiveDayData = data.list
        for(i = 0; i < 40; i += 8)
        var fiveDate3 = data.list[16].dt_txt
        var fiveTemp3 = data.list[16].main.temp
        var fiveHumidity3 = data.list[16].main.humidity
        var fiveWind3 = data.list[16].wind.speed
        var fiveIcon3 = data.list[16].weather[0].icon
        //var fiveIconDate = 

        for(q = 0; q < 5; q++) {
          document.getElementById('card3').innerHTML =
          `<h5 class="card-title text-center" id="day1">${fiveDate3}</h5>
          <p class="card-subtitle text-center mb-2" id="day1-temp">Temperature: ${fiveTemp3}</p>
          <p class="card-subtitle text-center mb-2" id="day1-wind">Wind Speed: ${fiveWind3}</p>
          <p class="card-subtitle text-center mb-2" id="day1-humidity">Humidity: ${fiveHumidity3}</p>
          <div class="text-center">
            <img class="justify-content-center" id="current-logo" src="http://openweathermap.org/img/wn/${fiveIcon3}@2x.png">
          </div>`
        }
      })
      fetch(fiveDayUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
        var fiveDayData = data.list
        for(i = 0; i < 40; i += 8)
        var fiveDate4 = data.list[24].dt_txt
        var fiveTemp4 = data.list[24].main.temp
        var fiveHumidity4 = data.list[24].main.humidity
        var fiveWind4 = data.list[24].wind.speed
        var fiveIcon4 = data.list[24].weather[0].icon
        //var fiveIconDate = 

        for(q = 0; q < 5; q++) {
          document.getElementById('card4').innerHTML =
          `<h5 class="card-title text-center" id="day1">${fiveDate4}</h5>
          <p class="card-subtitle text-center mb-2" id="day1-temp">Temperature: ${fiveTemp4}</p>
          <p class="card-subtitle text-center mb-2" id="day1-wind">Wind Speed: ${fiveWind4}</p>
          <p class="card-subtitle text-center mb-2" id="day1-humidity">Humidity: ${fiveHumidity4}</p>
          <div class="text-center">
            <img class="justify-content-center" id="current-logo" src="http://openweathermap.org/img/wn/${fiveIcon4}@2x.png">
          </div>`
        }
      })
      fetch(fiveDayUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
        var fiveDayData = data.list
        for(i = 0; i < 40; i += 8)
        var fiveDate5 = data.list[32].dt_txt
        var fiveTemp5 = data.list[32].main.temp
        var fiveHumidity5 = data.list[32].main.humidity
        var fiveWind5 = data.list[32].wind.speed
        var fiveIcon5 = data.list[32].weather[0].icon
        //var fiveIconDate = 

        for(f = 0; f < 5; f++) {
          document.getElementById('card5').innerHTML =
          `<h5 class="card-title text-center" id="day1">${fiveDate5}</h5>
          <p class="card-subtitle text-center mb-2" id="day1-temp">Temperature: ${fiveTemp5}</p>
          <p class="card-subtitle text-center mb-2" id="day1-wind">Wind Speed: ${fiveWind5}</p>
          <p class="card-subtitle text-center mb-2" id="day1-humidity">Humidity: ${fiveHumidity5}</p>
          <div class="text-center">
            <img class="justify-content-center" id="current-logo" src="http://openweathermap.org/img/wn/${fiveIcon5}@2x.png">
          </div>`
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