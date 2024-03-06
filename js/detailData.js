const detaillData = () => {
  const preloder = document.querySelector(".preloder");

  //функция для вывода аниме по жанрам в выпадающем меню
  const renderGanreList = (drop) => {
    const dropdownBlock = document.querySelector(".header__menu .dropdown");
    dropdownBlock.innerHTML = "";
    drop.forEach((el) => {
      dropdownBlock.insertAdjacentHTML(
        "afterbegin",
        `
      <li><a href="categories.html?ganre=${el}">${el}</a></li>
      `
      );
    });
  };

  //функция для вывода определенного аниме на странице
  const renderAnimeDetails = (arr, id) => {
    const animeObj = arr.find((el) => el.id == id);
    const imageBlock = document.querySelector(".anime__details__pic");
    const viewsBlock = imageBlock.querySelector(".view");
    const titleBlock = document.querySelector(".anime__details__title h3");
    const subtitleBlock = document.querySelector(".anime__details__title span");
    const textBlock = document.querySelector(".anime__details__text p");
    const widgetBlock = document.querySelectorAll(
      ".anime__details__widget ul li"
    );
    const breadcrumbLinks = document.querySelector(".breadcrumb__links span");

    if (animeObj) {
      imageBlock.dataset.setbg = animeObj.image;
      viewsBlock.innerHTML = "";
      viewsBlock.insertAdjacentHTML(
        "afterbegin",
        `
            <i class="fa fa-eye"></i> ${animeObj.views}
        `
      );

      titleBlock.textContent = animeObj.title;
      subtitleBlock.textContent = animeObj["original-title"];
      textBlock.textContent = animeObj.description;
      breadcrumbLinks.textContent = animeObj.ganre;

      widgetBlock[0].insertAdjacentHTML(
        "beforeend",
        `<span>Дата выпуска:</span>${animeObj.date}`
      );
      widgetBlock[1].insertAdjacentHTML(
        "beforeend",
        `<span>Статус:</span> ${animeObj.rating}`
      );
      widgetBlock[2].insertAdjacentHTML(
        "beforeend",
        `<span>Жанр:</span>${animeObj.tags.join(", ")}`
      );

      document.querySelectorAll(".set-bg").forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });

      //отключение прелодаре
      setTimeout(() => {
        preloder.classList.remove("active");
      }, 500);
    } else {
      alert("аниме отсутствует");
    }
  };

  //получение данных джейсон
  fetch("https://test-70eca-default-rtdb.firebaseio.com/anime.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //переменная для коллекции жанров
      const ganres = new Set();

      //определине жанра по url
      const params = new URLSearchParams(window.location.search).get("itemId");

      //добавление в коллекцию жанров
      data.forEach((el) => {
        ganres.add(el.ganre);
      });

      //проверяем условие какой жанр выводится
      if (params) {
        renderAnimeDetails(data, params);
      } else {
        alert("аниме отсутствует");
      }

      renderGanreList(ganres);
    });
};
detaillData();
