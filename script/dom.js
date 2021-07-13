const mainContent = document.querySelector("main");

const sellerSection = document.createElement("section");
sellerSection.classList = "seller-section";
mainContent.appendChild(sellerSection);

// Create (Add Product Button)
const addProductBtn = document.createElement("button");
addProductBtn.classList = "add-product-btn";
addProductBtn.textContent = "Add Product";
mainContent.appendChild(addProductBtn);


