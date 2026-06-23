let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime() {
    let date = new Date();

    // Correct values
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = 30;

    // Correct formulas for clock rotation
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Apply transform
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displaytime, 1000);