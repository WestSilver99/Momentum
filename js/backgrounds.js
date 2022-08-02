const images = [
  "nick_wilde_judy_hopps_zootopia-wide.jpg",
  "pexels-jakub-novacek-924824.jpg",
  "pexels-piccinng-3075993.jpg",
  "upsidedown.jpg",
  "swing.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const BackgroundImage = document.createElement("img");

BackgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(BackgroundImage);
