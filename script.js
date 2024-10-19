document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'f23ace1d40dad985b7ac1e0c8c3af17d'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherData = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
        document.getElementById('weatherResult').innerHTML = weatherData;
    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
    });
});

I went and looked up how the weather web page looks in Brampton since that's where i live and tried to make the same similar page.