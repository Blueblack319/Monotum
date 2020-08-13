const COORDS = "coords";

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
  } else {
    askForCoords();
  }
};

const init = () => {
  loadCoords();
};
init();
