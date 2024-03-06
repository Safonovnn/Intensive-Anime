const categoriesData = () => {
  //отключение прелодаре
  setTimeout(() => {
    preloder.classList.remove("active");
  }, 500);
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

  //функция для вывода аниме по жанрам
  const renderAnimeGanre = (arr, ganr) => {
    //добавление и удаление класса для прелодер
    setTimeout(() => {
      preloder.classList.remove("active");
    }, 500);
    const wrapper = document.querySelector(".product-page .col-lg-8");
    wrapper.innerHTML = "";

    ganr.forEach((item) => {
      const productBlock = document.createElement("div");
      const listBlock = document.createElement("div");

      const list = arr.filter((el) => el.tags.includes(item));

      listBlock.classList.add("row");
      productBlock.classList.add("mb-5");

      productBlock.append(listBlock);
      wrapper.append(productBlock);

      list.forEach((item) => {
        const ulBlock = document.createElement("ul");
        item.tags.forEach((tag) => {
          ulBlock.insertAdjacentHTML(
            "afterbegin",
            `<li class="mr-1">${tag}</li>`
          );
        });
        listBlock.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
              <div
                class="product__item__pic set-bg"
                data-setbg="${item.image}"
              >
                <div class="ep">${item.rating} / 10</div>
                <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
              </div>
              <div class="product__item__text">
                  ${ulBlock.outerHTML}
                <h5>
                  <a href="anime-details.html?itemId=${item.id}"
                    >${item.title}</a
                  >
                </h5>
              </div>
            </div>
        </div>
        `
        );
        wrapper.querySelectorAll(".set-bg").forEach((elem) => {
          elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
        });
      });

      productBlock.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="section-title">
            <h4>${item}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="btn__all">
            <a href="categories.html?ganre=${item}" class="primary-btn"
              >View All <span class="arrow_right"></span
            ></a>
          </div>
        </div>
      </div>
      `
      );
    });
  };

  //функция для вывода топ аниме
  const renderTopAnime = (arr) => {
    const wrapper = document.querySelector(".filter__gallery");
    wrapper.innerHTML = "";
    arr.forEach((el) => {
      wrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="product__sidebar__view__item set-bg mix" data-setbg="${el.image}">
        <div class="ep">${el.rating}</div>
        <div class="view"><i class="fa fa-eye"></i>${el.views}</div>
        <h5><a href="anime-details.html?itemId=${el.id}">${el.title}</a></h5>
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

      //определине жанра по url
      const params = new URLSearchParams(window.location.search).get("ganre");

      //добавление в коллекцию жанров
      data.forEach((el) => {
        ganres.add(el.ganre);
      });

      //вызов функции
      renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

      //проверяем условие какой жанр выводится
      if (params) {
        renderAnimeGanre(data, [params]);
      } else {
        renderAnimeGanre(data, ganres);
      }

      renderGanreList(ganres);
    });
};
categoriesData();
