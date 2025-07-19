function displayDate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
}

function showCurrentMilliseconds() {
  let millisecondsElement = document.querySelector("#milliseconds");
  let currentDate = new Date();
  millisecondsElement.innerHTML = currentDate.getMilliseconds();
}

setTimeout(displayDate, 5000);

setInterval(showCurrentMilliseconds, 1);
