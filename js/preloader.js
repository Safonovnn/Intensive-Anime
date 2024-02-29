const preloader = () => {
  //объявление переменных
  const preloder = document.querySelector(".preloder");

  //добавление и удаление класса для прелодер
  preloder.classList.add("active");
  setTimeout(() => {
    preloder.classList.remove("active");
  }, 1000);
};

preloader();
