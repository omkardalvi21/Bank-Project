async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    // Call weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai,london,kudal&appid=b9da275f920cb34cdb7ae0cf970b7649`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('condition').textContent = `Condition: ${data.weather[0].description}`;
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Unable to fetch weather data.');
        });
}