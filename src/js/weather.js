const weather = document.querySelector(".js-weather");

const COORDS = "coords",
  API_KEY = "101eec8572541d1008ab0b19a930bf3e";

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const temp = response.main.temp;
      const city = response.name;
      weather.innerText = `${temp}° @ ${city}`;
    });
};

const saveCoords = (coords) => {
  localStorage.setItem(COORDS, JSON.stringify(coords));
};

const handleGeoSuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude,
  };
  saveCoords(coords);
  getWeather(latitude, longitude);
};

const handleGeoError = () => {
  console.log("Cant access your geo location.");
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords) {
    askForCoords();
  } else {
    const latitude = position.coords.latitude;
    const longitude = positoin.coords.longitude;
    getWeather(latitude, longitude);
  }
};

const init = () => {
  loadCoords();
};
init();
