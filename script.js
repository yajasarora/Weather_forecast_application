// Function to fetch weather data from the API
async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const cityInput = document.getElementById('cityInput').value.trim();

    // Check if the city input is empty
    if (cityInput === '') {
        alert('Please enter a city name.'); // Alert the user to enter a city name
        return; // Exit the function if city input is empty
    }

    // Construct the API URL for fetching weather data
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    
    try {
        // Make an asynchronous API request using fetch
        const response = await fetch(apiUrl);
        const data = await response.json(); // Parse the JSON response

        // Check if the API response contains valid data
        if (data.cod !== 200) {
            throw new Error(data.message); // Throw an error if the API response is not successful
        }

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
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherDescription = data.weather[0].description;

    // Update the weather info container with the extracted data
    weatherInfo.innerHTML = `
        <h2>Weather Information</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        <p><strong>Weather Description:</strong> ${weatherDescription}</p>
    `;
}
