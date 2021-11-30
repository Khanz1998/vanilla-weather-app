// temperature
function displayTemperature(response){
    console.log(response.data);
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
    document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
    
}  
  
  let apiKey = "4da08b1db69b24980b23530bbc9ed41a";
  let units = "metric";
  let city = "London";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`

  axios.get(apiUrl).then(displayTemperature);