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

// function to remove item
function removeItem (item){
    let cartArr2 = JSON.parse(localStorage.getItem('cart'))
    let cartFilter = cartArr2.filter(function(i){
        return cartArr2[i].id != item.id

    })
}