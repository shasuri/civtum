const apiKey = "272eda4337a5b8f75fae59b2e643815d";
const coords = "coords";

const weather = document.querySelector(".jsWeather");

function getWeather(coordsObj) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}&appid=${apiKey}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            const temperature = jsonData.main.temp;
            const place = jsonData.name;
            weather.innerText = `🌡${temperature}ºC in ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    };

    saveCoords(coordsObj);
    getWeather(coordsObj);
}

function handleGeoError(position) {
    console.log("Can not access your location!");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(coords);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords);
    }
}

function init() {
    loadCoords();
}

init();
