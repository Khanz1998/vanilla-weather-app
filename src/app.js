// timestamp
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}
// weather forecast
function displayForecast() {
  let forecastElement = document.querySelector("#weather-forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
            <div class="col-2">
              <div class="weather-forecast-date">${day}</div>
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/931/original/sunny.png?1638278675"
                alt="sun illustration"
                class="icon"
              />
              <div class="weather-forecast-temperature">
                <span class="weather-forecast-high-temperature"> 18° </span>
                <span class="weather-forecast-low-temperature"> 12° </span>
              </div>
            </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

// temperature
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  celsiusTemp = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemp);

  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.dt * 1000
  );

  let iconData = response.data.weather[0].icon;
  document
    .querySelector("#icon")
    .setAttribute("src", `http://openweathermap.org/img/wn/${iconData}@2x.png`);
  document
    .querySelector("#icon")
    .setAttribute("alt", `${response.data.weather[0].description} icon`);
}

// search engine
function search(city) {
  let apiKey = "4da08b1db69b24980b23530bbc9ed41a";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

document.querySelector("#search-form").addEventListener("submit", handleSubmit);

// current location function
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "4da08b1db69b24980b23530bbc9ed41a";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

// unit conversion
function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = Math.round(celsiusTemp * 1.8 + 32);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}
function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemp);
}
// GLOBAL VARIABLES
// celsius
let celsiusTemp = null;
// current location
let locationBtn = document.querySelector("#location-btn");
locationBtn.addEventListener("click", getCurrentPosition);

// unit conversion
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

// search for city on load
search("London");
displayForecast();
