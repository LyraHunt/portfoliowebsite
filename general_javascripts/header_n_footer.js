var header = document.getElementById("headerContainer");
var footer = document.getElementById("footerContainer");

if (header !== null) {
    header.classList.add("flex-row", "headerContainer");
    generateHeader(header);
}

if (footer !== null) {
    footer.classList.add("flex-row", "footerContainer");
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

    var logo = document.createElement("img");
    logo.classList.add("site-logo");
    logo.src = "images/capstone-game-icon-circle.png";
    newHeader.push(logo);

    var siteTitle = document.createElement("h1");
    siteTitle.classList.add("site-title");
    siteTitle.innerText = "Wilde Hunt Games";
    newHeader.push(siteTitle);

    var homeLink = document.createElement("a");
    homeLink.classList.add("page-link");
    homeLink.innerText = "Home";
    homeLink.href = "index.html";
    checkForCurrentLink(homeLink);
    newHeader.push(homeLink);
    
    var workshopLink = document.createElement("a");
    workshopLink.classList.add("page-link");
    workshopLink.innerText = "Workshop";
    workshopLink.href = "workshop.html";
    checkForCurrentLink(workshopLink);
    newHeader.push(workshopLink);

    var drawingsLink = document.createElement("a");
    drawingsLink.classList.add("page-link");
    drawingsLink.innerText = "Drawings";
    drawingsLink.href = "drawings.html";
    checkForCurrentLink(drawingsLink);
    newHeader.push(drawingsLink);

    var aboutLink = document.createElement("a");
    aboutLink.classList.add("page-link");
    aboutLink.innerText = "About Me";
    aboutLink.href = "aboutme.html";
    checkForCurrentLink(aboutLink);
    newHeader.push(aboutLink);

    targetElement.replaceChildren(...newHeader);
}

function generateFooter(targetElement) {
    generateHeader(targetElement);
}