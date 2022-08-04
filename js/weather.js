const API_KEY = "259669ffb94bb724fea6a5208e336d07";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const degree = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      const icon = document.createElement("i");
      weather.innerText = `${data.weather[0].main}/`;
      degree.innerText = `${data.main.temp}°/`;
      city.innerText = `${data.name}`;
      if (data.weather[0].main === "Clouds") {
        weather.innerHTML = '<i class="fa-solid fa-cloud"></i> ';
        degree.innerText = `/${data.main.temp}°/`;
        city.innerText = `${data.name}`;
      } else if (data.weather[0].main === "Clear") {
        weather.innerHTML = '<i class="fa-solid fa-sun-bright"></i> ';
        degree.innerText = `/${data.main.temp}°/`;
        city.innerText = `${data.name}`;
      } else if (data.weather[0].main === "Rain") {
        weather.innerHTML = '<i class="fa-regular fa-cloud-rain"></i>';
        degree.innerText = `/${data.main.temp}°/`;
        city.innerText = `${data.name}`;
      }
    });
}

function onGeoError() {
  alert("위치를 확인 할 수 없습니다. 위치설정을 확인해주세요 :( ");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
