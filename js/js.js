let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boot = document.getElementById("boot");
let art = document.querySelector(".art");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value + "px";
  boot.style.left = value * 3 + "px";
  boot.style.top = value + "px";
  art.style.fontSize = value + "px";
  if (scrollY >= 70) {
    art.style.fontSize = 70 + "px";
    art.style.position = "fixed";
    if (scrollY >= 292) {
      art.style.display = "none";
    } else {
      art.style.display = "block";
    }
    if (scrollY >= 100) {
      document.querySelector(".main").style.background =
        "linear-gradient(#1bb6bf ,rgb(73, 4, 73))"
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(rgb(73, 4, 73), rgb(60, 35, 83))"
    }
  }
};
