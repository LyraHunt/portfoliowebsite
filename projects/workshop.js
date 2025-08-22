var tempCreationsContainer = document.getElementById("tempCreationsContainer");
var creationsContainer = document.getElementById("creationsContainer");

var workshopGridLeft = document.getElementById("workshop-grid-left");
var workshopGrid = document.getElementById("workshop-grid");
var workshopGridRight = document.getElementById("workshop-grid-right");

var allFilterTags = ["mobileFriendly"];

var creationFilters = {};
var workshopColumnAmount = 0;

var workshopWindowWidth = 400;
var workshopEdgeWidth = 205;
var minWorkshopMargin = 50;

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
        var newWorkshopWindow = document.createElement("div");
        newWorkshopWindow.classList.add("workshop-window");

        //decoration on frame/background
        var newWorkshopWindowFrame = document.createElement("img");
        newWorkshopWindowFrame.classList.add("workshop-window-frame");
        newWorkshopWindowFrame.src = "images/workshop-window-2.png";
        newWorkshopWindow.appendChild(newWorkshopWindowFrame);

        var newWorkshopWindowThumbnailLink = document.createElement("a");
        newWorkshopWindowThumbnailLink.href = currentCreationData.url;
        newWorkshopWindow.appendChild(newWorkshopWindowThumbnailLink);

        var newWorkshopWindowThumbnail = document.createElement("img");
        newWorkshopWindowThumbnail.src = currentCreationData.thumbnailUrl;
        newWorkshopWindowThumbnail.loading = "lazy";
        newWorkshopWindowThumbnail.classList.add("clickable", "workshop-window-thumbnail");
        newWorkshopWindowThumbnailLink.appendChild(newWorkshopWindowThumbnail);

        var newWorkshopWindowTitleLink = document.createElement("a");
        newWorkshopWindowTitleLink.href = currentCreationData.url;
        newWorkshopWindow.appendChild(newWorkshopWindowTitleLink);

        var newWorkshopWindowTitleDiv = document.createElement("div");
        newWorkshopWindowTitleDiv.classList.add("workshop-window-title-container");
        newWorkshopWindowTitleDiv.classList.add("clickable");
        
        newWorkshopWindowTitleLink.appendChild(newWorkshopWindowTitleDiv);

        var newWorkshopWindowTitle = document.createElement("h2");

        newWorkshopWindowTitle.innerText = currentCreationData.name + " (" + currentCreationData.year + ")";
        newWorkshopWindowTitleDiv.appendChild(newWorkshopWindowTitle);

        newWorkshopGrid.push(newWorkshopWindow);
    }

    workshopGrid.replaceChildren(...newWorkshopGrid);
    lastWorkshopGridHeight = workshopGrid.offsetHeight;
    generateWorkshopSides();
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


//filters have been updated; load new filters and then reload visible creation tiles
function updateFilter() {
    //all filter category boxes
    var filterBoxArr = [];
    for (let i = 0; i < allFilterTags.length; i++) {
        filterBoxArr.push(document.getElementById(allFilterTags[i] + "FilterBox"));
    }

    //if no filters checked, load all
    var anyFiltersApplied = false;

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
    generateWorkshopSides();
    lastWorkshopGridHeight = workshopGrid.offsetHeight;
}).observe(workshopGrid);

generateWorkshop();
