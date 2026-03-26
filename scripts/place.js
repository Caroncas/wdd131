const windChillSpan = document.querySelector("#wind-chill");
const temperature = 50;
const windSpeed = 12;

if (temperature <= 50 && windSpeed > 3) {
    windChillSpan.innerHTML = ` <span>${calculateWindChill(temperature, windSpeed).toFixed(1)}°F</span>`
}
else {
    windChillSpan.innerHTML = `<span>N/A</span>`
}

function calculateWindChill(temperature, windSpeed) {
    const windChillIndex = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16))
    // const windChill = temperature + windChillIndex;
    return windChillIndex;
}