const clock = document.querySelector(".js-clock");

const getTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  clock.innerText = `${hours >= 10 ? hours : `0${hours}`}:${
    minutes >= 10 ? minutes : `0${minutes}`
  }`;
};

const init = () => {
  getTime();
  setInterval(getTime, 1000);
};
init();
