const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '93b05eb99d9bd037e32c7af0dda97f05';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then((response) => response.json());
}

function getForecast(lat, lon) {
  return fetch(`${WEATHER_API_URL}${lat},${lon}?units=si`)
    .then((response) => response.json());
}

function getAddress(lat, lon) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lon}`)
    .then((response) => response.json());
}

export default {
  getForecast,
  getCoordinates,
  getAddress,
};
