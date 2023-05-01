window.onload = function () {
  const navbarSearchContainer = document.querySelector(
    ".navbar-search-container"
  );
  const navbarSearch = document.getElementById("search");
  const navbarSearchPath = navbarSearch.querySelector("path");
  const navbarContainer = document.querySelector(".navbar-container");

  navbarSearch.addEventListener("click", async () => {
    await navbarSearchContainer.classList.toggle("navbar-showSearch");
    if (navbarSearchContainer.classList.contains("navbar-showSearch")) {
      navbarContainer.style.display = "none";
      navbarSearchPath.setAttribute(
        "d",
        "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      );
    } else {
      navbarContainer.style.display = "";
      navbarSearchPath.setAttribute(
        "d",
        "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      );
    }
  });
};