const body = document.querySelector("body");

const IMAGES = 5;

const paintImage = (number) => {
  const image = new Image();
  image.src = `img/${number}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
};

const getRandom = () => {
  const number = Math.floor(Math.random() * IMAGES) + 1;
  return number;
};

const init = () => {
  const number = getRandom();
  paintImage(number);
};
init();
