console.log("running...");
import './css/index.scss';
const cityInput = document.querySelector(".search__input") as HTMLInputElement;
const searchButton = document.querySelector(".search__btn") as HTMLButtonElement;
const searchInput = document.querySelector(".search__input") as HTMLButtonElement;
const currentLoctionButton = document.querySelector(".header__btn") as HTMLButtonElement;
const currentWeaherDiv = document.querySelector(".weather-container__current") as HTMLDivElement;
const loader = document.querySelector(".js-loader") as HTMLDivElement;
const weatherlist = document.querySelector(".weather-container__list") as HTMLUListElement;
const errorMessage = document.querySelector(".js-error-msg") as HTMLSpanElement;
const errorDataNotFound = document.querySelector(".js-data-not-found") as HTMLParagraphElement;

const API_KEY = "119dbed2cff683a9f6d4edf84d63836f";

errorMessage.style.display = "none";
errorDataNotFound.style.display = "none";


const createWeatherCard = (cityName: any, country: any, weatherItem: any, index: any) => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const imgName = weatherItem.weather[0].icon === '09d' || weatherItem.weather[0].icon === '10n' ? 'block' : 'none';
  console.log(imgName);

  if (index === 0) {
    return `<div class="weather-container__current__details">
      <h2> <span><i>Now </i> ${monthNames[`${new Date((weatherItem.dt_txt).split(" ")[0]).getMonth()}`]} ${weatherItem.dt_txt.split(" ")[0].split("-")[2]}</span>${cityName}, ${country} </h2>
        <h4><span> ${(weatherItem.main.temp - 273.15).toFixed(0)}&deg;C </span></h4>
            <p>
            <span><i>Temp: Min </i> ${(weatherItem.main.temp_min - 273.15).toFixed(0)}&deg;C </span >
              <span><i>Max </i>: ${(weatherItem.main.temp_max - 273.15).toFixed(0)}&deg;C</span >
              </p>
              <p>
              <span><i>Wind </i> ${weatherItem.wind.speed} KM </span >
              <span><i>Humidity </i>: ${weatherItem.main.humidity}%</span >
              </p>
              </div>
                <div class="container-rain" style="display: ${imgName}">
                  <div class="container-rain__cloud">
                    <div class="container-rain__cloud__rain">
                      <span style="--i:11"></span>
                      <span style="--i:12"></span>
                      <span style="--i:10"></span>
                      <span style="--i:14"></span>
                      <span style="--i:18"></span>
                      <span style="--i:16"></span>
                      <span style="--i:19"></span>
                      <span style="--i:20"></span>
                      <span style="--i:19"></span>
                      <span style="--i:14"></span>
                      <span style="--i:18"></span>
                      <span style="--i:11"></span>
                      <span style="--i:13"></span>
                      <span style="--i:15"></span>
                      <span style="--i:17"></span>
                    </div>
                  </div>
              </div>
              <div class="weather-container__current__image">
              <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="" />
                  <h4>${weatherItem.weather[0].description} </h4>
                    </div>`
  } else {
    return `<li class="weather-container__list__item">
              <div class="weather-container__list__item__card">

                <h2><span>${dayNames[`${new Date((weatherItem.dt_txt).split(" ")[0]).getDay()}`]}, ${monthNames[`${new Date((weatherItem.dt_txt).split(" ")[0]).getMonth()}`]}, ${weatherItem.dt_txt.split(" ")[0].split("-")[2]}</span> </h2>
                <h4>${(weatherItem.main.temp - 273.15).toFixed(0)}&deg;C <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt=""  /></h4>
                
                <p>
                  <span><i>Wind</i> ${weatherItem.wind.speed} KM </span> 
                  <span><i>Humidity</i>: ${weatherItem.main.humidity}%</span>
                </p>

                <div class="container-rain" style="display: ${imgName}; position: absolute; z-index: 99999; top: 0;">
                  <div class="container-rain__cloud">
                    <div class="container-rain__cloud__rain">
                      <span style="--i:11"></span>
                      <span style="--i:12"></span>
                      <span style="--i:10"></span>
                      <span style="--i:14"></span>
                      <span style="--i:18"></span>
                      <span style="--i:16"></span>
                      <span style="--i:19"></span>
                      <span style="--i:20"></span>
                      <span style="--i:19"></span>
                      <span style="--i:14"></span>
                      <span style="--i:18"></span>
                      <span style="--i:11"></span>
                      <span style="--i:13"></span>
                      <span style="--i:15"></span>
                      <span style="--i:17"></span>
                    </div>
                  </div> 
              </div>
                
          </li>`

  }
}

const getWeatherDetails = (cityName: any, country: any, lat: any, lon: any) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  loader.style.display = "block";
  fetch(WEATHER_API_URL).then((res) => res.json()).then((data) => {
    loader.style.display = "none";
    console.log("data", data);

    const qniqueForcastDays: any = [];
    const fiveDaysForecast = data.list.filter((forecast: any) => {
      const forecastDate = new Date(forecast.dt_txt).getDate();
      if (!qniqueForcastDays.includes(forecastDate)) {
        return qniqueForcastDays.push(forecastDate);
      }
    });

    cityInput.value = "";
    weatherlist.innerHTML = "";
    currentWeaherDiv.innerHTML = "";

    console.log(fiveDaysForecast);
    fiveDaysForecast.forEach((weatherItem: any, index: any) => {
      if (index === 0) {
        currentWeaherDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, country, weatherItem, index));
      } else {
        weatherlist.insertAdjacentHTML("beforeend", createWeatherCard(cityName, country, weatherItem, index));
      }
    })

  }).catch((error) => {
    errorDataNotFound.style.display = "block";
    errorDataNotFound.innerText = `An Error occured while fetching the data ${error}`;
  })
}

const getCityCoordinates = () => {

  const cityName = cityInput.value.trim();
  if (cityName.length === 0) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
  if (!cityName) return;
  console.log(cityName);
  const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;



  fetch(GEOCODING_API_URL).then((res) => res.json()).then((data) => {
    console.log(data);
    if (!data.length) {
      errorDataNotFound.style.display = "block";
      return errorDataNotFound.innerText = `Not found. To make search more precise put the ${cityName} city's name`;
    }
    const { name, country, lat, lon } = data[0];
    getWeatherDetails(name, country, lat, lon);

  }).catch((error) => {
    errorDataNotFound.style.display = "block";
    return errorDataNotFound.innerText = `An error occured while fetching the data ${error}`;

  })
}

const getUserCoordinates = () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
    fetch(REVERSE_GEOCODING_URL).then((res) => res.json()).then((data) => {
      console.log(data);
      const { name, country } = data[0];
      console.log(name, country);
      getWeatherDetails(name, country, latitude, longitude)

    }).catch((error) => {
      errorDataNotFound.style.display = "block";
      return errorDataNotFound.innerText = `An error occured while fetching the data city! ${error.message}`;
    });
  }, error => {
    console.log(error);
    if (error.code === error.PERMISSION_DENIED) {
      errorDataNotFound.style.display = "block";
      errorDataNotFound.innerText = `${error.message}`;
      setTimeout(() => {
        return errorDataNotFound.innerText = `Geolocation request denied. Please reset location permission to grant access again!`;
      }, 3000)
    }
  });
}

const validation = () => {
  const cityName = cityInput.value.trim();
  if (cityName.length === 0) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    errorDataNotFound.style.display = "none";
  }
}
currentLoctionButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
searchInput.addEventListener("keyup", validation);
cityInput.addEventListener("keyup", (e) => e.key === "Enter" && getCityCoordinates());

(() => {
  getUserCoordinates();
})()
