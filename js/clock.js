const clockDiv = document.querySelector(".jsClock");
const clockTitle = clockDiv.querySelector(".jsTitle");

function getTime() {
    const date = new Date();

    const rawHour = date.getHours();
    const hours = rawHour < 10 ? "0" + rawHour : rawHour;

    const rawMin = date.getMinutes();
    const minutes = rawMin < 10 ? "0" + rawMin : rawMin;

    const rawSec = date.getSeconds();
    const seconds = rawSec < 10 ? "0" + rawSec : rawSec;

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
