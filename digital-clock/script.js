const clock = document.getElementById("Clock");

function updateClock() {
    const now = new Date(); 
    const hours = now.getHours(); 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);

updateClock();
