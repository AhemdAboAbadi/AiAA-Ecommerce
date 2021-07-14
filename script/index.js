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
let cardForSearched = [];
searchStart.addEventListener("click", () => {
  containerPopAuto.classList.remove("active");
  let wrdSearched = searchValue.value;
  searchValue.value = "";
  arr.forEach((item) => {
    if (
      item.name.includes(wrdSearched) ||
      item.description.includes(wrdSearched)
    ) {
      cardForSearched.push(item["id"]);
    }
  });
});
