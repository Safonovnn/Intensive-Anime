const bgElements = () => {
  //объявление переменных
  const elements = document.querySelectorAll(".set-bg");

  //один из вариантов решения
  // for (let i = 0; i < elements.length; i++) {
  //   const src = elements[i].dataset.setbg;
  //   elements[i].style.backgroundImage = `url(${src})`;
  // }

  //определение url для картинок
  elements.forEach((el) => {
    //const src = el.dataset.setbg;
    el.style.backgroundImage = `url(${el.dataset.setbg})`;
  });
};

bgElements();
