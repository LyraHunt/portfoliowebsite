var tempCreationsContainer = document.getElementById("tempCreationsContainer");
var creationsContainer = document.getElementById("creationsContainer");

var workshopGridLeft = document.getElementById("workshop-grid-left");
var workshopGrid = document.getElementById("workshop-grid");
var workshopGridRight = document.getElementById("workshop-grid-right");
var workshopGridBottomLeft = document.getElementById("workshop-grid-bottom-left");
var workshopGridBottom = document.getElementById("workshop-grid-bottom");
var workshopGridBottomRight = document.getElementById("workshop-grid-bottom-right");

var allFilterTags = ["mobileFriendly"];

var creationFilters = {};

var workshopWindowWidth = 400;
var workshopEdgeWidth = 205;
var minWorkshopMargin = 50;

function generateWorkshopWindow(hasData = true, creationData) {
    //actual window container
    var newWorkshopWindow = document.createElement("div");
    newWorkshopWindow.classList.add("workshop-window");
    if (!hasData) newWorkshopWindow.classList.add("blank");

    //decoration on frame/background
    var newWorkshopWindowFrame = document.createElement("img");
    newWorkshopWindowFrame.classList.add("workshop-window-frame");
    newWorkshopWindowFrame.src = "images/workshop-window-2.png";
    newWorkshopWindow.appendChild(newWorkshopWindowFrame);

    var newWorkshopWindowThumbnailLink = document.createElement("a");
    if (hasData) newWorkshopWindowThumbnailLink.href = creationData.url;
    newWorkshopWindow.appendChild(newWorkshopWindowThumbnailLink);

    var newWorkshopWindowThumbnail = document.createElement("img");
    if (hasData) newWorkshopWindowThumbnail.src = currentCreationData.thumbnailUrl;
    else newWorkshopWindowThumbnail.src = "images/blank.png";
    newWorkshopWindowThumbnail.loading = "lazy";
    newWorkshopWindowThumbnail.classList.add("workshop-window-thumbnail");
    if (hasData) newWorkshopWindowThumbnail.classList.add("clickable");
    newWorkshopWindowThumbnailLink.appendChild(newWorkshopWindowThumbnail);

    var newWorkshopWindowTitleLink = document.createElement("a");
    if (hasData) newWorkshopWindowTitleLink.href = currentCreationData.url;
    newWorkshopWindow.appendChild(newWorkshopWindowTitleLink);

    var newWorkshopWindowTitleDiv = document.createElement("div");
    newWorkshopWindowTitleDiv.classList.add("workshop-window-title-container");
    if (hasData) newWorkshopWindowTitleDiv.classList.add("clickable");
    
    newWorkshopWindowTitleLink.appendChild(newWorkshopWindowTitleDiv);

    var newWorkshopWindowTitle = document.createElement("h2");

    if (hasData) newWorkshopWindowTitle.innerText = currentCreationData.name + " (" + currentCreationData.year + ")";
    newWorkshopWindowTitleDiv.appendChild(newWorkshopWindowTitle);

    return newWorkshopWindow;
}

function generateWorkshop() {
    var filteredCreations = [];
    workshopGridLeft.replaceChildren([]);
    workshopGridRight.replaceChildren([]);

    for (let i = 0; i < creations.length; i++) {
        var creationPassesFilters = true;
        
        for (let j = 0; j < allFilterTags.length; j++) {
            var currentFilter = allFilterTags[j];
            if (currentFilter in creationFilters) {
                if (creationFilters[currentFilter] !== creations[i].typeTags[currentFilter]) {
                    creationPassesFilters = false;
                }
            }
        }

        if (creationPassesFilters || Object.keys(creationFilters).length === 0) {
            filteredCreations.push(creations[i]);
        }
    }

    var newWorkshopGrid = []

    //generate specific item
    for (let i = 0; i < filteredCreations.length; i++) {
        currentCreationData = filteredCreations[i];

        //actual window container
        var newWorkshopWindow = generateWorkshopWindow(true, currentCreationData);

        newWorkshopGrid.push(newWorkshopWindow);
    }

    workshopGrid.replaceChildren(...newWorkshopGrid);
    lastWorkshopGridHeight = workshopGrid.offsetHeight;
    removeGaps();
    fillInGaps();
    generateWorkshopSides();
    generateWorkshopBottom();
}

