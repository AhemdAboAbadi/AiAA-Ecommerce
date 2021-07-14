storeData();
creatHome();

let viewDataArray = getItem("products");

//for auto complete user
searchValue.addEventListener("keyup", () => {
  removeChild(listAutoComplete);
  const wordAuto = searchValue.value.toLowerCase();

  const aginArr = [];
  for (let i = 0; i < autoComplete.length; i++) {
    if (autoComplete[i].startsWith(wordAuto) && aginArr.length <= 5) {
      aginArr.push(autoComplete[i]);
    }
    containerPopAuto.classList.add("active");
  }

  for (let x = 0; x < aginArr.length; x++) {
    const li = document.createElement("li");
    li.textContent = aginArr[x];
    listAutoComplete.appendChild(li);
  }

  if (wordAuto.length < 1) {
    containerPopAuto.classList.remove("active");
  }
  getSelectValue();
});
// for search user
searchStart.addEventListener("click", () => {
  sliderContainer.remove();
  let cardForSearched = [];
  containerPopAuto.classList.remove("active");
  let wrdSearched = searchValue.value.toLowerCase().trim();

  let arr = getItem("products");

  searchValue.value = "";
  const cardForSearched = cardFilter(arr, wrdSearched );
  // arr.forEach((item) => {
  //   if (
  //     item.name.toLowerCase().includes(wrdSearched) ||
  //     item.description.toLowerCase().includes(wrdSearched)
  //   ) {
  //     cardForSearched.push(item);
  //   }
  // });

  const main = document.querySelector("main");
  removeChild(main);
  createFilterSection();
  callCreateEventsFilter();
  viewDataArray = cardForSearched;
  // const cartList = creatCartList(cardForSearched);
  const cartList = creatCartListAsList(cardForSearched);
  main.appendChild(cartList);
});

function callCreateEventsFilter() {
  const styleGrid = document.querySelector(".style-grid");
  const styleList = document.querySelector(".style-list");
  const main = document.querySelector("main");

  styleList.addEventListener("click", () => {
    isList = true;
    const mainPage = document.querySelector(".main-page");
    main.removeChild(mainPage);
    const cartList = creatCartListAsList(viewDataArray);
    main.appendChild(cartList);
    styleList.classList.add("active");
    styleGrid.classList.remove("active");
  });

  styleGrid.addEventListener("click", () => {
    isList = false;
    const containerCart = document.querySelector(".container-cart");
    main.removeChild(containerCart);
    const cartList = creatCartList(viewDataArray);
    main.appendChild(cartList);
    styleGrid.classList.add("active");
    styleList.classList.remove("active");
  });

  sortFilterCategory();
  sortFilterPrice();
}

callCreateEventsFilter();

const logoNav = document.querySelector(".logo-nav");
logoNav.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function sortFilterPrice() {
  document.querySelector(".select-price").addEventListener("change", (e) => {
    const minMax = e.target.value;
    const byDate = viewDataArray.slice(0);
    if (minMax == "min") {
      byDate.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      byDate.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    viewDataArray = byDate;
    const main = document.querySelector("main");
    removeChild(main);
    createFilterSection();
    callCreateEventsFilter();
    let cartList;
    if (isList) {
      cartList = creatCartListAsList(byDate);
    } else {
      cartList = creatCartList(byDate);
    }

    main.appendChild(cartList);
  });
}

function sortFilterCategory() {
  document.querySelector(".select-category").addEventListener("change", (e) => {
    let categorySelect = e.target.value.toLowerCase();
    let arraySortCategory = [];
    for (let q = 0; q < products.length; q++) {
      if (products[q].category.toLowerCase() == categorySelect) {
        arraySortCategory.push(products[q]);
      }
    }
    viewDataArray = arraySortCategory;
    const main = document.querySelector("main");
    removeChild(main);
    createFilterSection();
    callCreateEventsFilter();

    let cartList;
    if (isList) {
      cartList = creatCartListAsList(arraySortCategory);
    } else {
      cartList = creatCartList(arraySortCategory);
    }

    main.appendChild(cartList);
  });
}
