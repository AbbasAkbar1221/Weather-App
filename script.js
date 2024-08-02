let form = document.querySelector("#weather-form");
let weatherInfo = document.querySelector("#weather-info");

let printWeatherData = (event) => {
  event.preventDefault();

  let cityInput = document.querySelector("#city");
  let city = cityInput.value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0f08195b8f65b63bafc536bbf0ec300`;

  getWeather(url);
};

form.addEventListener("submit", printWeatherData);

async function getWeather(url) {
  try {
    let responseObject = await fetch(url);

    let jsonObject = await responseObject.json();

    displayWeather(jsonObject);
  } catch (error) {
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
  }
}
function displayWeather(data) {
  weatherInfo.style.display = "block";
  const weatherInfos = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}K</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  weatherInfo.innerHTML = weatherInfos;
}
