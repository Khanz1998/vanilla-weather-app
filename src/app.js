// day and time
function formatDate(timestamp){
    let date = new Date(timestamp);
    
    let day = days[date.getDay()];
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday"
    ]
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
// temperature
function displayTemperature(response){
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
    document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
}  
  
  let apiKey = "4da08b1db69b24980b23530bbc9ed41a";
  let units = "metric";
  let city = "London";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`

  axios.get(apiUrl).then(displayTemperature);