let apiKey = "b2a5adcct04b33178913oc335f405433";

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temperature");

  let city = searchInputElement.value;
  cityElement.innerHTML = city;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let temperature = data.temperature.current;
      let roundedTemperature = Math.round(temperature);
      console.log("Rounded temperature:", roundedTemperature);
      temperatureElement.innerHTML = `${roundedTemperature}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      temperatureElement.innerHTML = "Error fetching temperature";
    });
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
