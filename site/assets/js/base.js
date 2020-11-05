const waitForElement = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

let darkTheme = false;
let toggle;

const updateDarkTheme = (shiftPressed = false) => {
  document.body.classList.toggle("no-animation");

  document.body.classList.toggle("dark");
  setTimeout(() => document.body.classList.toggle("no-animation"), 200);
  darkTheme = !darkTheme;
  localStorage.setItem("darkTheme", darkTheme);
  if ((darkTheme = false)) {
    $("meta[name=theme-color]").attr("content", "#007bff");
  } else {
    $("meta[name=theme-color]").attr("content", "#242424");
  }
};

if (localStorage.getItem("darkTheme") === "true") {
  updateDarkTheme();
} else {
  localStorage.setItem("darkTheme", false);
}

document.body.dataset.themeLoaded = true;

waitForElement("#dark-toggle").then(() => {
  toggle = document.querySelector("#dark-toggle");

  if (darkTheme) {
    toggle.innerHTML =
      '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>';
  } else {
    toggle.innerHTML =
      '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>';
  }

  toggle.addEventListener("click", (event) => {
    updateDarkTheme();
    if (darkTheme) {
      toggle.innerHTML =
        '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>';
    } else {
      toggle.innerHTML =
        '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>';
    }
  });
});
