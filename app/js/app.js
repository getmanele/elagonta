// tabs

let tab = function () {
  let tabNav = document.querySelectorAll(".menu-item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();

// Плашка die

const someMethod = function () {
  document.getElementById("die").classList.add("block__active");
  document.getElementById("die").classList.remove("block__hidden");
};

const f = function () {
  setTimeout(someMethod, 1000);
};

document.getElementById("visually").onclick = f;

document.getElementById("hidden_block").onclick = function () {
  document.getElementById("die").classList.add("block__hidden");
  document.getElementById("die").classList.remove("block__active");
};

// закрыть плашку die

// document.addEventListener("click", function (event) {
//   var e = document.getElementById("die");
//   if (!e.contains(event.target)) e.classList.add("block__hidden");
// });

// balance

document.getElementById("header-bal").onclick = function () {
  document.getElementById("die").classList.toggle("block__hidden");
};

// button

document.getElementById("green").onclick = function () {
  document.getElementById("green").classList.toggle("btn_click_green");
  document.getElementById("red").classList.remove("btn_click_red");
  document.getElementById("not_2").classList.toggle("status_green");
  document.getElementById("not_2").classList.remove("status_red");
  document.getElementById("not_1").classList.remove("status_red");
  document.getElementById("bow_ring").classList.add("block__active");
  document.getElementById("bow_ring").classList.toggle("block__hidden");
};

document.getElementById("red").onclick = function () {
  document.getElementById("red").classList.toggle("btn_click_red");
  document.getElementById("green").classList.remove("btn_click_green");
  document.getElementById("not_1").classList.toggle("status_red");
  document.getElementById("not_2").classList.toggle("status_red");
  document.getElementById("not_1").classList.remove("status_green");
  document.getElementById("not_2").classList.remove("status_green");
  document.getElementById("bow_ring").classList.add("block__hidden");
};
