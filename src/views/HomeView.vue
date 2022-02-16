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
            <h2 class="col-6">{{location}}</h2>
            <h4 class="col-6">{{ new Date().getFullYear()+' '+months[new Date().getMonth()]+' '+ new Date().getDate()+","+days[new Date().getDay()]}}</h4>
          </div>
          <div class="card-body" v-if="forecast">
            <div class="weather-details col-6">
              <h4>Humidity {{forecast.main.humidity}}&#37;</h4> 
              <h3>Temp: {{forecast.main.temp}} 	&#8451;</h3>
              <h3>feel's like: {{forecast.main.feels_like}} 	&#8451;</h3>
            </div>
            <div class="weather-info col-6">
              <img :src=icons[forecast.weather[0].icon] />
              <h3>Main: {{forecast.weather[0].main}} </h3>
              <h3>Description: {{forecast.weather[0].description}} </h3>
              <h3>Wind speed: {{forecast.wind.speed}} m/s </h3>
              <h3>Sunrise: {{forecast.sys.sunrise}} </h3>
              <h3>Sunset: {{forecast.sys.sunset}} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import API from '../lib/API.js';
import NProgress from 'nprogress'

//? TODO: FIX THE UI
//? TODO: Convert sunset and sunrise to more readable time data
//? TODO: Auto retrieve weather info based on geolocation

export default {
  name: 'home',
  data() {
    return {
      location: this.location || "",
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
        '01d': 'http://openweathermap.org/img/wn/01d@2x.png',
        '02d': 'http://openweathermap.org/img/wn/02d@2x.png',
        '03d': 'http://openweathermap.org/img/wn/03d@2x.png',
        '04d': 'http://openweathermap.org/img/wn/04d@2x.png',
        '09d': 'http://openweathermap.org/img/wn/09d@2x.png',
        '10d': 'http://openweathermap.org/img/wn/10d@2x.png',
        '11d': 'http://openweathermap.org/img/wn/11d@2x.png',
        '13d': 'http://openweathermap.org/img/wn/13d@2x.png',
        '50d': 'http://openweathermap.org/img/wn/50d@2x.png',
        '01n': 'http://openweathermap.org/img/wn/01n@2x.png',
        '02n': 'http://openweathermap.org/img/wn/02n@2x.png',
        '03n': 'http://openweathermap.org/img/wn/03n@2x.png',
        '04n': 'http://openweathermap.org/img/wn/04n@2x.png',
        '09n': 'http://openweathermap.org/img/wn/09n@2x.png',
        '10n': 'http://openweathermap.org/img/wn/10n@2x.png',
        '11n': 'http://openweathermap.org/img/wn/11n@2x.png',
        '13n': 'http://openweathermap.org/img/wn/13n@2x.png',
        '50n': 'http://openweathermap.org/img/wn/50n@2x.png',
        
      },
    };
  },
  mounted() {
    // this.loadWeather(localStorage.lat || '3.0008', localStorage.lon || '-5.6789');
    // this.loadWeather(location || 'lagos')
  },
  methods: {
    updateLocation() {
      NProgress.start();
      let loc = this.location || ''
      API.getForecast(loc).then(result => {
        this.forecast = result;
          NProgress.done()
        console.log(JSON.stringify(result));
      });
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
