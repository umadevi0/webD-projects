# Weather App

## Overview

This Weather App is a simple web application that allows users to check the current weather conditions for a specific city. The app provides information such as temperature, city name, humidity, and wind speed. It also includes weather icons to visually represent the current weather status.

## Features

- **Search Functionality:** Users can enter a city name in the search input field and click the search button to retrieve weather information for that city.

- **Weather Data Display:** The app displays the temperature, city name, humidity, and wind speed in a clean and organized manner.

- **Error Handling:** If the entered city name is not valid or if there is an issue with the API request, an error message is displayed to inform the user.

- **Weather Icons:** Visual representations of weather conditions, such as rain, clouds, clear sky, drizzle, mist, and snow, are displayed based on the current weather data.

## Technologies Used

- **HTML:** The structure of the web page is defined using HTML.

- **CSS:** Styling for the web page is implemented using an external stylesheet (style.css).

- **JavaScript:** The dynamic functionality of the app, including fetching weather data from the OpenWeatherMap API and updating the DOM, is implemented using JavaScript.

- **OpenWeatherMap API:** Weather data is obtained from the OpenWeatherMap API using a unique API key.

## Setup

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/umadevi0/webD-projects.git

2.Open the project folder: `cd Weather_App`
3.Open the index.html file in a web browser to use the Weather App.


# Usage

1. **Open the app in your web browser.**

2. **Enter the name of the city for which you want to check the weather in the input field.**

3. **Click the search button.**

4. **The app will display the current weather conditions for the entered city.**

# Credits

- Weather icons are sourced from the app's local "images" directory.

# API Key

To use this Weather App, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and replace the `apiKey` variable in the script with your key.

```javascript
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
