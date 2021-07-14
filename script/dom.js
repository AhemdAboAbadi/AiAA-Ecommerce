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
//   const cartList = creatCartList(getItem("products"));
  const cartList = creatCartListAsList(getItem("products"));

  main.appendChild(cartList);
}
 // add card eventlistener
 const saveButton = document.querySelector('.save-button')
 const cancelBtn = document.querySelector('.cancel-button')
 saveButton.addEventListener('click', ()=>{
    const cardObject = createCardObject()
    storeItem('products', cardObject)
    addFormContainer.classList.remove('active')
    contentHider.classList.remove('active')

 })
 // function to create object
function createCardObject (){
    const saveBtn = document.querySelector('.save-button')
    const nameInput = document.getElementById('name')
    const priceInput = document.getElementById('price')
    const photoUrl = document.getElementById('photo')
    const detailsInput = document.getElementById('details')
    const categories = document.getElementById('categories')
    const categoryText = categories.options[categories.selectedIndex].text
    let cardObject = {}
    cardObject.name = nameInput.value
    cardObject.price = priceInput.value
    cardObject.category = categoryText
    cardObject.description = detailsInput.value
    cardObject.imgUrl = photoUrl.value
    return cardObject
}  
 const addFormContainer = document.querySelector('.add-form-container')
 const contentHider = document.querySelector('.content-hider')
 const xBtn = document.querySelector('.add-form-container .fa-times')
 xBtn.addEventListener('click',()=>{
     addFormContainer.classList.remove('active')
     contentHider.classList.remove('active')
 })
 cancelBtn.addEventListener('click',()=>{
    addFormContainer.classList.remove('active')
    contentHider.classList.remove('active')
})