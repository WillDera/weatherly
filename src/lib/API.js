import.meta.env.VUE_APP_OPENWEATHER_API_KEY;

// const proxy = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "8f1ff2fcfd4d64db6e56e3cc31004b0b";
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=`;
// const Weather_end = `&units=metric&appid=${API_KEY}`

function getForecast(location) {
  return fetch(
    `${WEATHER_API_URL}${location}&units=metric&appid=${API_KEY}`
  ).then((response) => response.json());
}

export default {
  getForecast,
};
