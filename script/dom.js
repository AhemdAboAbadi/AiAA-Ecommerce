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
  const cartList = document.createElement("div");
  cartList.classList.add("main-page");
  arr.forEach(function (item) {
    const cart = creatCart(item);
    cartList.appendChild(cart);
  });
  return cartList;
}

function creatHome() {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  const cartList = creatCartList([
    {
      id: 0,
      name: "fsd",
      price: 1000,
      category: "Tech",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio animi a, illum sapiente magnam? Incidunt quisquam illo provident, sunt labore nemo sit non cupiditate consequuntur, optio debitis tempore et.",
      imgUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    },
  ]);

  main.appendChild(cartList);
}
