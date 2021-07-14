const searchValue = document.querySelector(".search-input");
const searchStart = document.querySelector(".svg-search-nav");
const containerPopAuto = document.querySelector(".auto-complete-search");
const listAutoComplete = document.querySelector(".list-auto-complete");
const sellerBtn = document.querySelector(".btn-seller-nav button");
let isAdd = false;
let isList = false;
let editId;

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

// Create (Add Product Button)
function createAddButton() {
  const addProductBtn = document.createElement("button");
  addProductBtn.classList = "add-product-btn";
  addProductBtn.setAttribute("id", "addProductBtn");
  addProductBtn.textContent = "Add Product";
  addProductBtn.addEventListener("click", () => {
    isAdd = true;
    addFormContainer.classList.add("active");
    contentHider.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  return addProductBtn;
}

function sellerProductGrid(item) {
  // Create seller product
  const sellerProduct = document.createElement("div");
  const sellerProductImage = document.createElement("div");
  const sellerProductImg = document.createElement("img");
  const sellerProductDetails = document.createElement("div");
  const sellerProductTitle = document.createElement("h3");
  const sellerProductEditRemove = document.createElement("div");
  const productEdit = document.createElement("button");
  const productRemove = document.createElement("button");
  const sellerProductMeta = document.createElement("div");
  const sellerProductCat = document.createElement("span");
  const sellerProductPrice = document.createElement("span");
  const sellerProductDesc = document.createElement("p");

  // Add class for every Elements
  sellerProduct.classList = "seller-product";
  sellerProductImage.classList = "seller-product-image";
  sellerProductDetails.classList = "seller-product-details";
  sellerProductTitle.classList = "seller-product-title";
  sellerProductMeta.classList = "seller-product-meta";
  sellerProductCat.classList = "seller-product-cat";
  sellerProductPrice.classList = "seller-product-price";
  sellerProductDesc.classList = "seller-product-desc";
  sellerProductEditRemove.classList = "seller-product-edit-remove";
  productEdit.classList = "product-edit";
  productRemove.classList = "product-remove";
  productEdit.addEventListener("click", (e) => {
    isAdd = false;
    editId = e.target.parentNode.parentNode.parentNode.id;
    addFormContainer.classList.add("active");
    contentHider.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Append child to parents
  sellerProduct.appendChild(sellerProductImage);
  sellerProductDetails.appendChild(sellerProductEditRemove);
  sellerProductEditRemove.appendChild(productEdit);
  sellerProductEditRemove.appendChild(productRemove);
  sellerProductImage.appendChild(sellerProductImg);
  sellerProduct.appendChild(sellerProductDetails);
  sellerProductDetails.appendChild(sellerProductTitle);
  sellerProductDetails.appendChild(sellerProductMeta);
  sellerProductMeta.appendChild(sellerProductCat);
  sellerProductMeta.appendChild(sellerProductPrice);
  sellerProductDetails.appendChild(sellerProductDesc);

  // Fill data to elements
  sellerProduct.setAttribute("id", item.id);
  sellerProductTitle.textContent = item.name;
  sellerProductCat.textContent = item.category;
  sellerProductPrice.textContent = item.price;
  sellerProductDesc.textContent = item.description;
  sellerProductImg.setAttribute("src", item.imgUrl);
  productRemove.setAttribute("id", item.id);

  // Event listener for remove button
  productRemove.addEventListener("click", removeSelectedItem);

  return sellerProduct;
}

function createProductGrid(arr) {
  const sellerProducts = document.createElement("div");
  sellerProducts.classList = "seller-products";

  arr.forEach(function (item) {
    const product = sellerProductGrid(item);
    sellerProducts.appendChild(product);
  });
  return sellerProducts;
}

// Remove product with remove button
function removeSelectedItem(e) {
  e.target.parentElement.parentElement.parentElement.remove();
  const itemId = e.target.parentNode.parentNode.parentNode.id;

  removeItem("products", itemId);
}

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

  cartTag.appendChild(document.createTextNode(item.name));
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

  cartTagList.appendChild(document.createTextNode(item.name));
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

// Create Home Page
function creatHome() {
  const main = document.querySelector("main");

  removeChild(main);
  createFilterSection();

  const cartList = creatCartList(getItem("products"));
  main.appendChild(cartList);

  sellerBtn.textContent = "I'm a Seller";

  sellerBtn.addEventListener("click", function () {
    createSellerPage();
  });
}

// Create Seller Page
function createSellerPage() {
  const mainContent = document.querySelector("main");

  removeChild(mainContent);

  const sellerSection = document.createElement("section");
  sellerSection.classList = "seller-section-grid";

  const sellerProducts = createProductGrid(getItem("products"));
  const addButton = createAddButton();

  sellerSection.appendChild(addButton);
  sellerSection.appendChild(sellerProducts);
  mainContent.appendChild(sellerSection);

  sellerBtn.textContent = "All Products";

  sellerBtn.addEventListener("click", function () {
    creatHome();
  });
}
// add card eventlistener
const saveButton = document.querySelector(".save-button");
const cancelBtn = document.querySelector(".cancel-button");
saveButton.addEventListener("click", () => {
  if (isAdd) {
    const cardObject = createCardObject();
    document.body.style.overflow = "auto";
    storeItem("products", cardObject);
  } else {
    const object = createCardObject(parseInt(editId));
    editItem("products", object);
  }
  addFormContainer.classList.remove("active");
  contentHider.classList.remove("active");
});
// function to create object
function createCardObject(id) {
  const saveBtn = document.querySelector(".save-button");
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const photoUrl = document.getElementById("photo");
  const detailsInput = document.getElementById("details");
  const categories = document.getElementById("categories");
  const categoryText = categories.options[categories.selectedIndex].text;
  let cardObject = {};
  cardObject.id = id;
  cardObject.name = nameInput.value;
  cardObject.price = priceInput.value;
  cardObject.category = categoryText;
  cardObject.description = detailsInput.value;
  cardObject.imgUrl = photoUrl.value;
  return cardObject;
}
const addFormContainer = document.querySelector(".add-form-container");
const contentHider = document.querySelector(".content-hider");
const xBtn = document.querySelector(".add-form-container .fa-times");
xBtn.addEventListener("click", () => {
  addFormContainer.classList.remove("active");
  contentHider.classList.remove("active");
  document.body.style.overflow = "auto";
});
cancelBtn.addEventListener("click", () => {
  addFormContainer.classList.remove("active");
  contentHider.classList.remove("active");
  document.body.style.overflow = "auto";
});
