var tempCreationsContainer = document.getElementById("tempCreationsContainer");
var creationsContainer = document.getElementById("creationsContainer");

var galleryContainer = document.getElementById("galleryContainer");

var allFilterTags = ["traditional", "interactive", "simulation"];

var creationFilters = {};
var galleryColumnAmount = 0;
var galleryRowAmount = 0;

var galleryWindowWidth = 400;
var galleryEdgeWidth = 205;
var minGalleryMargin = 0;

function generateGalleryRows() {
    console.log("GENERATE GALLERY");

    var filteredCreations = [];

    for (let i = 0; i < creations.length; i++) {
        var creationPassesFilters = false;
        
        for (let j = 0; j < allFilterTags.length; j++) {
            var currentFilter = allFilterTags[j];
            if (currentFilter in creationFilters) {
                if (creationFilters[currentFilter] === creations[i].typeTags[currentFilter]) {
                    creationPassesFilters = true;
                }
            }
        }
        console.log(creationFilters);

        if (creationPassesFilters || Object.keys(creationFilters).length === 0) {
            filteredCreations.push(creations[i]);
        }
    }

    var newGalleryRows = []
    galleryRowAmount = Math.ceil(filteredCreations.length / galleryColumnAmount);

    //generate specific row
    for (let i = 0; i < galleryRowAmount; i++) {
        var newGalleryRow = document.createElement("div");
        newGalleryRow.id = "galleryRow" + i;
        newGalleryRow.classList.add("flex-row");
    
        var newGalleryLeft = document.createElement("div");
        newGalleryLeft.style = "width: 250px; height: 450px; background-image: url('images/gallery-edge-left.png')";
        newGalleryRow.appendChild(newGalleryLeft);
    
        //generate specific window (in current row)
        for (let j = 0; j < galleryColumnAmount; j++) {
            var currentCreationIndex = Math.min((i*galleryColumnAmount + j), filteredCreations.length - 1);

            var newGalleryWindow = document.createElement("div");
            newGalleryWindow.style = "width: 400px; height: 450px; background-image: url('images/gallery-window.png')";

            var newGalleryWindowThumbnail = document.createElement("div");
            newGalleryWindowThumbnail.style = "position: relative; left: 50px; top: 50px; width: 300px; height: 300px; background-size: 100% 100%; background-image: url('" + filteredCreations[currentCreationIndex].thumbnailUrl + "')";
            newGalleryWindow.appendChild(newGalleryWindowThumbnail);

            var newGalleryWindowTitleLink = document.createElement("a");
            newGalleryWindowTitleLink.href = filteredCreations[currentCreationIndex].url;
            newGalleryWindow.appendChild(newGalleryWindowTitleLink);

            var newGalleryWindowTitleDiv = document.createElement("div");
            newGalleryWindowTitleDiv.classList.add("clickable");
            newGalleryWindowTitleDiv.style = "text-decoration: underline; display: flex; align-items: center; justify-content: center; position: relative; left: 100px; top: 75px; width: 200px; height: 50px; background-color: gray";
            newGalleryWindowTitleLink.appendChild(newGalleryWindowTitleDiv);

            var newGalleryWindowTitle = document.createElement("h2");

            newGalleryWindowTitle.innerText = filteredCreations[currentCreationIndex].name + " (" + filteredCreations[currentCreationIndex].year + ")";
            newGalleryWindowTitle.style = "text-align: center"
            newGalleryWindowTitleDiv.appendChild(newGalleryWindowTitle);

            newGalleryRow.appendChild(newGalleryWindow);
        }
    
        var newGalleryRight = document.createElement("div");
        newGalleryRight.style = "width: 250px; height: 450px; background-image: url('images/gallery-edge-right.png')";
        newGalleryRow.appendChild(newGalleryRight);
    
        newGalleryRows.push(newGalleryRow);
    }

    //update HTML
    galleryContainer.replaceChildren(...newGalleryRows);
}

//filters have been updated; load new filters and then reload visible creation tiles
function updateFilter() {
    //all filter category boxes
    var traditionalFilterBox = document.getElementById("traditionalFilterBox");
    var simulationFilterBox = document.getElementById("simulationFilterBox");

    //if no filters checked, load all
    var ifAnyFilters = traditionalFilterBox.checked || simulationFilterBox.checked;

    //load new filter data
    if (!ifAnyFilters) {
        creationFilters = {}
    }
    else {
        creationFilters.traditional = traditionalFilterBox.checked;
        creationFilters.simulation = simulationFilterBox.checked;
    }

    //reload visible creation tiles
    generateGalleryRows();
}

function reportWindowSize() {
    console.log("RESIZE");

    let previousFrameColumnAmount = galleryColumnAmount;
    var edgeMargin = (galleryEdgeWidth + minGalleryMargin) * 2;
    galleryColumnAmount = Math.floor((window.innerWidth-edgeMargin)/galleryWindowWidth);
    galleryColumnAmount = Math.max(galleryColumnAmount, 1);
    
    if (previousFrameColumnAmount !== galleryColumnAmount) {
        generateGalleryRows();
    }
}

//when window is resized, check gallery changes
window.onresize = reportWindowSize;

//update window onload (generate gallery)
reportWindowSize();
