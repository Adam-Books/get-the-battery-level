theme.onclick = () => {
  theme.classList.toggle("fa-sun");
  if (theme.classList.contains("fa-sun"))
    document.querySelector("body").classList.add("active");
  else document.querySelector("body").classList.remove("active");
};

navigator.getBattery().then((battery) => {
  percentage.style.width = battery.level * 100 + "%";
  percent.innerHTML = Math.round(battery.level * 100) + "%";
});
