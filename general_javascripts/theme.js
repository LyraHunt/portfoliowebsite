// borrowed (with permission) from https://github.com/TehBrian/tehbrian.github.io/blob/main/assets/js/theme.js

function onLoad() {
    // add listeners for system color-change events
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => e.matches && activateDarkTheme());
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => e.matches && activateLightTheme());

    // check local storage for explicit theme preference, else check system
    if (localStorage.getItem("theme") === "theme-dark") {
        activateDarkTheme();
    } else if (localStorage.getItem("theme") === "theme-light") {
        activateLightTheme();
    } else {
        activateColorScheme();
    }
}

function activateTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("theme", theme);
    if ("GlobalEventBus" in window) GlobalEventBus.publish("themeChanged", theme);
}

function activateDarkTheme() {
    activateTheme("theme-dark");
}

function activateLightTheme() {
    activateTheme("theme-light");
}

function activateColorScheme() {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
    const isNotSupported = !isDarkTheme && !isLightTheme && !isNotSpecified;

    if (isDarkTheme) activateDarkTheme();
    if (isLightTheme) activateLightTheme();
    if (isNotSpecified) {
        console.log("Your browser doesn't have a color scheme preference. Defaulting to dark theme.");
        activateDarkTheme();
    }
    if (isNotSupported) {
        console.log("Your browser doesn't support the color scheme preference media query. Please update to a more recent browser. Defaulting to dark theme.");
        console.log("Or, hey, maybe you're using Tor or another privacy-aware browser. Keep doing that, then.");
        activateDarkTheme();
    }
}

function toggleTheme() {
    if (document.documentElement.getAttribute("theme") === "theme-dark") {
        activateLightTheme();
    } else if (document.documentElement.getAttribute("theme") === "theme-light") {
        activateDarkTheme();
    } else {
        console.log("Looks like something broke. Setting the theme to your browser's color scheme preference.");
        activateColorScheme();
    }
}

onLoad();

function applyFancyBorders() {
    let elementsWithClass = document.getElementsByClassName("fancy-border-project-title");
    console.log(elementsWithClass)
    if (elementsWithClass.length > 0) {
        for (let j = 0; j < elementsWithClass.length; j++) {
            // top border
            var topBorder = document.createElement("div");
            topBorder.classList.add("fancy-border-project-title-top-back");

            var topBorderCenter = document.createElement("div");
            topBorderCenter.classList.add("fancy-border-project-title-top-center");
            topBorder.appendChild(topBorderCenter);

            var topBorderEdgeLeft = document.createElement("div");
            topBorderEdgeLeft.classList.add("fancy-border-project-title-top-edge");
            topBorder.appendChild(topBorderEdgeLeft);

            var topBorderEdgeRight = document.createElement("div");
            topBorderEdgeRight.classList.add("fancy-border-project-title-top-edge-flip");
            topBorder.appendChild(topBorderEdgeRight);

            elementsWithClass[j].appendChild(topBorder);

            // bottom border
            var bottomBorder = document.createElement("div");
            bottomBorder.classList.add("fancy-border-project-title-bottom-back");

            var bottomBorderEdgeLeft = document.createElement("div");
            bottomBorderEdgeLeft.classList.add("fancy-border-project-title-bottom-edge");
            bottomBorder.appendChild(bottomBorderEdgeLeft);

            var bottomBorderEdgeRight = document.createElement("div");
            bottomBorderEdgeRight.classList.add("fancy-border-project-title-bottom-edge-flip");
            bottomBorder.appendChild(bottomBorderEdgeRight);

            elementsWithClass[j].appendChild(bottomBorder);
        }
    }
}

applyFancyBorders();