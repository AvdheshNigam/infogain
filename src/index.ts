console.log("running...");
import './css/index.scss';
const cityInput = document.querySelector(".search__input") as HTMLInputElement;
const searchButton = document.querySelector(".search__btn") as HTMLButtonElement;
const currentLoctionButton = document.querySelector(".header__btn") as HTMLButtonElement;
const currentWeaherDiv = document.querySelector(".weather-container__current") as HTMLDivElement;
const loader = document.querySelector(".js-loader") as HTMLDivElement;
const weatherlist = document.querySelector(".weather-container__list") as HTMLUListElement;

const API_KEY = "119dbed2cff683a9f6d4edf84d63836f";

const createWeatherCard = (cityName: any, country: any, weatherItem: any, index: any) => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (index === 0) {
    return `<div class="weather-container__current__details">
      <h2> <span><i>Now </i> ${monthNames[`${new Date((weatherItem.dt_txt).split(" ")[0]).getMonth()}`]} ${weatherItem.dt_txt.split(" ")[0].split("-")[2]}</span>${cityName}, ${country} </h2>
        <h4> <span><img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="" />
          ${(weatherItem.main.temp - 273.15).toFixed(0)}&deg;C </span></h4>
            <p>
            <span><i>Temp: Min </i> ${(weatherItem.main.temp_min - 273.15).toFixed(0)}&deg;C </span >
              <span><i>Max </i>: ${(weatherItem.main.temp_max - 273.15).toFixed(0)}&deg;C</span >
              </p>
              <p>
              <span><i>Wind </i> ${weatherItem.wind.speed} KM </span >
              <span><i>Humidity </i>: ${weatherItem.main.humidity}%</span >
              </p>
              </div>
              <div div div class="weather-container__current__image">
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
    alert(`An Error occured while fetching the data ${error}`)
  })
}

const getCityCoordinates = () => {

  const cityName = cityInput.value.trim();
  if (!cityName) return;
  console.log(cityName);
  const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;



  fetch(GEOCODING_API_URL).then((res) => res.json()).then((data) => {
    console.log(data);
    if (!data.length) {
      return alert(`No coordinates found for ${cityName}`);
    }
    const { name, country, lat, lon } = data[0];
    getWeatherDetails(name, country, lat, lon);

  }).catch((error) => {
    return alert(`An error occured while fetching the data ${error}`)
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
      return alert(`An error occured while fetching the data city!`)
    });
  }, error => {
    console.log(error);
    if (error.code === error.PERMISSION_DENIED) {
      alert("Geolocation request denied. Please reset location permission to grant access again");
    }
  });
}
currentLoctionButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", (e) => e.key === "Enter" && getCityCoordinates());

(() => {
  getUserCoordinates();
})()
