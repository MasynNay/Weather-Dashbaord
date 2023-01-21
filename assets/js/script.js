var apiKey = "01c96215aa0d4a4be72c357c3513ec88"
var recentCity = []


$(document).ready(function() {
  recentCity = JSON.parse(localStorage.getItem("recentlySearched"))
  
  // Search button listener
 $("#citySearchBtn").on("click", function (event) {
  event.preventDefault()
  var searchValue = $("#searchedCity").val()
  console.log(searchValue)
  // Saves to local storage
  recentCity.push (searchValue)
  console.log (recentCity)
  localStorage.setItem("recentlySearched", JSON.stringify(recentCity))
 })
})
function getCity(recentCity){
  var url = ("api.openweathermap.org/data/2.5/forecast?q=" + recentCity + "&appid=" + apiKey)

  fetch(url)
  .then(function (response) {
    response.json;
  })
  .then(function(data) {
    console.log("getCity response =", data)
  })
}
