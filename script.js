// Function to fetch weather data from the API
async function getWeather() {
    const apiKey = 'df3468ae6dcabdad0eafdaa8fbee912b'; // My API Key
    const lat = document.getElementById('Latitude').value.trim();
    const lon = document.getElementById('Longitude').value.trim();
    

    

    // Construct the API URL for fetching weather data
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    try {
        // Make an asynchronous API request using fetch
        const response = await fetch(apiUrl);
        const data = await response.json(); // Parse the JSON response
        console.log(data);
        7.46
        // Call the displayWeatherData function to update the UI with weather information
        displayWeatherData(data);
    } catch (error) {
        alert('Error fetching weather data. Please try again.'); // Alert the user about the error
        console.error('Error:', error); // Log the error to the console for debugging
    }
}

// Function to display weather data on the webpage
function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weatherInfo'); // Get the weather info container

    // Extract relevant weather data from the API response
    const temperature = data.current.temp;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_speed;
    const weatherDescription = data.current.weather[0].description;

    // Update the weather info container with the extracted data
    weatherInfo.innerHTML = `
        <h2>Weather Information</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        <p><strong>Weather Description:</strong> ${weatherDescription}</p>
    `;
}