const mainData = () => {
  //функция для вывода аниме по жанрам
  const renderAnimeGanre = (arr, ganr) => {
    console.log(arr);
    console.log(ganr);
  };

  //функция для вывода топ аниме
  const renderTopAnime = (arr) => {
    const wrapper = document.querySelector(".filter__gallery");
    wrapper.innerHTML = "";
    arr.forEach((el) => {
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="product__sidebar__view__item set-bg mix" data-setbg="${el.image}">
        <div class="ep">${el.rating}</div>
        <div class="view"><i class="fa fa-eye"></i>${el.views}</div>
        <h5><a href="/anime-details.html">${el.title}</a></h5>
        </div>
      `
      );
    });

    //определение url для картинок
    wrapper.querySelectorAll(".set-bg").forEach((elem) => {
      elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    });
  };

  //получение данных джейсон
  fetch("https://test-70eca-default-rtdb.firebaseio.com/anime.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //переменная для коллекции жанров
      const ganres = new Set();

      //вызов функции для топ аниме
      renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

      //добавление в коллекцию жанров
      data.forEach((el) => {
        ganres.add(el.ganre);
      });

      //вызов функции для вывода аниме по жанрам
      renderAnimeGanre(data, ganres);
    });
};

mainData();
