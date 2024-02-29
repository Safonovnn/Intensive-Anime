const modal = () => {
  //объявление переменных
  const modal = document.querySelector(".search-model");
  const modalOpenBtn = document.querySelector(".icon_search");
  const modalCloseBtn = modal.querySelector(".search-close-switch");
  const inputSearch = document.getElementById("search-input");

  //событие при вводе данных в поле ввода
  inputSearch.addEventListener("change", () => {
    console.log("Введено:", inputSearch.value);
  });

  // событие открытия и закрытия модального окна
  modalOpenBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

modal();
