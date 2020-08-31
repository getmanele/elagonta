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

document.getElementById("visually").onclick = function () {
  document.getElementById("die").classList.toggle("block__active");
  document.getElementById("die").classList.remove("block__hidden");
};

document.getElementById("hidden_block").onclick = function () {
  document.getElementById("die").classList.toggle("block__hidden");
  document.getElementById("die").classList.remove("block__active");
};
