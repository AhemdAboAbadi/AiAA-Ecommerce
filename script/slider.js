// slider header start

let card_slider = document.querySelectorAll(".card_slider");
let point_slid = document.querySelectorAll(".point_slid");
let slider_content = document.querySelector(".slider_content");
let points_slid = document.querySelector(".points_slid");

point_slid.forEach(function (point) {
  point.addEventListener("click", function () {
    let pointNum = point.getAttribute("data-point");
    points_slid.querySelector(".active").classList.remove("active");
    point.classList.add("active");
    slider_content.querySelector(".active").classList.remove("active");
    card_slider[pointNum].classList.add("active");
  });
});

// auto move slider
let i = 0;
setInterval(autoSlid, 3000);
function autoSlid() {
  points_slid.querySelector(".active").classList.remove("active");
  point_slid[i].classList.add("active");
  slider_content.querySelector(".active").classList.remove("active");
  card_slider[i].classList.add("active");
  i++;
  i = i == 5 ? (i = 0) : i++;
}

//for show btn scrool to top and event
const pop_up_to_top = document.querySelector(".pop_up_to_top");
window.addEventListener("scroll", function () {
  pop_up_to_top.classList.toggle("active", window.scrollY > 400);
});

pop_up_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
