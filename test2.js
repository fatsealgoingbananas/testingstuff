window.onload = function () {
  addEventListeners();
  window.addEventListener("resize", addEventListeners);
};

function addEventListeners() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
  } else if (window.matchMedia("(max-width: 1023px)").matches) {
  }
}

function getNavbarElements() {
  return {
    navbarHamburger: document.querySelector(".navbar-hamburger"),
    navbarCont1: document.querySelector(".navbar-cont-1"),
    navbarSpaceCont2s: document.querySelectorAll(".navbar-space-cont-2"),
    navbarSpaceCont3s: document.querySelectorAll(".navbar-space-cont-3"),
    navbarItem1Elements: document.querySelectorAll(".navbar-item-1 > a"),
    navbarItem2Elements: document.querySelectorAll(".navbar-item-2 > a"),
  };
}

const smallScreenEventListenerHamburger = function () {
  const navbarElements = getNavbarElements();
};

function addSmallLayoutEventListeners() {
  const navbarHamburger = document.querySelector(".navbar-hamburger");
  const navbarCont1 = document.querySelector(".navbar-cont-1");
  const navbarSpaceCont2s = document.querySelectorAll(".navbar-space-cont-2");
  const navbarSpaceCont3s = document.querySelectorAll(".navbar-space-cont-3");
  const navbarItem1Elements = document.querySelectorAll(".navbar-item-1 > a");
  const navbarItem2Elements = document.querySelectorAll(".navbar-item-2 > a");

  navbarHamburger.addEventListener(
    "click",
    debounce(function () {
      navbarCont1.classList.toggle("navbar-none");
      if (!navbarCont1.classList.contains("navbar-none")) {
        navbarSpaceCont2s.forEach(function (navbarSpaceCont2) {
          navbarSpaceCont2.classList.add("navbar-none");
        });

        navbarSpaceCont3s.forEach(function (navbarSpaceCont3) {
          navbarSpaceCont3.classList.add("navbar-none");
        });

        navbarItem1Elements.forEach(function (navbarItem1Element) {
          const svg = navbarItem1Element.querySelector("svg");
          if (svg) {
            const path = svg.querySelector("path");
            path.setAttribute(
              "d",
              "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            );
          }
        });

        navbarItem2Elements.forEach(function (navbarItem2Element) {
          const svg = navbarItem2Element.querySelector("svg");
          if (svg) {
            const path = svg.querySelector("path");
            path.setAttribute(
              "d",
              "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            );
          }
        });
      }
    }, 200)
  );

  navbarItem1Elements.forEach(function (navbarItem1Element) {
    navbarItem1Element.addEventListener(
      "click",
      debounce(function () {
        const navbarSpaceCont2 = this.closest(".navbar-item-1").querySelector(
          ".navbar-space-cont-2"
        );
        if (!navbarSpaceCont2) {
          return;
        }
        navbarSpaceCont2.classList.toggle("navbar-none");
        const svg = navbarItem1Element.querySelector("a svg");
        if (!navbarSpaceCont2.classList.contains("navbar-none")) {
          if (svg) {
            const path = svg.querySelector("path");
            path.setAttribute(
              "d",
              "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            );
          }
        } else if (navbarSpaceCont2.classList.contains("navbar-none")) {
          if (svg) {
            const path = svg.querySelector("path");
            path.setAttribute(
              "d",
              "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            );
          }

          navbarSpaceCont3s.forEach(function (navbarSpaceCont3) {
            navbarSpaceCont3.classList.add("navbar-none");
          });

          navbarItem2Elements.forEach(function (navbarItem2Element) {
            const svg = navbarItem2Element.querySelector("svg");
            if (svg) {
              const path = svg.querySelector("path");
              path.setAttribute(
                "d",
                "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              );
            }
          });
        }
      }, 200)
    );
  });

  navbarItem2Elements.forEach(function (navbarItem2Element) {
    navbarItem2Element.addEventListener(
      "click",
      debounce(function () {
        const navbarSpaceCont3 = this.closest(".navbar-item-2").querySelector(
          ".navbar-space-cont-3"
        );
        if (!navbarSpaceCont3) {
          return;
        }
        navbarSpaceCont3.classList.toggle("navbar-none");
        const svg = navbarItem2Element.querySelector("a svg");
        if (!navbarSpaceCont3.classList.contains("navbar-none")) {
          if (svg) {
            const path = svg.querySelector("path");
            path.setAttribute(
              "d",
              "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            );
          }
        } else if (navbarSpaceCont3.classList.contains("navbar-none")) {
          if (svg) {
            const path = svg.querySelector("path");
            path.setAttribute(
              "d",
              "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            );
          }
        }
      }, 200)
    );
  });
}

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
