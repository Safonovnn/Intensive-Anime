const scrollToTop = () => {
  //объявление переменных
  const btnScrollToTop = document.getElementById("scrollToTopButton");

  //событие для скролла
  btnScrollToTop.addEventListener("click", (event) => {
    event.preventDefault();
    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};

scrollToTop();
