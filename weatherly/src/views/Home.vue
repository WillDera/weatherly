<template>
  <div class="home container">
    <div class="row">
      <div class="col-8 offset-2 col-sm">
        <div class="card text-white bg-info mb-3 head">
          <div class="input-group mb-3">
            <input v-model="location" type="text" class="form-control" placeholder="City Name">
            <div class="input-group-append">
              <button @click="updateLocation" class="btn btn-outline-secondary" type="button" id="button-addon2">Retrieve</button>
            </div>
          </div>
          <div class="card-header">
            <h2 class="col-6">{{address}}</h2>
            <h4 class="col-6">{{ new Date().getFullYear()+' '+months[new Date().getMonth()]+' '+ new Date().getDate()}}</h4>
          </div>
          <div class="card-body" v-if="forecast">
            <div class="weather-details col-6">
              <h3>{{ days[new Date().getDay()] }}</h3>
              <h4>Humidity {{forecast.currently.humidity*100}}&#37;</h4>
              <h4>Precipitation Type: {{forecast.currently.precipType}}</h4>
              <h4>Timezone: {{forecast.timezone}}</h4>
              <h1>{{forecast.currently.temperature}} 	&#8451;</h1>
            </div>
            <div class="weather-info col-6">
              <img :src=icons[forecast.currently.icon]>
              <h3>{{forecast.currently.summary}} </h3>
            </div>
          </div>
          <div class="card-header2">
                <h3 class="col">{{ days[new Date().getDay()+1] }}</h3>
                <span class="col"><img :src=icons[forecast.daily.icon]></span>
                <span class="col minMax">
                  <h3>{{forecast.daily.data[0].temperatureMax}} 	&#8451;</h3>
                </span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import API from '../lib/API.js';

export default {
  name: 'home',
  data() {
    return {
      location: localStorage.location || "",
      address: localStorage.address || '',
      days: {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
        },
      months: {
        0:'January',
        1:'February',
        2:'March',
        3:'April',
        4:'May',
        5:'June',
        6:'July',
        7:'August',
        8:'September',
        9:'October',
        10:'November',
        11:'December'
        },
      forecast: null,
      icons: {
        'clear-day': require('../assets/icons8-sun-100.png'),
        'clear-night': require('../assets/icons8-night-100.png'),
        'rain': require('../assets/icons8-rainy-weather-100.png'),
        'snow': require('../assets/icons8-snow-101.png'),
        'sleet': require('../assets/icons8-sleet-100.png'),
        'wind': require('../assets/icons8-haze-100.png'),
        'fog': require('../assets/icons8-fog-100.png'),
        'cloudy': require('../assets/icons8-clouds-100.png'),
        'partly-cloudy-day': require('../assets/icons8-partly-cloudy-day-100.png'),
        'partly-cloudy-night': require('../assets/icons8-night-100.png'),
        'hail': require('../assets/icons8-hail-100.png'),
        'thunderstorm': require('../assets/icons8-cloud-lightning-filled-100.png'),
        'tornado': require('../assets/icons8-tornado-100.png')
      },
    };
  },
  mounted() {
    this.loadWeather(localStorage.lat || '3.0008', localStorage.lon || '-5.6789');
  },
  methods: {
    loadWeather(lat, lon) {
      localStorage.lat = lat;
      localStorage.lon = lon;
      API.getAddress(lat, lon).then(result => {
        this.address = result.name;
        localStorage.address = this.address;
      });
      API.getForecast(lat, lon).then(result => {
        // console.log(result);
          this.forecast = result;
          NProgress.done()
      });
    },
    updateLocation() {
      NProgress.start();
      localStorage.location = this.location;
      API.getCoordinates(this.location).then(result => {
        this.loadWeather(result.latitude, result.longitude);
      })
    }
  }
};

</script>



<style>
.card-header {
  display: inline-flex;
  text-align: center;
}

.card-header2 {
  display: inline-flex;
  text-align: center;
  background-color: rgba(0, 12, 121, 0.61);
  padding: 7px;
}

.card-body {
  display: inline-flex;
  text-align: center;
  background-color: rgba(51, 5, 177, 0.61);
}

.col > img {
  height: 50px;
}
</style>
