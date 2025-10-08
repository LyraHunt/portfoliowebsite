var drawingsContainer = document.getElementById("drawingsContainer");
var drawingsSortedAppearance = [];
var drawingsFullSizeImages = [];

var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxImgContainer = document.getElementById("lightboxImgContainer");
var lightboxImgContainerInner =  document.getElementById("lightboxImgContainerInner");

var drawingsFolderPath = "/drawings/images/";

var gridColumnSize = 150;
var gridColumnGap = 10;

// take the column width and return the pixel width
function calculateActualWidth(drawingXSize) {
    return drawingXSize * gridColumnSize + gridColumnGap * (drawingXSize - 1) - 10;
}

// get the column width of a drawing by its ID
function getDrawingFullColumnWidth(drawingID) {
    var drawingSizes = drawings[drawingID].sizes;
    var fullWidth = 0;
    var hasMobileThreshold = false;
    for (let i = 0; i < drawingSizes.length; i++) {
        if (drawingSizes[i].minWidth == mobileThreshold) {
            fullWidth = drawingSizes[i].x;
            hasMobileThreshold = true;
        }
    }

    if (hasMobileThreshold) return fullWidth;
    else return drawingSizes[0].x;
}

function generateDrawings() {
    for (let i = 0; i < drawings.length; i++) {
        var currentDrawingData = drawings[i]
        
        var newDrawing = document.createElement("div");
        newDrawing.classList.add("drawing");
        newDrawing.id = i
        drawingsContainer.appendChild(newDrawing);

        var newDrawingImg = document.createElement("img");
        newDrawingImg.loading = "lazy";
        newDrawingImg.onclick = function() {
            displayLightbox(drawingsFolderPath + drawings[i].filename + ".png", i);
        }
        // if drawing has multiple sizes
        if ("altFilesizes" in drawings[i]) {
            for (let j = 0; j < drawings[i].altFilesizes.length; j++) {
                var currentAltFilesize = drawings[i].altFilesizes[j];
                newDrawingImg.srcset += drawingsFolderPath + "size-" + currentAltFilesize + "/" + drawings[i].filename + "-size-" + currentAltFilesize + ".png " + currentAltFilesize + "w" + ", ";
                //newDrawingImg.sizes += "(width >= " + currentAltFilesize + "px) " + currentAltFilesize + "px";
            }
            newDrawingImg.srcset += drawingsFolderPath + drawings[i].filename + ".png " + drawings[i].defaultSize + "w";
            newDrawingImg.sizes = "(width <= 768px) " + calculateActualWidth(drawings[i].sizes[0].x) + "px, " + calculateActualWidth(getDrawingFullColumnWidth(i)) + "px";
        }
        newDrawingImg.src = drawingsFolderPath + drawings[i].filename + ".png";
        newDrawing.appendChild(newDrawingImg);

        drawingsSortedAppearance.push(newDrawing);

        drawingsFullSizeImages.push(new Image());
    }

    drawingsContainer.children[drawingsContainer.children.length - 1].children[0].onload = () => {
        updateDrawingsSortedAppearance();
    };
}

function updateDrawingsSortedAppearance() {
    drawingsSortedAppearance.sort((a, b) => {
        //first, sort by y position
        if (a.getBoundingClientRect().top === b.getBoundingClientRect().top) {
            if (a.getBoundingClientRect().left > b.getBoundingClientRect().left) {
                return 1;
            }

            else {
                return -1;
            }
        }

        else if (a.getBoundingClientRect().top > b.getBoundingClientRect().top) {
            return 1;
        }

        else {
            return -1;
        }
    });

    for (let i = 0; i < drawingsSortedAppearance.length; i++) {
        drawingsSortedAppearance[i].setAttribute("appearance", i);
    }
}

function reloadDrawingScales() {
    var drawingElements = drawingsContainer.children;
    var currentWindowWidth = window.innerWidth;

    removeGaps();

    for (let i = 0; i < drawingElements.length; i++) {
        var currentDrawingElement = drawingElements[i];
        var currentDrawingData = drawings[Number(currentDrawingElement.id)];
        var currentDrawingSize = {x: 1, y: 1, minWidth: -1};
        for (let j = 0; j < currentDrawingData.sizes.length; j++) {
            if (currentWindowWidth > currentDrawingData.sizes[j].minWidth && currentDrawingData.sizes[j].minWidth > currentDrawingSize.minWidth) {
                currentDrawingSize = currentDrawingData.sizes[j];
            }
        }
        currentDrawingElement.style.gridColumnEnd = "span " + currentDrawingSize.x
        currentDrawingElement.style.gridRowEnd = "span " + currentDrawingSize.y
    }

    fillInGaps();
}

