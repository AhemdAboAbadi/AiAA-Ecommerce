// slider header start

let card_slider = document.querySelectorAll(".card_slider");
let point_slid = document.querySelectorAll(".point_slid");
let slider_content = document.querySelector(".slider_content");
let points_slid = document.querySelector(".points_slid");

point_slid.forEach((point) => {
  point.addEventListener("click", () => {
    let pointNum = point.getAttribute("data-point");
    points_slid.querySelector(".active").classList.remove("active");
    point.classList.add("active");
    slider_content.querySelector(".active").classList.remove("active");
    card_slider[pointNum].classList.add("active");
  });
});

// auto move slider
let i = 0;
setInterval(autoSlid, 2000);
function autoSlid() {
  points_slid.querySelector(".active").classList.remove("active");
  point_slid[i].classList.add("active");
  slider_content.querySelector(".active").classList.remove("active");
  card_slider[i].classList.add("active");
  i++;
  i = i == 3 ? (i = 0) : i++;
}
