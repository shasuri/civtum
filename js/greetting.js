const form = document.querySelector(".jsForm");
const input = form.querySelector("input");
const greetting = document.querySelector(".jsGreetting");

const user = "currentUser";
const show = "show";

function paintName(text) {
    form.classList.remove(show);
    greetting.classList.add(show);
    greetting.innerText = `Hello, ${text}!`;
}

function askForName() {
    form.classList.add(show);
    form.addEventListener("submit", handleSubmit);
}

function saveName(text) {
    localStorage.setItem(user, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;

    paintName(currentValue);
    saveName(currentValue);
}

function loadName() {
    const currentUser = localStorage.getItem(user);

    if (currentUser === null) {
        askForName();
    } else {
        paintName(currentUser);
    }
}
function init() {
    loadName();
}

init();
