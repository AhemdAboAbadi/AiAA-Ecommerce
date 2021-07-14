// function to store data in the local storage
function storeData() {
  if (!localStorage.getItem("products"))
    localStorage.setItem("products", JSON.stringify(products));
  if (!localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify(cart));
}

// function to add items to the cart
function storeItem(type, item) {
  const dataArray = JSON.parse(localStorage.getItem(type));
  item.id = dataArray[dataArray.length - 1].id + 1;
  dataArray.push(item);
  localStorage.setItem(type, JSON.stringify(dataArray));
}
// function to remove item
function getItem(listType) {
  return JSON.parse(localStorage.getItem(listType));
}

// function to remove item
function removeItem(listType, id) {
  const dataArray = JSON.parse(localStorage.getItem(listType));
  const dataFiltered = dataArray.filter(function (item) {
    return item.id != id;
  });
  localStorage.setItem(listType, JSON.stringify(dataFiltered));
}

// function to edit products
function editItem(listType, item) {
  const productArray = JSON.parse(localStorage.getItem(listType));
  const newArray = productArray.map(function (ele) {
    return ele.id === item.id ? item : ele;
  });
  localStorage.setItem(listType, JSON.stringify(newArray));
}

// function to get products
function getItem(listType) {
  return JSON.parse(localStorage.getItem(listType));
}