// function to store data in the local storage
function storeData() {
    if (!localStorage.getItem('products'))
      localStorage.setItem("products", JSON.stringify(products));
    if (!localStorage.getItem('cart'))
      localStorage.setItem("cart", JSON.stringify(cart));
    
    console.log("dskojfos");
}
// function to add items to the cart
function storeItem(type, item) {
  let cartArr = JSON.parse(localStorage.getItem(type));
  cartArr.push(item);
  localStorage.setItem(type, JSON.stringify(cartArr));
}