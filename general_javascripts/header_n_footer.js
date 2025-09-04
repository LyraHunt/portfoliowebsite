var header = document.getElementById("headerContainer");
var footer = document.getElementById("footerContainer");

if (header !== null) {
    header.classList.add("flex-row", "header-container");
    generateHeader(header);
}

if (footer !== null) {
    footer.classList.add("flex-row", "footer-container");
    generateFooter(footer);
}

/*
<img id="logo" src="images/capstone-game-icon-circle.png">
<h1 class="name-title">Wilde Hunt Games</h1>
<a class="page-title" href="workshop.html">Workshop</a>
<a class="page-title" href="drawings.html">Drawings</a>
<h2 class="page-title">About</h2>
*/

function checkForCurrentLink(targetElement) {
    if (targetElement.href === window.location.href) {
        targetElement.classList.add("current-page");
    }
}

function generateHeader(targetElement) {
    var newHeader = [];

    var titleContainer = document.createElement("div");
    titleContainer.classList.add("flex-row", "title-container");

    var logo = document.createElement("img");
    logo.classList.add("site-logo");
    logo.src = "images/capstone-game-icon-circle.png";
    titleContainer.appendChild(logo);

    var siteTitle = document.createElement("h1");
    siteTitle.classList.add("site-title");
    siteTitle.innerText = "Wilde Hunt Games";
    titleContainer.appendChild(siteTitle);

    newHeader.push(titleContainer);

    var linksContainer = document.createElement("div");
    linksContainer.classList.add("flex-row", "links-container");

    var homeLink = document.createElement("a");
    homeLink.classList.add("page-link");
    homeLink.innerText = "Home";
    homeLink.href = "index.html";
    checkForCurrentLink(homeLink);
    linksContainer.appendChild(homeLink);
    
    var workshopLink = document.createElement("a");
    workshopLink.classList.add("page-link");
    workshopLink.innerText = "Workshop";
    workshopLink.href = "workshop.html";
    checkForCurrentLink(workshopLink);
    linksContainer.appendChild(workshopLink);

    var drawingsLink = document.createElement("a");
    drawingsLink.classList.add("page-link");
    drawingsLink.innerText = "Drawings";
    drawingsLink.href = "drawings.html";
    checkForCurrentLink(drawingsLink);
    linksContainer.appendChild(drawingsLink);

    var aboutLink = document.createElement("a");
    aboutLink.classList.add("page-link");
    aboutLink.innerText = "About Me";
    aboutLink.href = "aboutme.html";
    checkForCurrentLink(aboutLink);
    linksContainer.appendChild(aboutLink);

    newHeader.push(linksContainer);

    targetElement.replaceChildren(...newHeader);
}

function generateFooter(targetElement) {
    //generateHeader(targetElement);

    var newHeader = [];

    var titleContainer = document.createElement("div");
    titleContainer.classList.add("flex-row", "title-container");

    var logo = document.createElement("img");
    logo.classList.add("site-logo");
    logo.src = "images/capstone-game-icon-circle.png";
    titleContainer.appendChild(logo);

    var siteTitle = document.createElement("h1");
    siteTitle.classList.add("site-title");
    siteTitle.innerText = "Wilde Hunt Games";
    titleContainer.appendChild(siteTitle);

    newHeader.push(titleContainer);

    var linksContainer = document.createElement("div");
    linksContainer.classList.add("flex-row", "links-container");

    var linksContainerMessage = document.createElement("p");
    linksContainerMessage.innerText = "this is the footer";
    linksContainerMessage.style = "margin: 0px 20px"
    linksContainer.appendChild(linksContainerMessage);

    var themeToggle = document.createElement("button");
    themeToggle.onclick = () => toggleThemeButton(themeToggle);
    toggleThemeButtonUpdate(themeToggle);
    // subscribe to the themeChanged global event and then update text
    if ("GlobalEventBus" in window) GlobalEventBus.subscribe("themeChanged", () => {toggleThemeButtonUpdate(themeToggle)});
    linksContainer.appendChild(themeToggle);

    newHeader.push(linksContainer);

    targetElement.replaceChildren(...newHeader);
}

function toggleThemeButton(targetElement) {
    toggleTheme();
    toggleThemeButtonUpdate(targetElement);
}

function toggleThemeButtonUpdate(targetElement) {
    targetElement.innerText = "Theme:";
    if (localStorage.getItem("theme") === "theme-dark") {
        targetElement.innerText += " Dark";
    }
    else if (localStorage.getItem("theme") === "theme-light") {
        targetElement.innerText += " Light";
    }
}
