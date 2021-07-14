const searchValue = document.querySelector(".search-input");
const searchStart = document.querySelector(".svg-search-nav");
const containerPopAuto = document.querySelector(".auto-complete-search");
const listAutoComplete = document.querySelector(".list-auto-complete");
let isList = false;

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

  if (isList) {
    styleList.classList.add("active");
  } else {
    styleGrid.classList.add("active");
  }

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

//
function creatCart(item) {
  const cartContainer = document.createElement("div");
  const cartImg = document.createElement("img");
  const cartTag = document.createElement("h4");
  const cartPrice = document.createElement("span");
  const cartDescriptionTitle = document.createElement("p");
  const cartDescription = document.createElement("p");

  cartContainer.classList.add("main-container");
  cartContainer.id = item.id;
  cartImg.classList.add("main-img");
  cartTag.classList.add("main-h4");
  cartPrice.classList.add("main-price");
  cartDescriptionTitle.classList.add("main-description");
  cartDescription.classList.add("main-details");

  cartTag.appendChild(document.createTextNode(item.category));
  cartDescriptionTitle.appendChild(document.createTextNode("Description"));
  cartImg.setAttribute("src", item.imgUrl);
  cartDescription.appendChild(document.createTextNode(item.description));
  cartPrice.appendChild(document.createTextNode(item.price));

  cartContainer.appendChild(cartImg);
  cartContainer.appendChild(cartTag);
  cartContainer.appendChild(cartPrice);
  cartContainer.appendChild(cartDescriptionTitle);
  cartContainer.appendChild(cartDescription);

  return cartContainer;
}

function creatCartList(arr) {
  const cartList = document.createElement("section"); //was a div
  cartList.classList.add("main-page");
  arr.forEach(function (item) {
    const cart = creatCart(item);
    cartList.appendChild(cart);
  });
  return cartList;
}

/////////////////////////////////////////////////////////////////////////////////////////

function creatCartAsList(item) {
  const cartMainContainerList = document.createElement("div");
  const cartContainerList = document.createElement("div");
  const cartImgList = document.createElement("img");
  const cartTagList = document.createElement("h4");
  const cartPriceList = document.createElement("span");
  const cartDescriptionTitleList = document.createElement("p");
  const cartDescriptionList = document.createElement("p");

  cartMainContainerList.classList.add("main-page-list");
  cartContainerList.classList.add("div-main-list");
  cartContainerList.id = item.id;
  cartImgList.classList.add("main-img-list");
  cartTagList.classList.add("main-h4-list");
  cartPriceList.classList.add("main-price-list");
  cartDescriptionTitleList.classList.add("main-description-list");
  cartDescriptionList.classList.add("main-details-list");

  cartTagList.appendChild(document.createTextNode(item.category));
  cartDescriptionTitleList.appendChild(document.createTextNode("Description"));
  cartImgList.setAttribute("src", item.imgUrl);
  cartDescriptionList.appendChild(document.createTextNode(item.description));
  cartPriceList.appendChild(document.createTextNode(item.price));

  cartContainerList.appendChild(cartTagList);
  cartContainerList.appendChild(cartPriceList);
  cartContainerList.appendChild(cartDescriptionTitleList);
  cartContainerList.appendChild(cartDescriptionList);

  cartMainContainerList.appendChild(cartImgList);
  cartMainContainerList.appendChild(cartContainerList);

  return cartMainContainerList;
}

function creatCartListAsList(arr) {
  const sectionContainerList = document.createElement("section");
  sectionContainerList.classList.add("container-cart");
  arr.forEach((item) => {
    const cart = creatCartAsList(item);
    sectionContainerList.appendChild(cart);
  });
  return sectionContainerList;
}

function creatHome() {
  const main = document.querySelector("main");

  removeChild(main);
  createFilterSection();

  const cartList = creatCartList(getItem("products"));
  // const cartList = creatCartListAsList(getItem("products"));
  main.appendChild(cartList);
}
