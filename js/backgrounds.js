const images = [
  "pexels-jakub-novacek-924824.jpg",
  "pexels-piccinng-3075993.jpg",
  "upsidedown.jpg",
  "swing.jpg",
  "1210774.jpeg",
  "thumb-1920-1185634.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const BackgroundImage = document.createElement("img");

BackgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(BackgroundImage);
