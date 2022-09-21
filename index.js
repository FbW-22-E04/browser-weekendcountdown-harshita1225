const button = document.querySelector("button");
const username = document.querySelector("#username");
const form = document.querySelector("form");
const message = document.querySelector(".message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = weekendCounter(username.value);
});

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function weekendCounter(name) {
  const d = new Date();
  let day = d.getDay();
  let dayname = weekday[d.getDay() - 1];

  let daysLeft = 5 - day;
  return `Hello ${name}!! Today is ${dayname}. So you have ${daysLeft} days left for Weekend !! `;
}
