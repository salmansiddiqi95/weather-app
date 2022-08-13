<template>
  <div class="AppContainer">
    <div class="MainContainer">
      <div class="SearchboxDiv">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <div class="LogoDiv">
        <img src="./assets/weather-logo.png" class="Logo" />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
      <div class="CopyrightAndSocialIconDiv">
        <div class="CopyrightDiv">
          ©{{ new Date().getFullYear() }} All rights reserved.
        </div>
        <div class="SocialIconsDiv">
          <div class="InstagramDiv">
              <a class="ancortag" href="#"><i class="fa fa-instagram"></i></a>
          </div>
          <div class="TwitterDiv">
              <a class="ancortag" href="#"><i class="fa fa-twitter"></i></a>
          </div>
          <div class="LinkedinDiv">
              <a class="ancortag" href="#"><i class="fa fa-linkedin"></i></a>
          </div>
          <div class="CodepenDiv">
              <a class="ancortag" href="#"><i class="fa fa-codepen"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api_key: "e43f94e3e8eb6d6fa0de015d529d855e",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  mounted() {
    let colorCode = [
      "112, 101, 99, 0.7",
      "149, 35, 14, 0.7",
      "24, 48, 24, 0.7",
      "11, 203, 247, 0.7",
      "163, 203, 41, 0.7",
    ];
    let className = document.getElementsByClassName("MainContainer");
    let randomNumber = Math.floor(Math.random() * 5);
    for (let i = 0; i < className.length; i++) {
      className[i].style.background = "rgba(" + colorCode[randomNumber] + ")";
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}
.AppContainer {
  background: url("./assets/pexels-pixabay-209831.jpg");
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.MainContainer {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.SearchboxDiv {
  width: 100%;
  margin-bottom: 30px;
  margin-top: 2%;
}
.SearchboxDiv .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.SearchboxDiv .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.LogoDiv {
  margin: auto;
  position: relative;
  width: 10%;
}
.Logo {
  display: block;
  width: 100%;
  height: auto;
}
.weather-wrap
{
  margin-top: 2%;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.CopyrightDiv {
  float: left;
  color: white;
  margin-top: 6%;
  text-shadow: 0 1px rgba(255, 255, 255, 0.1);
  width: 30%;
}
.CopyrightDiv:hover {
  color: bisque;
}

.InstagramDiv {
  position: absolute;
  line-height: 50px;
  color: white;
  margin-left: 32%;
  margin-top: 2%;
  width: 60%;
  animation: exampleall 1s linear;
}
.TwitterDiv {
  position: absolute;
  line-height: 50px;
  color: white;
  margin-left: 42%;
  margin-top: 2%;
  width: 50%;
  animation: exampleall 1s linear;
}
.LinkedinDiv {
  position: absolute;
  line-height: 50px;
  color: white;
  margin-left: 52%;
  margin-top: 2%;
  width: 40%;
  animation: exampleall 1s linear;
}
.CodepenDiv {
  position: absolute;
  line-height: 50px;
  color: white;
  margin-left: 62%;
  margin-top: 2%;
  width: 30%;
  animation: exampleall 1s linear;
}
.ancortag {
  color: white;
}
.ancortag:hover {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: block;
  color: black;
}
/* Move it (define the animation) */
@keyframes exampleall {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>

