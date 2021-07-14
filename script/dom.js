const mainContent = document.querySelector("main");


const sellerSection = document.createElement("section");
sellerSection.classList = "seller-section-grid";
mainContent.appendChild(sellerSection);

// Create (Add Product Button)
const addProductBtn = document.createElement("button");
addProductBtn.classList = "add-product-btn";
addProductBtn.setAttribute("id", "addProductBtn")
addProductBtn.textContent = "Add Product";
sellerSection.appendChild(addProductBtn);

const sellerProducts = document.createElement("div");
sellerProducts.classList = "seller-products";
sellerSection.appendChild(sellerProducts);



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
  sellerProduct.setAttribute("id", item.id)
  sellerProductTitle.textContent = item.name
  sellerProductCat.textContent = item.category;
  sellerProductPrice.textContent = item.price;
  sellerProductDesc.textContent = item.description;
  sellerProductImg.setAttribute("src", item.imgUrl);
  productRemove.setAttribute("id", item.id)

  // Event listener for remove button
  productRemove.addEventListener("click", removeSelectedItem)


  return sellerProduct;

}


function createProductGrid(arr) {
  arr.forEach(function (item) {
    const product = sellerProductGrid(item);
    sellerProducts.appendChild(product);
  });
  return sellerProducts;
}

// console.dir(mainContent.children)
function createSellerPage() {
  // for (let i = 0; i < mainContent.children.length; i++) {
  //   // console.dir(mainContent.children[i].id);
  //   if (mainContent.children[i].id !== "addProductBtn") {
  //     mainContent.removeChild(mainContent.children[i].id !== "addProductBtn");
  //   }
  // }
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
  const sellerProduct = createProductGrid(getItem("products"));

  mainContent.appendChild(sellerSection);

}

// Remove product with remove button
function removeSelectedItem(e) {
  e.target.parentElement.parentElement.parentElement.remove();
  const itemId = e.target.parentNode.parentNode.parentNode.id;

  removeItem("products", itemId)
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
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  const cartList = creatCartList(getItem("products"));
  // const cartList = creatCartListAsList(getItem("products"));

  main.appendChild(cartList);
}

