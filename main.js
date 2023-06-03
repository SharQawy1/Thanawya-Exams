//3ama

let aamadownDate = new Date("June 12, 2023 00:00:00");

let counter1 = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDIff = aamadownDate - dateNow;
  if (dateDIff < 0) {
    document.querySelector(
      ".aama .title"
    ).innerHTML = `لقد بدأت امتحانات الثانوية العامة وستنتهي بعد`;
    dateDIff = new Date("July 13, 2023 00:00:00") - dateNow;
  }
  let days = Math.floor(dateDIff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((dateDIff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((dateDIff % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((dateDIff % (1000 * 60)) / 1000);
  document.querySelector(".days1").innerHTML = days;
  document.querySelector(".hours1").innerHTML = hours;
  document.querySelector(".mins1").innerHTML = mins;
  document.querySelector(".secs1").innerHTML = secs;
}, 10);

// Azhar
let azhardownDate = new Date("June 3, 2023 00:00:00");

let counter2 = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDIff = azhardownDate - dateNow;
  if (dateDIff < 0) {
    document.querySelector(
      ".azhar .title"
    ).innerHTML = `لقد بدأت امتحانات الثانوية الأزهرية وستنتهي بعد`;
    dateDIff = new Date("July 12, 2023 00:00:00") - dateNow;
  }
  let days = Math.floor(dateDIff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((dateDIff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((dateDIff % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((dateDIff % (1000 * 60)) / 1000);
  document.querySelector(".days2").innerHTML = days;
  document.querySelector(".hours2").innerHTML = hours;
  document.querySelector(".mins2").innerHTML = mins;
  document.querySelector(".secs2").innerHTML = secs;
}, 10);