function removeGaps() {
    var drawingElements = drawingsContainer.children;
    var startingLength = drawingElements.length;
    for (let i = 0; i < startingLength; i++) {
        var currentDrawingElement = drawingElements[startingLength - i - 1];
        if (currentDrawingElement.classList.contains("blankDrawing")) {
            currentDrawingElement.remove();
        }
    }
}

function fillInGaps() {
    var isFilled = false
    for (let i = 0; i < 100; i++) {
        var previousHeight = drawingsContainer.offsetHeight;
        if (!isFilled) {
            var newDrawing = document.createElement("div");
            newDrawing.classList.add("blankDrawing");
            drawingsContainer.appendChild(newDrawing);

            var newDrawingImg = document.createElement("img");
            newDrawingImg.src = "/images/blank.png";
            newDrawing.appendChild(newDrawingImg);
            newDrawingImg.style.display = "none";
        }
        if (drawingsContainer.offsetHeight > previousHeight) {
            isFilled = true;
            newDrawing.remove();
        }
    }
}

generateDrawings();
reloadDrawingScales();
fillInGaps();

var mobileWindow = window.matchMedia("(max-width: 768px)");

mobileWindow.addEventListener("change", function() {
    reloadDrawingScales();
});

var lastDrawingContainerHeight = 0;

new ResizeObserver(function() {
    if (lastDrawingContainerHeight !== drawingsContainer.offsetHeight) {
        removeGaps();
        fillInGaps();
        updateDrawingsSortedAppearance();
    }
    lastDrawingContainerHeight = drawingsContainer.offsetHeight;
}).observe(drawingsContainer);

var currentLightboxID = 0;

function displayLightbox(imageSrc, imageID) {
    currentLightboxID = Number(drawingsContainer.children[imageID].getAttribute("appearance"));

    // use aspect ratio math to keep lightbox image contained
    var currentImage = drawingsFullSizeImages[imageID];
    if (currentImage.src == "") currentImage.src = imageSrc;

    // if larger image is already loaded, show it now
    if (currentImage.complete) {
        console.log("large version already loaded");

        let newImage = new Image();
        newImage.src = currentImage.src;
        newImage.onload = () => {
            lightboxImg.src = newImage.src;
            lightboxImgContainerInner.style.aspectRatio = newImage.width / newImage.height;

            if (lightbox.style.display == "none") {
                // lightbox is just being opened
                lightbox.style.display = "flex";
            }
        }
    }
    
    // otherwise, load already-loaded smaller version first while the larger image loads in the background
    else if ("altFilesizes" in drawings[imageID] && !currentImage.complete) {
        console.log("loading smaller image first");
        let newImage = new Image();
        newImage.src = drawingsFolderPath + "size-" + drawings[imageID].altFilesizes[0] + "/" + drawings[imageID].filename + "-size-" + drawings[imageID].altFilesizes[0] + ".png";
        newImage.onload = () => {
            lightboxImg.src = newImage.src;
            lightbox.style.display = "flex";
            lightboxImgContainerInner.style.aspectRatio = newImage.width / newImage.height;
        }
    }

    // once larger image is done loading, show it instead
    currentImage.onload = () => {
        console.log("larger image just loaded");
        if (currentLightboxID == Number(drawingsContainer.children[imageID].getAttribute("appearance"))) {
            let newImage = new Image();
            newImage.src = currentImage.src;
            newImage.onload = () => {
                lightboxImg.src = newImage.src;
                lightboxImgContainerInner.style.aspectRatio = newImage.width / newImage.height;
            }
        }
    }

    scrollIntoViewIfNotVisible(drawingsContainer.children[drawingsSortedAppearance[currentLightboxID].id], { behavior: "smooth", block: "center" });
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function scrollIntoViewIfNotVisible(target, options) { 
    if (target.getBoundingClientRect().bottom > window.innerHeight) {
        target.scrollIntoView(options);
    }
    
    if (target.getBoundingClientRect().top < 0) {
        target.scrollIntoView(options);
    } 
}

function changeLightboxImg(changeAmount) {
    currentLightboxID += changeAmount;
    currentLightboxID = posmod(currentLightboxID, drawings.length);

    // display new selected lightbox image
    displayLightbox(drawingsFolderPath + drawings[drawingsSortedAppearance[currentLightboxID].id].filename + ".png", Number(drawingsSortedAppearance[currentLightboxID].id));
}

lightboxImgContainer.click(function(e) {
    e.stopPropagation();
});

InputJS.inputEventBus.subscribe("keyInput", keyPressed => {
    if (keyPressed == "ArrowRight") {
        if (lightbox.style.display !== "none") {
            changeLightboxImg(1);
        }
    }

    else if (keyPressed == "ArrowLeft") {
        if (lightbox.style.display !== "none") {
            changeLightboxImg(-1);
        }
    }

    else if (keyPressed == "Escape") {
        closeLightbox();
    }
})
