const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const date = new Date();

monthNameEl.textContent = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.textContent = date.toLocaleString("en", {
  weekday: "long",
});

dayNumberEl.textContent = date.getDate();

yearEl.textContent = date.getFullYear();
