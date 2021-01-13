let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDegs = ( sec / 60 ) * 360 + 90;
    secondHand.style.transform = `rotate(${secDegs}deg)`;

    const min = now.getMinutes();
    const minDegs = ((min/ 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegs}deg)`;

    const hour = now.getHours();
    const hourDegs = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegs}deg)`;
}

setInterval(setDate, 1000);