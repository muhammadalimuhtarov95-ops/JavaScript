function clock() {
  let a = new Date();

  let hour = a.getHours();
  let minutes = a.getMinutes();
  let second = a.getSeconds();
  let milli = a.getMilliseconds();

  let day = myDate.getDay();
  let moth = myDate.getmoth();
  let year = myDate.getFullYear();

  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  second = String(second).padStart(2, "0");
  milli = String(milli).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${day} : ${minutes} : ${second} : ${milli}`;

  document.getElementById("year").textContent = 
  `${day} : ${moth} : ${year}`;
}
clock();
setInterval(clock, 1);