function generateWorkshopSides() {
    var workshopGridRowCount = getComputedStyle(workshopGrid).getPropertyValue("grid-template-rows").split("px").length - 1;
    var newWorkshopGridLeft = [];
    var newWorkshopGridRight = [];
    
    for (let i = 0; i < workshopGridRowCount; i++) {
        var newWorkshopLeft = document.createElement("div");
        newWorkshopLeft.classList.add("workshop-edge");
        newWorkshopLeft.style = "background-image: url('images/workshop-edge-left.png')";
        newWorkshopGridLeft.push(newWorkshopLeft);

        var newWorkshopRight = document.createElement("div");
        newWorkshopRight.classList.add("workshop-edge");
        newWorkshopRight.style = "background-image: url('images/workshop-edge-right.png')";
        newWorkshopGridRight.push(newWorkshopRight);
    }

    workshopGridLeft.replaceChildren(...newWorkshopGridLeft);
    workshopGridRight.replaceChildren(...newWorkshopGridRight);
}

function generateWorkshopBottom() {
    var workshopGridColumnCount = getComputedStyle(workshopGrid).getPropertyValue("grid-template-columns").split("px").length - 1;
    var newWorkshopGridBottom = [];

    for (let i = 0; i < workshopGridColumnCount + 2; i++) {
        if (i == 0) {
            var newWorkshopBottomLeft = document.createElement("div");
            newWorkshopBottomLeft.classList.add("workshop-bottom-edge");
            newWorkshopBottomLeft.style.backgroundImage = "url('images/workshop-bottom-left.png')";
            workshopGridBottomLeft.replaceChildren(...[newWorkshopBottomLeft]);
        }
        
        else if (i < workshopGridColumnCount + 1) {
            var newWorkshopBottom = document.createElement("div");
            newWorkshopBottom.classList.add("workshop-bottom-center");
            newWorkshopBottom.style.backgroundImage = "url('images/workshop-bottom-center.png')";
            newWorkshopGridBottom.push(newWorkshopBottom);
        }

        else {
            var newWorkshopBottomRight = document.createElement("div");
            newWorkshopBottomRight.classList.add("workshop-bottom-edge");
            newWorkshopBottomRight.style.backgroundImage = "url('images/workshop-bottom-right.png')";
            workshopGridBottomRight.replaceChildren(...[newWorkshopBottomRight]);
        }
    }
    
    workshopGridBottom.replaceChildren(...newWorkshopGridBottom);
}

function fillInGaps() {
    var isFilled = false;
    for (let i = 0; i < 100; i++) {
        var previousHeight = workshopGrid.offsetHeight;
        if (!isFilled) {
            var blankWorkshopWindow = generateWorkshopWindow(false);

            workshopGrid.appendChild(blankWorkshopWindow);
        }
        if (workshopGrid.offsetHeight > previousHeight) {
            isFilled = true;
            blankWorkshopWindow.remove();
        }
    }
}

function removeGaps() {
    var workshopWindows = workshopGrid.children;
    var startingLength = workshopWindows.length;
    for (let i = 0; i < startingLength; i++) {
        var currentWorkshopWindow = workshopWindows[startingLength - i - 1];
        if (currentWorkshopWindow.classList.contains("blank")) {
            currentWorkshopWindow.remove();
        }
    }
}


//filters have been updated; load new filters and then reload visible creation tiles
function updateFilter() {
    //all filter category boxes
    var filterBoxArr = [];
    for (let i = 0; i < allFilterTags.length; i++) {
        filterBoxArr.push(document.getElementById(allFilterTags[i] + "FilterBox"));
    }

    //if no filters checked, load all
    //var anyFiltersApplied = false;

    for (let i = 0; i < allFilterTags.length; i++) {
        if (filterBoxArr[i].checked) {
            anyFiltersApplied = true;
        }
    }

    for (let i = 0; i < allFilterTags.length; i++) {
        if (filterBoxArr[i].checked) {
            creationFilters[allFilterTags[i]] = filterBoxArr[i].checked;
        }

        else {
            delete creationFilters[allFilterTags[i]];
        }
    }

    //reload visible creation tiles
    generateWorkshop();
}

function tryMobileFilter() {
    if (document.getElementById("mobileFriendlyFilterBox")) {
        if (window.innerWidth < 768) {
            document.getElementById("mobileFriendlyFilterBox").checked = true;
            updateFilter();
        }
    }
}

//when window is resized, check workshop changes
//window.onresize = reportWindowSize;

//update window onload (generate workshop)
//reportWindowSize();

tryMobileFilter();

var lastWorkshopGridHeight = 0;

new ResizeObserver(function() {
    removeGaps();
    fillInGaps();
    generateWorkshopSides();
    generateWorkshopBottom();
    lastWorkshopGridHeight = workshopGrid.offsetHeight;
}).observe(workshopGrid);

generateWorkshop();
