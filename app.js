const checkFunction = () => {
  let dark = document.getElementById("dark-toggle");

  let day = document.getElementById("day");
  let night = document.getElementById("night");

  if (dark.checked === true) {
    day.style.display = "none";
    night.style.display = "block";
  } else {
    day.style.display = "block";
    night.style.display = "none";
  }
}