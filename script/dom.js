const searchValue = document.querySelector(".search-input");
const searchStart = document.querySelector(".svg-search-nav");
const containerPopAuto = document.querySelector(".auto-complete-search");
const listAutoComplete = document.querySelector(".list-auto-complete");

let arr = [
  {
    id: 0,
    name: "fsd",
    price: 1000,
    category: "Tech",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
    imgUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
  },
];

function getSelectValue() {
  const listLiAuto = document.querySelector(".list-auto-complete");
  listLiAuto.addEventListener("click", (lin) => {
    let searchSelectAuto = lin.target.textContent;
    searchValue.value = searchSelectAuto;
    containerPopAuto.classList.remove("active");
  });
}

function filterTitleDom() {
  let divFilter = document.createElement("div");
  let svgFilter = document.createElement("img");
  let spanFilter = document.createElement("span");
  divFilter.classList.add("filter-data-search");
  svgFilter.src = "./image/nav/filter.svg";
  spanFilter.textContent = "Filter";
  divFilter.appendChild(svgFilter);
  divFilter.appendChild(spanFilter);
  // sectionFilter.appendChild(divFilter);
  return divFilter;
}

function filterCategoryDom() {
  let divCategory = document.createElement("div");
  let selectCategory = document.createElement("select");
  let selectOption0 = document.createElement("option");
  let selectOption1 = document.createElement("option");
  let selectOption2 = document.createElement("option");
  let selectOption3 = document.createElement("option");
  let selectOption4 = document.createElement("option");
  selectOption0.textContent = "Category";
  selectOption0.setAttribute("disabled", "");
  selectOption0.setAttribute("selected", "");
  selectCategory.appendChild(selectOption0);
  selectOption1.value = "shoes";
  selectOption1.textContent = "shoes";
  selectCategory.appendChild(selectOption1);
  selectOption2.value = "books";
  selectOption2.textContent = "books";
  selectCategory.appendChild(selectOption2);
  selectOption3.value = "Tech";
  selectOption3.textContent = "Tech";
  selectCategory.appendChild(selectOption3);
  selectOption4.value = "furniture";
  selectOption4.textContent = "furniture";
  selectCategory.appendChild(selectOption4);
  divCategory.classList.add("category-filter");
  selectCategory.classList.add("select-category");
  divCategory.appendChild(selectCategory);

  return divCategory;
}

function filterPriceDom() {
  let divPrice = document.createElement("div");
  let selectPrice = document.createElement("select");
  let selectOption0 = document.createElement("option");
  let selectOption1 = document.createElement("option");
  let selectOption2 = document.createElement("option");
  selectOption0.textContent = "Price";
  selectOption0.setAttribute("disabled", "");
  selectOption0.setAttribute("selected", "");
  selectPrice.appendChild(selectOption0);
  selectOption1.value = "min";
  selectOption1.textContent = "min to max";
  selectPrice.appendChild(selectOption1);
  selectOption2.value = "max";
  selectOption2.textContent = "max to min";
  selectPrice.appendChild(selectOption2);
  divPrice.classList.add("price-filter");
  selectPrice.classList.add("select-price");
  divPrice.appendChild(selectPrice);
  return divPrice;
}

function filterStyleShow() {
  let divStyleShow = document.createElement("div");
  let styleList = document.createElement("div");
  let styleGrid = document.createElement("div");
  let imgList = document.createElement("img");
  let imgGrid = document.createElement("img");
  divStyleShow.classList.add("style-show-cards");
  styleList.classList.add("style-list");
  styleGrid.classList.add("style-grid");
  imgList.src = "./image/nav/list.svg";
  imgGrid.src = "./image/nav/grid.svg";
  styleList.appendChild(imgList);
  styleGrid.appendChild(imgGrid);
  divStyleShow.appendChild(styleList);
  divStyleShow.appendChild(styleGrid);
  return divStyleShow;
}

function createFilterSection() {
  const main = document.querySelector("main");
  const divContainer = document.createElement("div");
  divContainer.classList.add("section-filter");
  main.appendChild(divContainer);

  const filterTitle = filterTitleDom();
  divContainer.appendChild(filterTitle);

  const filterCategory = filterCategoryDom();
  divContainer.appendChild(filterCategory);

  const filterPrice = filterPriceDom();
  divContainer.appendChild(filterPrice);

  const filterStyle = filterStyleShow();
  divContainer.appendChild(filterStyle);
}

createFilterSection();

//
