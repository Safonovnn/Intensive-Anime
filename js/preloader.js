const preloader = () => {
  //объявление переменных
  const preloder = document.querySelector(".preloder");

  //добавление и удаление класса для прелодер
  setTimeout(() => {
    preloder.classList.remove("active");
  }, 500);
};

preloader();
