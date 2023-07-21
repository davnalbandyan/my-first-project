"use strict";

window.addEventListener("load", () => {
  //tab logic start
  const tabHeaders = document.querySelectorAll(".tabheader__item");
  const tabContents = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hide() {
    tabContents.forEach((tabcontenct) => {
      tabcontenct.classList.add("hide");
      tabcontenct.classList.remove("show", "fade");
    });
    tabHeaders.forEach((tabheader) =>
      tabheader.classList.remove("tabheader__item_active")
    );
  }

  function show(i = 2) {
    tabContents[i].classList.add("show", "fade");
    tabContents[i].classList.remove("hide");
    tabHeaders[i].classList.add("tabheader__item_active");
  }

  hide();
  show();

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tabheader__item")) {
      tabHeaders.forEach((item, index) => {
        if (e.target === item) {
          hide();
          show(index);
        }
      });
    }
  });
  //tab logic end

  //timer logic start
  const date = "2023-09-01";
  function getTimeRemaining(end) {
    const total = Date.parse(end) - Date.parse(new Date());
    const days = Math.floor(
      total / (1000 * 60 * 60 * 24)
    ); /* get the days quantity*/
    const hours = Math.floor(
      (total / (1000 * 60 * 60)) % 24
    ); /*get the hours quantity*/
    const min = Math.floor((total / 1000 / 60) % 60); /* get the min quantity*/
    const seconds = Math.floor((total / 1000) % 60); /* get the sec quantity*/

    return {
      total,
      days,
      hours,
      min,
      seconds,
    };
  }
  function setClock(selector, ending) {
    const timer = document.querySelector(selector);
    const daysBlock = timer.querySelector("#days");
    const hoursBlock = timer.querySelector("#hours");
    const minutesBlock = timer.querySelector("#minutes");
    const secondsBlock = timer.querySelector("#seconds");
    const timerID = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const time = getTimeRemaining(ending); /*ask to Sammi ending ի պահ ը)*/

      daysBlock.textContent =
        time.days >= 0 && time.days < 10 ? `0${time.days}` : time.days;
      hoursBlock.textContent =
        time.hours >= 0 && time.hours < 10 ? `0${time.hours}` : time.hours;
      minutesBlock.textContent =
        time.min >= 0 && time.minutes < 10 ? `0${time.min}` : time.min;
      secondsBlock.textContent =
        time.seconds > 0 && time.seconds < 10
          ? `0${time.seconds}`
          : time.seconds;

      if (time.total <= 0) {
        clearInterval(timerID);
      }
    }
  }

  setClock(".timer", date);
  //timer logic end
  //modal start
  const modalTrig = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector("[data-close]");

  modalTrig.forEach((item) => {
    item.addEventListener("click", open);

    modalClose.addEventListener("click", close);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        close();
      }
    });
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.matches(".show")) {
      close();
    }
  });

  function showMod() {
    if (window.scrollY >= 1000) {
      open();
      window.removeEventListener("scroll", showMod);
    }
  }
  window.addEventListener("scroll", showMod);
  function open() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.removeAttribute("style");
  }

  //modal end
  //used class for menu card start
  class Menu {
    constructor(img, alt, title, descr, price, parentSelector) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 50;
      this.changetoUAH();
    }
    changetoUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const { img, alt, title, descr, price, parent } = this;
      const element = document.createElement("div");
      element.classList.add("menu__item");
      element.innerHTML = `
        <img src=${img} alt=${alt} />
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr">
        ${descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${price}</span> грн/день</div>
        </div>`;

      parent.append(element);
    }
  }
  new Menu(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    4.58,
    ".menu .container"
  ).render();

  new Menu(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум",
    "Меню “Премиум - мы используем не только красивый дизайн упаковки,    но и качественное исполнение блюд. Красная рыба, морепродукты,    фрукты - ресторанное меню без похода в ресторан",
    11,
    ".menu .container"
  ).render();

  new Menu(
    "img/tabs/post.jpg",
    "post",
    'Меню "Прастое"',
    " Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу    и импортных вегетарианских стейков.",
    8.6,
    ".menu .container"
  ).render();
  //used class for menu card end
});
