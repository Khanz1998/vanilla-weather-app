[Click here for live demo](https://vanillajavascript-weather.netlify.app/).

![vanillaweather](https://user-images.githubusercontent.com/92318870/187891929-943e40d6-a8e6-479d-b0e7-085d2f7abb1b.png)


# Vanilla Weather App

This is a vanilla javascript project focused on simple, user-friendly, and global weather search functionality.

## Reflection

- Weather API Integration
- Geolocation API Integration
- Current Weather Display
- 5-Day Forecast

I learned so much by building this vanilla javascript project. My end goal of this project was to create a fully functional worldwide weather checker that allows you to search a city and see the weather in real-time as well as the 5-day forecast. I divided this project in two phases. 

#### Phase 1
The first phase was creating the weather search by integrating the OpenWeatherMap API and returning the real-time, current weather of a chosen city, displaying the weather description, humidity, and wind speed. The main challenge of this phase was deconstructing the application into functions and understanding the possibilities of my chosen API, OpenWeatherMap.

#### Phase 2
The second phase was dedicated to creating the 5-day forecast by building the layout, styling the feature, and integrating a more complex api integration to include the data of the 5-day forecast. The first challenge of this section were deciding where I should you call the One Call Api because this could only be done once the coordinates of the city were established, so I had to find the fight place to get the forecast results, only after the first api call. The second challenge was building the string injected inside the html for each day of the forecast prediction. In order to do this, I had to concatenate a big string and then add each day one at a time for the forecast.

I am happy with the appearance and functionaly of the application, however I would improve it by adding in a temperature conversion, so that the user can choose whether they'd like to see the weather in ºC or ºF.
