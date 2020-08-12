const clock = document.querySelector(".js-clock");

const getTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerText = `${hours >= 10 ? hours : `0${hours}`} : ${
    minutes >= 10 ? minutes : `0${minutes}`
  } : ${seconds >= 10 ? seconds : `0${seconds}`}`;
};

const init = () => {
  getTime();
  setInterval(getTime, 1000);
};
init();
