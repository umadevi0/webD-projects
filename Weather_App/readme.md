Overview
This Weather App is a visually appealing web application designed to provide users with current weather information for a specific city. The app features a responsive and stylish interface, displaying temperature, city name, humidity, and wind speed. It also includes intuitive search functionality and error handling for invalid city names.

Technologies Used
HTML: The structure of the web page is defined using HTML.

CSS: Styling for the web page is implemented using CSS, with a focus on a clean and vibrant design.

JavaScript: The dynamic functionality of the app, including fetching weather data from the OpenWeatherMap API and updating the DOM, is implemented using JavaScript.

OpenWeatherMap API: Weather data is obtained from the OpenWeatherMap API using a unique API key.

Setup
Clone the repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/weather-app.git
Open the index.html file in a web browser to use the Weather App.

CSS Styling
The CSS styles contribute to the app's modern and visually appealing design. Key features include:

Box Sizing: The global box-sizing property is set to border-box for consistent box models.

Background: The background color of the body is set to #222 for a dark theme.

Card Styling: The weather information is presented within a card with rounded corners and a gradient background.

Search Bar: The search bar consists of an input field and a search button with a clean layout.

Weather Icon Animation: The weather icon enlarges on hover, providing a subtle interactive element.

Error Animation: An animated pop effect is applied to the error message for a visually engaging user experience.

Usage
Open the app in your web browser.

Enter the name of the city for which you want to check the weather in the input field.

Click the search button.

The app will display the current weather conditions for the entered city.

API Key
To use this Weather App, you need to obtain an API key from OpenWeatherMap and replace the apiKey variable in the script with your key.

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";