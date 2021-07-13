const mainContent = document.querySelector("main");


// const sellerSection = document.createElement("section");
// sellerSection.classList = "seller-section-grid";
// mainContent.appendChild(sellerSection);


// Create (Add Product Button)
const addProductBtn = document.createElement("button");
addProductBtn.classList = "add-product-btn";
addProductBtn.setAttribute("id", "addProductBtn")
addProductBtn.textContent = "Add Product";
mainContent.appendChild(addProductBtn);

const sellerProducts = document.createElement("div");
sellerProducts.classList = "seller-products";
// sellerSection.appendChild(sellerProducts);




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
  sellerProductTitle.textContent = item.name
  sellerProductCat.textContent = item.category;
  sellerProductPrice.textContent = item.price;
  sellerProductDesc.textContent = item.description;
  sellerProductImg.setAttribute("src", item.imgUrl);


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
  // while (mainContent.firstChild) {
  //   mainContent.removeChild(mainContent.lastChild);
  // }
  const sellerProduct = createProductGrid(getItem("products"));

  mainContent.appendChild(sellerProduct);
}

