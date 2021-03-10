const body = document.querySelector("body");
const nonEventArea = document.querySelector(".nonEventArea");

const bgNum = 51;

function paintImage(imgNum) {
    body.style.backgroundImage = `url(./photo/civilization5_wonders/${imgNum})`;
    body.addEventListener("click", rerollBg);
}

function genRandom() {
    return Math.floor(Math.random() * bgNum);
}

function rerollBg(event) {
    console.log(event.target);

    if (
        !nonEventArea.contains(event.target) &&
        event.target.className !== "btn"
    ) {
        body.style.animation = "none";
        body.offsetHeight;
        body.style.animation = null;
        paintImage(genRandom());
    }
}

function init() {
    const photoNum = genRandom();
    paintImage(photoNum);
}

init();
