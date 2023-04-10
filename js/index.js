function renderWeather(weather) {
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results")
    //create p for humidity, wind, description, temp
    
    var icon = document.createElement("img");
    icon.className = "foto d-none d-lg-block"
    icon.src = "https://openweathermap.org/img/wn/" + weather.weather[0].icon +".png";
    resultsContainer.append(icon);
    var temp = document.createElement("p");
    temp.className = "data text-lg-start"
    temp.textContent ="Temperatura: "+ weather.main.temp + " Cº " + weather.weather[0].description;
    resultsContainer.append(temp);
}

function fetchWeather(query) {
    var url="https://api.openweathermap.org/data/2.5/weather?q=Mariano%20Roque%20Alonso&units=metric&appid=6a18aeb267eee1a738612d34960ea62f&lang=es"
    fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}
fetchWeather();
